import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url!, anonKey!)
  : null

export type ProfileRole = 'student' | 'teacher' | 'parent' | 'admin'

export type Profile = {
  id: string
  display_name: string
  role: ProfileRole
  xp: number
  streak: number
  last_active_date: string | null
  last_lesson_key: string | null
  family_code: string
  leaderboard_opt_out?: boolean
  placement?: Record<string, string>
}

export type ProgressRow = {
  subject_slug: string
  level_slug: string
  unit_slug: string
  lesson_slug: string
  completed_at: string
}

export type AttemptRow = {
  user_id?: string
  subject_slug: string
  level_slug: string
  unit_slug: string
  lesson_slug: string
  exercise_id: string
  correct: boolean
  created_at: string
}

export type LessonRow = {
  subject_slug: string
  level_slug: string
  unit_slug: string
  slug: string
  position: number
  title: Record<string, string>
  blocks: unknown[]
  status: 'draft' | 'published'
  updated_at: string
}

export type Classroom = {
  id: string
  teacher_id: string
  name: string
  join_code: string
  created_at: string
}

export type ClassroomMember = {
  classroom_id: string
  student_id: string
  joined_at: string
}

export type Assignment = {
  id: string
  classroom_id: string
  subject_slug: string
  level_slug: string
  unit_slug: string
  due_date: string | null
  created_at: string
}

export type QuizQuestion = {
  prompt: Record<string, string>
  choices: Record<string, string>[]
}

export type Quiz = {
  id: string
  classroom_id: string
  title: string
  questions: QuizQuestion[]
  time_limit_min: number | null
  due_date: string | null
  created_at: string
}

export type QuizSubmission = {
  quiz_id: string
  student_id: string
  answers: number[]
  score: number
  submitted_at: string
}

export type TeacherListing = {
  teacher_id: string
  display_name: string
  bio: string
  subjects: string[]
  hourly_rate_millimes: number | null
}

export type TeacherProfileRow = {
  teacher_id: string
  bio: string
  subjects: string[]
  hourly_rate_millimes: number | null
  approved: boolean
  updated_at: string
}

export type JoinRequest = {
  id: string
  teacher_id: string
  student_id: string
  message: string
  status: 'pending' | 'accepted' | 'declined'
  created_at: string
}

export type PayoutRow = {
  id: string
  teacher_id: string
  amount_millimes: number
  note: string
  created_at: string
}

export type ClassSession = {
  id: string
  classroom_id: string
  title: string
  starts_at: string
  duration_min: number
  meeting_url: string | null
  created_at: string
}

export type Subscription = {
  user_id: string
  status: 'inactive' | 'active' | 'past_due' | 'canceled'
  plan: 'monthly' | 'yearly'
  current_period_end: string | null
  updated_at: string
}
