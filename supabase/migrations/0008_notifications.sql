-- Notifications with fan-out triggers.

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  kind text not null check (kind in ('assignment', 'quiz', 'post', 'session')),
  title text not null,
  link text,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create index notifications_user_idx
  on public.notifications (user_id, created_at desc);

alter table public.notifications enable row level security;

create policy "own notifications read"
  on public.notifications for select using (user_id = auth.uid());

create policy "own notifications update"
  on public.notifications for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Inserts happen only through security-definer trigger functions.

create or replace function public.notify_classroom(
  p_classroom uuid,
  p_kind text,
  p_title text,
  p_link text
)
returns void
language sql
security definer
set search_path = public
as $$
  insert into public.notifications (user_id, kind, title, link)
  select m.student_id, p_kind, p_title, p_link
  from public.classroom_members m
  where m.classroom_id = p_classroom;
$$;

create or replace function public.on_assignment_created()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.notify_classroom(
    new.classroom_id,
    'assignment',
    (select name from public.classrooms where id = new.classroom_id),
    '/path'
  );
  return new;
end;
$$;

create trigger assignment_notify
  after insert on public.assignments
  for each row execute function public.on_assignment_created();

create or replace function public.on_quiz_created()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.notify_classroom(
    new.classroom_id,
    'quiz',
    new.title,
    '/quiz/' || new.id
  );
  return new;
end;
$$;

create trigger quiz_notify
  after insert on public.quizzes
  for each row execute function public.on_quiz_created();

-- Realtime stream for the in-app bell.
alter publication supabase_realtime add table public.notifications;
