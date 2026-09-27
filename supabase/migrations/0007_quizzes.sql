-- Quizzes: graded tests per classroom.
-- Questions (without answers) live in quizzes.questions; the answer key lives
-- in a separate teacher-only table so students can never read correct answers.
-- Scoring happens server-side in submit_quiz().

create table public.quizzes (
  id uuid primary key default gen_random_uuid(),
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  title text not null,
  -- [{ prompt: {en,fr,ar}, choices: [{en,fr,ar}, ...] }, ...]
  questions jsonb not null default '[]',
  time_limit_min integer,
  due_date date,
  created_at timestamptz not null default now()
);

create table public.quiz_answer_keys (
  quiz_id uuid primary key references public.quizzes (id) on delete cascade,
  -- [correctIndex, ...] aligned with quizzes.questions
  answer_key jsonb not null
);

create table public.quiz_submissions (
  quiz_id uuid not null references public.quizzes (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  answers jsonb not null,
  score numeric not null,
  submitted_at timestamptz not null default now(),
  primary key (quiz_id, student_id)
);

alter table public.quizzes enable row level security;
alter table public.quiz_answer_keys enable row level security;
alter table public.quiz_submissions enable row level security;

create policy "teacher manages quizzes"
  on public.quizzes for all
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

create policy "members read quizzes"
  on public.quizzes for select
  using (
    exists (
      select 1 from public.classroom_members m
      where m.classroom_id = classroom_id and m.student_id = auth.uid()
    )
  );

create policy "parent reads child class quizzes"
  on public.quizzes for select
  using (
    exists (
      select 1
      from public.parent_links l
      join public.classroom_members m on m.student_id = l.child_id
      where l.parent_id = auth.uid() and m.classroom_id = quizzes.classroom_id
    )
  );

create policy "teacher manages answer keys"
  on public.quiz_answer_keys for all
  using (
    exists (
      select 1
      from public.quizzes q
      join public.classrooms c on c.id = q.classroom_id
      where q.id = quiz_id and c.teacher_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.quizzes q
      join public.classrooms c on c.id = q.classroom_id
      where q.id = quiz_id and c.teacher_id = auth.uid()
    )
  );

create policy "student reads own submissions"
  on public.quiz_submissions for select
  using (student_id = auth.uid());

create policy "teacher reads class submissions"
  on public.quiz_submissions for select
  using (
    exists (
      select 1
      from public.quizzes q
      join public.classrooms c on c.id = q.classroom_id
      where q.id = quiz_id and c.teacher_id = auth.uid()
    )
  );

create policy "parent reads child submissions"
  on public.quiz_submissions for select
  using (
    exists (
      select 1 from public.parent_links l
      where l.child_id = quiz_submissions.student_id
        and l.parent_id = auth.uid()
    )
  );

-- Students submit through this RPC only (no insert policy on the table).
create or replace function public.submit_quiz(p_quiz uuid, p_answers jsonb)
returns numeric
language plpgsql
security definer
set search_path = public
as $$
declare
  v_classroom uuid;
  v_key jsonb;
  v_total int;
  v_correct int := 0;
  v_score numeric;
  i int;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  select classroom_id into v_classroom from public.quizzes where id = p_quiz;
  if v_classroom is null then
    raise exception 'quiz not found';
  end if;

  if not exists (
    select 1 from public.classroom_members m
    where m.classroom_id = v_classroom and m.student_id = auth.uid()
  ) then
    raise exception 'not a member';
  end if;

  if exists (
    select 1 from public.quiz_submissions s
    where s.quiz_id = p_quiz and s.student_id = auth.uid()
  ) then
    raise exception 'already submitted';
  end if;

  select answer_key into v_key
  from public.quiz_answer_keys
  where quiz_id = p_quiz;

  v_total := coalesce(jsonb_array_length(v_key), 0);
  if v_total = 0 then
    raise exception 'quiz has no answer key';
  end if;

  for i in 0 .. v_total - 1 loop
    if (p_answers -> i) is not null
      and (p_answers -> i)::text = (v_key -> i)::text then
      v_correct := v_correct + 1;
    end if;
  end loop;

  v_score := round(100.0 * v_correct / v_total, 1);

  insert into public.quiz_submissions (quiz_id, student_id, answers, score)
  values (p_quiz, auth.uid(), p_answers, v_score);

  return v_score;
end;
$$;
