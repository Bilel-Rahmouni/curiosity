-- Live class sessions (calendar).

create table public.class_sessions (
  id uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  title text not null,
  starts_at timestamptz not null,
  duration_min integer not null default 60,
  meeting_url text,
  created_at timestamptz not null default now()
);

create index class_sessions_starts_idx
  on public.class_sessions (classroom_id, starts_at);

alter table public.class_sessions enable row level security;

create policy "teacher manages sessions"
  on public.class_sessions for all
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

create policy "members read sessions"
  on public.class_sessions for select
  using (
    exists (
      select 1 from public.classroom_members m
      where m.classroom_id = classroom_id and m.student_id = auth.uid()
    )
  );

create or replace function public.on_session_created()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.notify_classroom(
    new.classroom_id,
    'session',
    new.title,
    '/class/' || new.classroom_id
  );
  return new;
end;
$$;

create trigger session_notify
  after insert on public.class_sessions
  for each row execute function public.on_session_created();
