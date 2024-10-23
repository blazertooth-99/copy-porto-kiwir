'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { TYPED_STR } from '@/app/constant'

// Register the TextPlugin
gsap.registerPlugin(TextPlugin)

export default function TypingAnimation() {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    TYPED_STR.forEach((phrase) => {
      tl.to(text, {
        duration: 5,
        text: phrase,
        ease: "back.out",
        delay: 0.5,
      }).to(text, {
        duration: 5,
        text: "",
        ease: "back.in",
        delay: 0.5,
      })
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="flex items-center justify-start">
      <p
        ref={textRef}
        className="text-3xl font-bold text-cyan-400"
        aria-live="polite"
      ></p>
    </div>
  )
}