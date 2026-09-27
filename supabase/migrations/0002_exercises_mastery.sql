-- Phase 2: exercise attempts, XP, and mastery aggregation.

create table public.exercise_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  subject_slug text not null,
  level_slug text not null,
  unit_slug text not null,
  lesson_slug text not null,
  exercise_id text not null,
  correct boolean not null,
  answer jsonb,
  created_at timestamptz not null default now()
);

create index exercise_attempts_user_idx
  on public.exercise_attempts (user_id, subject_slug, level_slug, unit_slug);

alter table public.exercise_attempts enable row level security;

create policy "users read own attempts"
  on public.exercise_attempts for select using (auth.uid() = user_id);
create policy "users insert own attempts"
  on public.exercise_attempts for insert with check (auth.uid() = user_id);

-- Records an attempt and updates XP/streak atomically.
-- First-ever correct answer on an exercise: +10 XP, later correct answers: +2 XP.
create or replace function public.record_attempt(
  p_subject text,
  p_level text,
  p_unit text,
  p_lesson text,
  p_exercise_id text,
  p_correct boolean,
  p_answer jsonb default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_first_correct boolean := false;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  if p_correct then
    select not exists (
      select 1 from public.exercise_attempts
      where user_id = auth.uid()
        and subject_slug = p_subject and level_slug = p_level
        and unit_slug = p_unit and lesson_slug = p_lesson
        and exercise_id = p_exercise_id and correct
    ) into v_first_correct;
  end if;

  insert into public.exercise_attempts
    (user_id, subject_slug, level_slug, unit_slug, lesson_slug, exercise_id, correct, answer)
  values
    (auth.uid(), p_subject, p_level, p_unit, p_lesson, p_exercise_id, p_correct, p_answer);

  update public.profiles
  set
    xp = xp + case
      when p_correct and v_first_correct then 10
      when p_correct then 2
      else 0
    end,
    streak = case
      when last_active_date = current_date then streak
      when last_active_date = current_date - 1 then streak + 1
      else 1
    end,
    last_active_date = current_date
  where id = auth.uid();
end;
$$;

-- Per-user per-unit mastery summary, used by dashboards.
create or replace view public.unit_mastery
with (security_invoker = true)
as
select
  a.user_id,
  a.subject_slug,
  a.level_slug,
  a.unit_slug,
  count(distinct a.exercise_id) filter (where a.correct) as exercises_correct,
  count(distinct a.exercise_id) as exercises_tried,
  (
    select count(*) from public.user_lesson_progress p
    where p.user_id = a.user_id
      and p.subject_slug = a.subject_slug
      and p.level_slug = a.level_slug
      and p.unit_slug = a.unit_slug
  ) as lessons_completed
from public.exercise_attempts a
group by a.user_id, a.subject_slug, a.level_slug, a.unit_slug;
