'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ZoomInScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current || !headingsRef.current[0]) return

    gsap.to(headingsRef.current[0], {
      scale: 100,
      duration: 3,
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        end: 'bottom top',
        scrub: 3,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const word = 'Zoom'

  return (
    <section ref={sectionRef} id="zoom-in" className="h-screen bg-gradient-to-b from-purple-600 to-blue-600">
      <div className="h-full flex items-center justify-center overflow-hidden">
        <h2
          ref={(el) => (headingsRef.current[0] = el)}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold opacity-80"
        >
          {word}
        </h2>
      </div>
    </section>
  )
}