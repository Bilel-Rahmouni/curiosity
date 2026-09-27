-- Phase 1: content catalog, profiles, lesson progress.

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------------------------------------------------------------------------
-- Content catalog. Titles are localized jsonb: {"en": "...", "fr": "...", "ar": "..."}.
-- Lesson blocks reuse the frontend LessonBlock JSON shape unchanged.
-- ---------------------------------------------------------------------------

create table public.subjects (
  slug text primary key,
  position int not null default 0,
  title jsonb not null default '{}'::jsonb
);

create table public.levels (
  subject_slug text not null references public.subjects (slug) on delete cascade,
  slug text not null,
  position int not null default 0,
  title jsonb not null default '{}'::jsonb,
  primary key (subject_slug, slug)
);

create table public.units (
  subject_slug text not null,
  level_slug text not null,
  slug text not null,
  position int not null default 0,
  title jsonb not null default '{}'::jsonb,
  primary key (subject_slug, level_slug, slug),
  foreign key (subject_slug, level_slug)
    references public.levels (subject_slug, slug) on delete cascade
);

create table public.lessons (
  subject_slug text not null,
  level_slug text not null,
  unit_slug text not null,
  slug text not null,
  position int not null default 0,
  title jsonb not null default '{}'::jsonb,
  blocks jsonb not null default '[]'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  updated_at timestamptz not null default now(),
  primary key (subject_slug, level_slug, unit_slug, slug),
  foreign key (subject_slug, level_slug, unit_slug)
    references public.units (subject_slug, level_slug, slug) on delete cascade
);

alter table public.subjects enable row level security;
alter table public.levels enable row level security;
alter table public.units enable row level security;
alter table public.lessons enable row level security;

create policy "subjects readable by everyone"
  on public.subjects for select using (true);
create policy "levels readable by everyone"
  on public.levels for select using (true);
create policy "units readable by everyone"
  on public.units for select using (true);
create policy "published lessons readable, drafts by admins"
  on public.lessons for select
  using (status = 'published' or public.is_admin());

create policy "admins manage subjects"
  on public.subjects for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage levels"
  on public.levels for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage units"
  on public.units for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage lessons"
  on public.lessons for all using (public.is_admin()) with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- Profiles (auto-created on signup)
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '',
  role text not null default 'student' check (role in ('student', 'teacher', 'parent', 'admin')),
  xp int not null default 0,
  streak int not null default 0,
  last_active_date date,
  last_lesson_key text,
  family_code text not null unique default upper(substr(md5(random()::text), 1, 8)),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "users read own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "users update own profile"
  on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name',
                           new.raw_user_meta_data ->> 'full_name',
                           split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Lesson progress
-- ---------------------------------------------------------------------------

create table public.user_lesson_progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  subject_slug text not null,
  level_slug text not null,
  unit_slug text not null,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, subject_slug, level_slug, unit_slug, lesson_slug)
);

alter table public.user_lesson_progress enable row level security;

create policy "users read own progress"
  on public.user_lesson_progress for select using (auth.uid() = user_id);
create policy "users write own progress"
  on public.user_lesson_progress for insert with check (auth.uid() = user_id);
create policy "users delete own progress"
  on public.user_lesson_progress for delete using (auth.uid() = user_id);

-- Completing a lesson also grants XP and maintains the daily streak.
create or replace function public.complete_lesson(
  p_subject text,
  p_level text,
  p_unit text,
  p_lesson text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_inserted int;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  insert into public.user_lesson_progress
    (user_id, subject_slug, level_slug, unit_slug, lesson_slug)
  values (auth.uid(), p_subject, p_level, p_unit, p_lesson)
  on conflict do nothing;

  get diagnostics v_inserted = row_count;

  update public.profiles
  set
    xp = xp + case when v_inserted > 0 then 20 else 0 end,
    streak = case
      when last_active_date = current_date then streak
      when last_active_date = current_date - 1 then streak + 1
      else 1
    end,
    last_active_date = current_date,
    last_lesson_key = p_subject || '.' || p_level || '.' || p_unit || '.' || p_lesson
  where id = auth.uid();
end;
$$;
