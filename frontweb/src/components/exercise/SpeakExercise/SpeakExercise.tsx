import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pickLocalized, type LessonBlock } from '../../../content/types'
import './SpeakExercise.css'

type SpeakBlock = Extract<LessonBlock, { type: 'speak' }>

type SpeakExerciseProps = {
  block: SpeakBlock
}

type RecognitionCtor = new () => SpeechRecognitionLike

type SpeechRecognitionLike = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  onresult: ((event: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null
  onend: (() => void) | null
  onerror: (() => void) | null
  start: () => void
  abort: () => void
}

function getRecognitionCtor(): RecognitionCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor
    webkitSpeechRecognition?: RecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function SpeakExercise({ block }: SpeakExerciseProps) {
  const { t, i18n } = useTranslation()
  const [listening, setListening] = useState(false)
  const [result, setResult] = useState<'correct' | 'retry' | null>(null)
  const [heard, setHeard] = useState('')
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)

  const ttsSupported =
    typeof window !== 'undefined' && 'speechSynthesis' in window
  const recognitionCtor = getRecognitionCtor()

  useEffect(() => {
    return () => recognitionRef.current?.abort()
  }, [])

  if (!ttsSupported && !recognitionCtor) return null

  function play() {
    if (!ttsSupported) return
    const utterance = new SpeechSynthesisUtterance(block.phrase)
    utterance.lang = block.lang
    utterance.rate = 0.9
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  function listen() {
    if (!recognitionCtor || listening) return
    const recognition = new recognitionCtor()
    recognitionRef.current = recognition
    recognition.lang = block.lang
    recognition.interimResults = false
    recognition.maxAlternatives = 3
    setResult(null)
    setHeard('')
    setListening(true)
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript ?? ''
      setHeard(transcript)
      setResult(
        normalize(transcript) === normalize(block.phrase)
          ? 'correct'
          : 'retry',
      )
    }
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setListening(false)
    recognition.start()
  }

  return (
    <div className="speak-exercise" dir="ltr">
      <div className="speak-exercise__phrase-row">
        <span className="speak-exercise__phrase" lang={block.lang}>
          {block.phrase}
        </span>
        {block.translation && (
          <span className="speak-exercise__translation">
            {pickLocalized(block.translation, i18n.language)}
          </span>
        )}
      </div>
      <div className="speak-exercise__controls">
        {ttsSupported && (
          <button type="button" onClick={play}>
            🔊 {t('speak.listen')}
          </button>
        )}
        {recognitionCtor && (
          <button
            type="button"
            className={listening ? 'speak-exercise__mic--on' : ''}
            onClick={listen}
            disabled={listening}
          >
            🎙 {listening ? t('speak.listening') : t('speak.say')}
          </button>
        )}
      </div>
      {result && (
        <p
          className={`speak-exercise__result speak-exercise__result--${result}`}
        >
          {result === 'correct' ? t('speak.correct') : t('speak.tryAgain')}
          {heard && result === 'retry' && (
            <span className="speak-exercise__heard"> “{heard}”</span>
          )}
        </p>
      )}
    </div>
  )
}
