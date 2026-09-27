import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { supabase, type Classroom } from '../../lib/supabase'
import './BoardPage.css'

const BOARD_W = 1600
const BOARD_H = 1000
const BG = '#101014'

const COLORS = ['#f5f5f5', '#ff5c5c', '#ffd166', '#4cc9f0', '#80ed99']

type Segment = {
  x0: number
  y0: number
  x1: number
  y1: number
  color: string
  size: number
}

function drawSegment(ctx: CanvasRenderingContext2D, s: Segment) {
  ctx.strokeStyle = s.color
  ctx.lineWidth = s.size
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(s.x0, s.y0)
  ctx.lineTo(s.x1, s.y1)
  ctx.stroke()
}

function clearCanvas(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = BG
  ctx.fillRect(0, 0, BOARD_W, BOARD_H)
}

export function BoardPage() {
  const { classroomId } = useParams()
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const channelRef = useRef<RealtimeChannel | null>(null)
  const lastPoint = useRef<{ x: number; y: number } | null>(null)
  const [allowed, setAllowed] = useState<boolean | null>(null)
  const [color, setColor] = useState(COLORS[0])
  const [size, setSize] = useState(4)
  const [eraser, setEraser] = useState(false)

  useEffect(() => {
    if (!supabase || !classroomId) {
      setAllowed(false)
      return
    }
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('classrooms')
        .select('id')
        .eq('id', classroomId)
        .maybeSingle()
      if (!cancelled) {
        setAllowed(Boolean(data as Classroom | null))
      }
    })()
    return () => {
      cancelled = true
    }
  }, [classroomId])

  useEffect(() => {
    if (!supabase || !classroomId || !allowed) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) clearCanvas(ctx)

    const channel = supabase
      .channel(`board-${classroomId}`)
      .on('broadcast', { event: 'segment' }, ({ payload }) => {
        const c = canvasRef.current?.getContext('2d')
        if (c) drawSegment(c, payload as Segment)
      })
      .on('broadcast', { event: 'clear' }, () => {
        const c = canvasRef.current?.getContext('2d')
        if (c) clearCanvas(c)
      })
      .subscribe()
    channelRef.current = channel

    return () => {
      channelRef.current = null
      void supabase!.removeChannel(channel)
    }
  }, [classroomId, allowed])

  function canvasPoint(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((event.clientX - rect.left) / rect.width) * BOARD_W,
      y: ((event.clientY - rect.top) / rect.height) * BOARD_H,
    }
  }

  function handlePointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    lastPoint.current = canvasPoint(event)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!lastPoint.current) return
    const point = canvasPoint(event)
    const segment: Segment = {
      x0: lastPoint.current.x,
      y0: lastPoint.current.y,
      x1: point.x,
      y1: point.y,
      color: eraser ? BG : color,
      size: eraser ? 30 : size,
    }
    lastPoint.current = point
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) drawSegment(ctx, segment)
    void channelRef.current?.send({
      type: 'broadcast',
      event: 'segment',
      payload: segment,
    })
  }

  function handlePointerUp() {
    lastPoint.current = null
  }

  function handleClear() {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) clearCanvas(ctx)
    void channelRef.current?.send({
      type: 'broadcast',
      event: 'clear',
      payload: {},
    })
  }

  if (allowed === false) {
    return (
      <main className="board-page">
        <p className="board-page__denied">{t('common.notFound')}</p>
      </main>
    )
  }

  return (
    <main className="board-page">
      <div className="board-page__toolbar" dir="ltr">
        {COLORS.map((c) => (
          <button
            key={c}
            type="button"
            className={`board-page__swatch${!eraser && color === c ? ' board-page__swatch--active' : ''}`}
            style={{ background: c }}
            aria-label={c}
            onClick={() => {
              setColor(c)
              setEraser(false)
            }}
          />
        ))}
        <input
          type="range"
          min={2}
          max={16}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          aria-label={t('board.size')}
        />
        <button
          type="button"
          className={`board-page__tool${eraser ? ' board-page__tool--active' : ''}`}
          onClick={() => setEraser((v) => !v)}
        >
          {t('board.eraser')}
        </button>
        <button type="button" className="board-page__tool" onClick={handleClear}>
          {t('board.clear')}
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="board-page__canvas"
        width={BOARD_W}
        height={BOARD_H}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </main>
  )
}
