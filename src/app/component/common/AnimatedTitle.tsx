'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { headers } from 'next/headers'

export default function Component() {
  const titleRef = useRef(null)

  useEffect(() => {
    const title = (titleRef as any).current
    const letters = title.querySelectorAll('.letter')

    gsap.set(letters, { y: 50, opacity: 0 })

    gsap.to(letters, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      }
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Main title section */}
      <section className="relative min-h-screen items-center justify-center p-20">
        <h1 
          ref={titleRef} 
          className="text-2xl sm:text-4xl md:text-6xl font-bold text-white text-center"
        >
          {"Welcome to My Website".split('').map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </section>
    </div>
  )
}