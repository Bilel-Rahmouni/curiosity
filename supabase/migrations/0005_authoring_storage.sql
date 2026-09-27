-- Phase 5: lesson media storage and content update bookkeeping.

insert into storage.buckets (id, name, public)
values ('lesson-media', 'lesson-media', true)
on conflict (id) do nothing;

create policy "lesson media readable by everyone"
  on storage.objects for select
  using (bucket_id = 'lesson-media');

create policy "admins upload lesson media"
  on storage.objects for insert
  with check (bucket_id = 'lesson-media' and public.is_admin());

create policy "admins update lesson media"
  on storage.objects for update
  using (bucket_id = 'lesson-media' and public.is_admin());

create policy "admins delete lesson media"
  on storage.objects for delete
  using (bucket_id = 'lesson-media' and public.is_admin());

create or replace function public.touch_lesson_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger lessons_touch_updated_at
  before update on public.lessons
  for each row execute function public.touch_lesson_updated_at();
