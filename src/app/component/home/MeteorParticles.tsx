import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const NUM_PARTICLES = 10
const COLORS = ['#42DCFF', '#FF3C8D', '#5CFF6B', '#FFF700']

function MeteorParticles() {
  const particlesRef = useRef([])

  useEffect(() => {
    particlesRef.current.forEach((particle, index) => {
      const size = gsap.utils.random(10, 30)
      const delay = index * 0.2 // Stagger the appearance of each particle
      const color = COLORS[index % COLORS.length]

      gsap.set(particle, {
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0,
        x: gsap.utils.random(-100, window.innerWidth + 100),
        y: gsap.utils.random(-100, window.innerHeight + 100),
        borderRadius: '50%',
        filter: 'blur(4px)',
      })

      // Create the meteor animation effect
      gsap.to(particle, {
        opacity: 1,
        x: `+=${gsap.utils.random(300, 600)}`, // Move horizontally
        y: `+=${gsap.utils.random(300, 600)}`, // Move diagonally
        scaleX: 1.5,
        scaleY: 0.8,
        duration: gsap.utils.random(1, 2),
        ease: 'power2.out',
        delay: delay,
        repeat: -1,
        yoyo: true,
        repeatDelay: gsap.utils.random(1, 3),
      })

      // Add a trailing fade-out effect
      gsap.to(particle, {
        opacity: 0,
        duration: 1,
        delay: delay + 1,
        repeat: -1,
        repeatDelay: gsap.utils.random(2, 4),
      })
    })
  }, [])

  return (
    <div className="meteor-particles-container">
      {[...Array(NUM_PARTICLES)].map((_, index) => (
        <div
          key={index}
          className="particle"
          ref={(el) => (particlesRef.current[index] = el)}
        ></div>
      ))}

      <style jsx>{`
        .meteor-particles-container {
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
          filter: blur(10px); // Increase for a glowing effect
        }
      `}</style>
    </div>
  )
}

export default MeteorParticles;
