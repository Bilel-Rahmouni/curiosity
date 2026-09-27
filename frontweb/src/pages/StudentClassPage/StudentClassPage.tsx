import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { ClassFeed } from '../../components/classfeed/ClassFeed/ClassFeed'
import { useAuth } from '../../auth/AuthProvider'
import { supabase, type Classroom } from '../../lib/supabase'
import './StudentClassPage.css'

export function StudentClassPage() {
  const { classroomId } = useParams()
  const { t } = useTranslation()
  const { user } = useAuth()
  const [classroom, setClassroom] = useState<Classroom | null>(null)

  useEffect(() => {
    if (!supabase || !classroomId) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('classrooms')
        .select('*')
        .eq('id', classroomId)
        .maybeSingle()
      if (!cancelled) {
        setClassroom((data as Classroom | null) ?? null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [classroomId])

  if (!classroom) {
    return <PageLayout title={t('feed.title')}>{null}</PageLayout>
  }

  return (
    <PageLayout title={classroom.name}>
      <Link className="student-class__board" to={`/board/${classroom.id}`}>
        {t('board.title')}
      </Link>
      <ClassFeed
        classroomId={classroom.id}
        canPost={classroom.teacher_id === user?.id}
      />
    </PageLayout>
  )
}
