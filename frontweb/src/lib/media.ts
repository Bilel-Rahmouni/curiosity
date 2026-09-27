import { supabase } from './supabase'

const BUCKET = 'lesson-media'

export async function uploadLessonMedia(file: File): Promise<string | null> {
  if (!supabase) return null
  const path = `${crypto.randomUUID()}-${file.name.replace(/[^\w.-]/g, '_')}`
  const { error } = await supabase.storage.from(BUCKET).upload(path, file)
  if (error) return null
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data.publicUrl
}
