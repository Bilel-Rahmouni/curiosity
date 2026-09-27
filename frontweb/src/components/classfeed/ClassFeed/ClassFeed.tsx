import { useEffect, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase } from '../../../lib/supabase'
import './ClassFeed.css'

type Post = {
  id: string
  classroom_id: string
  author_id: string
  author_name: string
  body: string
  created_at: string
}

type Comment = {
  id: string
  post_id: string
  author_id: string
  author_name: string
  body: string
  created_at: string
}

type ClassFeedProps = {
  classroomId: string
  canPost: boolean
}

export function ClassFeed({ classroomId, canPost }: ClassFeedProps) {
  const { t } = useTranslation()
  const { user, profile } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [draft, setDraft] = useState('')
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>(
    {},
  )

  useEffect(() => {
    if (!supabase) return
    let cancelled = false
    void (async () => {
      const { data: postRows } = await supabase!
        .from('class_posts')
        .select('*')
        .eq('classroom_id', classroomId)
        .order('created_at', { ascending: false })
      if (cancelled) return
      const list = (postRows as Post[] | null) ?? []
      setPosts(list)
      if (list.length > 0) {
        const { data: commentRows } = await supabase!
          .from('post_comments')
          .select('*')
          .in(
            'post_id',
            list.map((p) => p.id),
          )
          .order('created_at', { ascending: true })
        if (!cancelled) {
          setComments((commentRows as Comment[] | null) ?? [])
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [classroomId])

  async function handlePost(event: FormEvent) {
    event.preventDefault()
    if (!supabase || !user || !draft.trim()) return
    const { data, error } = await supabase
      .from('class_posts')
      .insert({
        classroom_id: classroomId,
        author_id: user.id,
        author_name: profile?.display_name ?? '',
        body: draft.trim(),
      })
      .select()
      .single()
    if (!error && data) {
      setPosts((prev) => [data as Post, ...prev])
      setDraft('')
    }
  }

  async function handleComment(postId: string, event: FormEvent) {
    event.preventDefault()
    const body = (commentDrafts[postId] ?? '').trim()
    if (!supabase || !user || !body) return
    const { data, error } = await supabase
      .from('post_comments')
      .insert({
        post_id: postId,
        author_id: user.id,
        author_name: profile?.display_name ?? '',
        body,
      })
      .select()
      .single()
    if (!error && data) {
      setComments((prev) => [...prev, data as Comment])
      setCommentDrafts((prev) => ({ ...prev, [postId]: '' }))
    }
  }

  return (
    <div className="class-feed">
      {canPost && (
        <form className="class-feed__compose" onSubmit={handlePost}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t('feed.placeholder')}
            rows={2}
            required
          />
          <button type="submit">{t('feed.post')}</button>
        </form>
      )}

      <ul className="class-feed__posts">
        {posts.map((post) => {
          const postComments = comments.filter((c) => c.post_id === post.id)
          return (
            <li key={post.id} className="class-feed__post">
              <div className="class-feed__post-head">
                <span className="class-feed__author">{post.author_name}</span>
                <span className="class-feed__date" dir="ltr">
                  {post.created_at.slice(0, 10)}
                </span>
              </div>
              <p className="class-feed__body">{post.body}</p>

              {postComments.length > 0 && (
                <ul className="class-feed__comments">
                  {postComments.map((c) => (
                    <li key={c.id}>
                      <span className="class-feed__author">
                        {c.author_name}
                      </span>{' '}
                      {c.body}
                    </li>
                  ))}
                </ul>
              )}

              <form
                className="class-feed__comment-form"
                onSubmit={(e) => void handleComment(post.id, e)}
              >
                <input
                  type="text"
                  value={commentDrafts[post.id] ?? ''}
                  onChange={(e) =>
                    setCommentDrafts((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  placeholder={t('feed.commentPlaceholder')}
                  required
                />
                <button type="submit">{t('feed.comment')}</button>
              </form>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
