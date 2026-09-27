-- Weekly class leaderboards with per-user opt-out.

alter table public.profiles
  add column leaderboard_opt_out boolean not null default false;

-- Weekly XP = 10 per correct exercise + 20 per completed lesson (last 7 days).
-- Security definer so class members can see each other's ranking without
-- opening up raw attempt data; access limited to members/teacher of the class.
create or replace function public.class_leaderboard(p_classroom uuid)
returns table (student_id uuid, display_name text, weekly_xp bigint)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_class_member_or_teacher(p_classroom) then
    raise exception 'not a member';
  end if;

  return query
  select
    m.student_id,
    pr.display_name,
    (coalesce(a.xp, 0) + coalesce(l.xp, 0))::bigint as weekly_xp
  from public.classroom_members m
  join public.profiles pr on pr.id = m.student_id
  left join lateral (
    select count(*) * 10 as xp
    from public.exercise_attempts e
    where e.user_id = m.student_id
      and e.correct
      and e.created_at > now() - interval '7 days'
  ) a on true
  left join lateral (
    select count(*) * 20 as xp
    from public.user_lesson_progress p
    where p.user_id = m.student_id
      and p.completed_at > now() - interval '7 days'
  ) l on true
  where m.classroom_id = p_classroom
    and pr.leaderboard_opt_out = false
  order by weekly_xp desc, pr.display_name;
end;
$$;
