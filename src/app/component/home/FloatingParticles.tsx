'use client';
// FloatingParticles.js (or FloatingParticles.tsx if using TypeScript)


import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const NUM_PARTICLES = 10
const COLORS = ['#42DCFF', '#FF3C8D', '#5CFF6B', '#FFF700']

function FloatingParticles() {
  const particlesRef = useRef([])

  useEffect(() => {
    particlesRef.current.forEach((particle, index) => {
      const size = gsap.utils.random(50, 150)
      const duration = gsap.utils.random(6, 10)
      const color = COLORS[index % COLORS.length]

      gsap.set(particle, {
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.5,
        x: gsap.utils.random(-100, window.innerWidth + 100),
        y: gsap.utils.random(-100, window.innerHeight + 100),
        scale: gsap.utils.random(0.7, 1.3),
        borderRadius: '50%',
        filter: 'blur(10px)',
      })

      gsap.to(particle, {
        x: `+=${gsap.utils.random(-200, 200)}`,
        y: `+=${gsap.utils.random(-200, 200)}`,
        scale: gsap.utils.random(0.8, 1.2),
        opacity: gsap.utils.random(0.3, 0.7),
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <div className="floating-particles-container w-full overflow-hidden">
      {[...Array(NUM_PARTICLES)].map((_, index) => (
        <div
          key={index}
          className="particle"
          ref={(el) => (particlesRef.current[index] = el)}
        ></div>
      ))}

      <style jsx>{`
        .floating-particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          background: radial-gradient(circle, #101010, #090909);
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transform-origin: center;
          filter: blur(15px);
        }
      `}</style>
    </div>
  )
}

export default FloatingParticles;
