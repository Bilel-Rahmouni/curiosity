-- Placement test results: { "<subject_slug>": "<level_slug>", ... }
alter table public.profiles
  add column placement jsonb not null default '{}';
