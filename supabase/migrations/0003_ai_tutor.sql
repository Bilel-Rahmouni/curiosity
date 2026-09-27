-- Phase 3: AI tutor usage quotas.

create table public.ai_usage (
  user_id uuid not null references public.profiles (id) on delete cascade,
  day date not null default current_date,
  count int not null default 0,
  primary key (user_id, day)
);

alter table public.ai_usage enable row level security;

create policy "users read own ai usage"
  on public.ai_usage for select using (auth.uid() = user_id);

-- Called by the ai-tutor edge function (service role bypasses RLS).
-- Returns true when the user is still under the daily quota.
create or replace function public.increment_ai_usage(p_user uuid, p_limit int)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count int;
begin
  insert into public.ai_usage (user_id, day, count)
  values (p_user, current_date, 1)
  on conflict (user_id, day)
  do update set count = public.ai_usage.count + 1
  returning count into v_count;

  return v_count <= p_limit;
end;
$$;
