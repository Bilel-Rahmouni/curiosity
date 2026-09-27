-- Certificates for completed levels, with public verification by serial.

create table public.certificates (
  serial text primary key
    default upper(substr(md5(random()::text || clock_timestamp()::text), 1, 10)),
  user_id uuid not null references public.profiles (id) on delete cascade,
  subject_slug text not null,
  level_slug text not null,
  issued_at timestamptz not null default now(),
  unique (user_id, subject_slug, level_slug)
);

alter table public.certificates enable row level security;

create policy "own certificates read"
  on public.certificates for select using (user_id = auth.uid());

-- Issue a certificate once every published lesson of the level is completed.
create or replace function public.issue_certificate(p_subject text, p_level text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_total int;
  v_done int;
  v_serial text;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  select count(*) into v_total
  from public.lessons
  where subject_slug = p_subject
    and level_slug = p_level
    and status = 'published';

  if v_total = 0 then
    raise exception 'no published lessons for this level';
  end if;

  select count(*) into v_done
  from public.user_lesson_progress p
  where p.user_id = auth.uid()
    and p.subject_slug = p_subject
    and p.level_slug = p_level;

  if v_done < v_total then
    raise exception 'level not complete';
  end if;

  insert into public.certificates (user_id, subject_slug, level_slug)
  values (auth.uid(), p_subject, p_level)
  on conflict (user_id, subject_slug, level_slug)
    do update set subject_slug = excluded.subject_slug
  returning serial into v_serial;

  return v_serial;
end;
$$;

-- Public verification: exposes a single certificate by exact serial only.
create or replace function public.verify_certificate(p_serial text)
returns table (
  serial text,
  student_name text,
  subject_slug text,
  level_slug text,
  issued_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select c.serial, pr.display_name, c.subject_slug, c.level_slug, c.issued_at
  from public.certificates c
  join public.profiles pr on pr.id = c.user_id
  where c.serial = upper(trim(p_serial));
$$;
