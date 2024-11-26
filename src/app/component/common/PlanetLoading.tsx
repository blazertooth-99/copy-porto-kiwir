'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FuturisticLoading() {
  const containerRef = useRef<SVGSVGElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const particlesRef = useRef<SVGGElement>(null)

  useEffect(() => {
    if (!containerRef.current || !circleRef.current || !particlesRef.current) return

    const container = containerRef.current
    const circle = circleRef.current
    const particles = particlesRef.current

    gsap.set(particles.children, {
      scale: 0,
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-50, 50),
    })

    const tl = gsap.timeline({ repeat: -1 })

    tl.to(circle, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
    })
    .to(circle, {
      rotation: 360,
      transformOrigin: "center",
      duration: 8,
      ease: "none",
      repeat: -1,
    }, 0)
    .to(particles.children, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "back.out",
    }, 0)
    .to(particles.children, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "back.in",
    }, 1.6)

    gsap.to(container, {
      rotation: -360,
      transformOrigin: "center",
      duration: 20,
      ease: "none",
      repeat: -1,
    })

    return () => {
      tl.kill()
      gsap.killTweensOf(container)
    }
  }, [])

  return (
    <div className="flex items-center justify-center">
      <svg
        ref={containerRef}
        width="300"
        height="300"
        viewBox="-100 -100 300 300"
        aria-label="Loading"
        role="progressbar"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#91e9ff" />
          </linearGradient>
        </defs>
        <circle
          ref={circleRef}
          r="50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray="502.4"
          strokeDashoffset="502.4"
          strokeLinecap="round"
        />
        <g ref={particlesRef}>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              r="3"
              fill="#00ffff"
              opacity="0"
            />
          ))}
        </g>
        <circle r="60" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.3" />
        <circle r="40" fill="none" stroke="#91e9ff" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  )
}