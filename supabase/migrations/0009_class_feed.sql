-- Class feed: teacher announcements + member comments.

create table public.class_posts (
  id uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  author_id uuid not null references public.profiles (id) on delete cascade,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table public.post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.class_posts (id) on delete cascade,
  author_id uuid not null references public.profiles (id) on delete cascade,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.class_posts enable row level security;
alter table public.post_comments enable row level security;

create or replace function public.is_class_member_or_teacher(p_classroom uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.classrooms c
    where c.id = p_classroom and c.teacher_id = auth.uid()
  ) or exists (
    select 1 from public.classroom_members m
    where m.classroom_id = p_classroom and m.student_id = auth.uid()
  );
$$;

create policy "class reads posts"
  on public.class_posts for select
  using (public.is_class_member_or_teacher(classroom_id));

create policy "teacher writes posts"
  on public.class_posts for insert
  with check (
    author_id = auth.uid()
    and exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  );

create policy "teacher deletes posts"
  on public.class_posts for delete
  using (
    exists (
      select 1 from public.classrooms c
      where c.id = classroom_id and c.teacher_id = auth.uid()
    )
  );

create policy "class reads comments"
  on public.post_comments for select
  using (
    exists (
      select 1 from public.class_posts p
      where p.id = post_id
        and public.is_class_member_or_teacher(p.classroom_id)
    )
  );

create policy "class writes comments"
  on public.post_comments for insert
  with check (
    author_id = auth.uid()
    and exists (
      select 1 from public.class_posts p
      where p.id = post_id
        and public.is_class_member_or_teacher(p.classroom_id)
    )
  );

create policy "author or teacher deletes comments"
  on public.post_comments for delete
  using (
    author_id = auth.uid()
    or exists (
      select 1
      from public.class_posts p
      join public.classrooms c on c.id = p.classroom_id
      where p.id = post_id and c.teacher_id = auth.uid()
    )
  );

create or replace function public.on_post_created()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.notify_classroom(
    new.classroom_id,
    'post',
    left(new.body, 80),
    '/class/' || new.classroom_id
  );
  return new;
end;
$$;

create trigger post_notify
  after insert on public.class_posts
  for each row execute function public.on_post_created();
