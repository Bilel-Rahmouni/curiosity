-- Phase 4: classrooms, assignments, parent links.

create or replace function public.is_teacher()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('teacher', 'admin')
  );
$$;

create table public.classrooms (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  name text not null,
  join_code text not null unique default upper(substr(md5(random()::text), 1, 6)),
  created_at timestamptz not null default now()
);

create table public.classroom_members (
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (classroom_id, student_id)
);

create table public.assignments (
  id uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  subject_slug text not null,
  level_slug text not null,
  unit_slug text not null,
  due_date date,
  created_at timestamptz not null default now()
);

create table public.parent_links (
  parent_id uuid not null references public.profiles (id) on delete cascade,
  child_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (parent_id, child_id)
);

alter table public.classrooms enable row level security;
alter table public.classroom_members enable row level security;
alter table public.assignments enable row level security;
alter table public.parent_links enable row level security;

-- Classrooms: teachers manage their own; members can read theirs.
create policy "teachers manage own classrooms"
  on public.classrooms for all
  using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid() and public.is_teacher());

create policy "members read their classrooms"
  on public.classrooms for select
  using (
    exists (
      select 1 from public.classroom_members m
      where m.classroom_id = id and m.student_id = auth.uid()
    )
  );

-- Members: visible to the classroom teacher and to the member themselves.
create policy "teacher reads classroom members"
  on public.classroom_members for select
  using (
    exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  );

create policy "students read own memberships"
  on public.classroom_members for select using (student_id = auth.uid());

create policy "teacher removes members"
  on public.classroom_members for delete
  using (
    exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  );

-- Assignments: teacher manages, members read.
create policy "teacher manages assignments"
  on public.assignments for all
  using (
    exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  );

create policy "members read assignments"
  on public.assignments for select
  using (
    exists (
      select 1 from public.classroom_members m
      where m.classroom_id = classroom_id and m.student_id = auth.uid()
    )
  );

-- Parent links: both sides can see the link; parent can remove it.
create policy "link visible to both sides"
  on public.parent_links for select
  using (parent_id = auth.uid() or child_id = auth.uid());

create policy "parent removes link"
  on public.parent_links for delete using (parent_id = auth.uid());

-- Join a classroom with its code.
create or replace function public.join_classroom(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_classroom uuid;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  select id into v_classroom
  from public.classrooms
  where join_code = upper(trim(p_code));

  if v_classroom is null then
    raise exception 'classroom not found';
  end if;

  insert into public.classroom_members (classroom_id, student_id)
  values (v_classroom, auth.uid())
  on conflict do nothing;

  return v_classroom;
end;
$$;

-- Link a child account using its family code.
create or replace function public.link_child(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_child uuid;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  select id into v_child
  from public.profiles
  where family_code = upper(trim(p_code));

  if v_child is null then
    raise exception 'child not found';
  end if;

  if v_child = auth.uid() then
    raise exception 'cannot link self';
  end if;

  insert into public.parent_links (parent_id, child_id)
  values (auth.uid(), v_child)
  on conflict do nothing;

  return v_child;
end;
$$;

-- Teachers and linked parents can read student names, progress, and attempts.
create policy "teacher reads student profiles"
  on public.profiles for select
  using (
    exists (
      select 1
      from public.classroom_members m
      join public.classrooms c on c.id = m.classroom_id
      where m.student_id = profiles.id and c.teacher_id = auth.uid()
    )
  );

create policy "parent reads child profile"
  on public.profiles for select
  using (
    exists (
      select 1 from public.parent_links l
      where l.child_id = profiles.id and l.parent_id = auth.uid()
    )
  );

create policy "teacher reads student progress"
  on public.user_lesson_progress for select
  using (
    exists (
      select 1
      from public.classroom_members m
      join public.classrooms c on c.id = m.classroom_id
      where m.student_id = user_lesson_progress.user_id and c.teacher_id = auth.uid()
    )
  );

create policy "parent reads child progress"
  on public.user_lesson_progress for select
  using (
    exists (
      select 1 from public.parent_links l
      where l.child_id = user_lesson_progress.user_id and l.parent_id = auth.uid()
    )
  );

create policy "teacher reads student attempts"
  on public.exercise_attempts for select
  using (
    exists (
      select 1
      from public.classroom_members m
      join public.classrooms c on c.id = m.classroom_id
      where m.student_id = exercise_attempts.user_id and c.teacher_id = auth.uid()
    )
  );

create policy "parent reads child attempts"
  on public.exercise_attempts for select
  using (
    exists (
      select 1 from public.parent_links l
      where l.child_id = exercise_attempts.user_id and l.parent_id = auth.uid()
    )
  );
