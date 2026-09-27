-- Teacher marketplace: public listings, join requests, manual payout ledger.

create table public.teacher_profiles (
  teacher_id uuid primary key references public.profiles (id) on delete cascade,
  bio text not null default '',
  subjects text[] not null default '{}',
  hourly_rate_millimes integer,
  approved boolean not null default false,
  updated_at timestamptz not null default now()
);

create table public.join_requests (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  message text not null default '',
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'declined')),
  created_at timestamptz not null default now()
);

create unique index join_requests_pending_unique
  on public.join_requests (teacher_id, student_id)
  where status = 'pending';

create table public.payout_ledger (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  amount_millimes integer not null,
  note text not null default '',
  created_at timestamptz not null default now()
);

alter table public.teacher_profiles enable row level security;
alter table public.join_requests enable row level security;
alter table public.payout_ledger enable row level security;

create policy "approved listings are public"
  on public.teacher_profiles for select
  using (approved or teacher_id = auth.uid() or public.is_admin());

create policy "teacher creates own listing"
  on public.teacher_profiles for insert
  with check (
    teacher_id = auth.uid()
    and public.is_teacher()
    and (not approved or public.is_admin())
  );

create policy "teacher updates own listing"
  on public.teacher_profiles for update
  using (teacher_id = auth.uid() or public.is_admin())
  with check (teacher_id = auth.uid() or public.is_admin());

-- Only admins may flip the approved flag.
create or replace function public.guard_teacher_approval()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.approved is distinct from old.approved and not public.is_admin() then
    raise exception 'only admins can change approval';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create trigger teacher_profiles_guard
  before update on public.teacher_profiles
  for each row execute function public.guard_teacher_approval();

create policy "join requests visible to both sides"
  on public.join_requests for select
  using (teacher_id = auth.uid() or student_id = auth.uid());

create policy "student sends join request"
  on public.join_requests for insert
  with check (
    student_id = auth.uid()
    and exists (
      select 1 from public.teacher_profiles tp
      where tp.teacher_id = join_requests.teacher_id and tp.approved
    )
  );

create policy "teacher reads own payouts"
  on public.payout_ledger for select
  using (teacher_id = auth.uid() or public.is_admin());

create policy "admin manages payouts"
  on public.payout_ledger for insert
  with check (public.is_admin());

-- Public directory (bypasses profiles RLS to expose only the display name).
create or replace function public.list_teachers()
returns table (
  teacher_id uuid,
  display_name text,
  bio text,
  subjects text[],
  hourly_rate_millimes integer
)
language sql
stable
security definer
set search_path = public
as $$
  select tp.teacher_id, pr.display_name, tp.bio, tp.subjects,
    tp.hourly_rate_millimes
  from public.teacher_profiles tp
  join public.profiles pr on pr.id = tp.teacher_id
  where tp.approved
  order by pr.display_name;
$$;

-- Teacher accepts/declines; acceptance adds the student to one of the
-- teacher's classrooms.
create or replace function public.respond_join_request(
  p_request uuid,
  p_accept boolean,
  p_classroom uuid default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student uuid;
  v_teacher uuid;
begin
  select student_id, teacher_id into v_student, v_teacher
  from public.join_requests
  where id = p_request and status = 'pending';

  if v_student is null then
    raise exception 'request not found';
  end if;
  if v_teacher <> auth.uid() then
    raise exception 'not your request';
  end if;

  if p_accept then
    if p_classroom is null or not exists (
      select 1 from public.classrooms c
      where c.id = p_classroom and c.teacher_id = auth.uid()
    ) then
      raise exception 'classroom required';
    end if;
    insert into public.classroom_members (classroom_id, student_id)
    values (p_classroom, v_student)
    on conflict do nothing;
    update public.join_requests set status = 'accepted' where id = p_request;
  else
    update public.join_requests set status = 'declined' where id = p_request;
  end if;
end;
$$;
