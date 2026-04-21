import { useEffect, useState } from "react"

export function useTypingEffect(phrases: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[phraseIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          setIsPaused(true)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}
