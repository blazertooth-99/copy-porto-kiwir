'use client'

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function LoopText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const textElements = textRefs.current.filter(Boolean) as HTMLSpanElement[]

    // Set initial positions
    gsap.set(textElements, { xPercent: (i) => i * 100 })

    // Create the animation
    const tl = gsap.timeline()
    tl.to(textElements, {
      xPercent: '-=100',
      ease: 'none',
      repeat: -1,
      duration: 20,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    })

    // Pause animation when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play()
        } else {
          tl.pause()
        }
      },
      { threshold: 0 }
    )

    observer.observe(container)

    return () => {
      tl.kill()
      observer.disconnect()
    }
  }, [])

  const text = "Digital • Print • 3D • Augmented Reality • "

  return (
    <div 
      ref={containerRef} 
      className="relative mx-auto w-full min-h-screen z-200 overflow-hidden py-4 bg-black/10 items-center justify-center"
      aria-label="Looping text: Digital, Print, 3D, Augmented Reality"
    >
      <div className="inline-block whitespace-nowrap">
        {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="inline-block text-xl font-bold text-black px-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}