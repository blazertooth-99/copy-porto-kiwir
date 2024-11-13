import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const NUM_PARTICLES = 15
const COLORS = ['#42DCFF', '#FF3C8D', '#5CFF6B', '#FFF700']

function CoolMeteorParticles() {
  const particlesRef = useRef([])

  useEffect(() => {
    particlesRef.current.forEach((particle, index) => {
      const color = COLORS[index % COLORS.length]

      // Set initial styles and random position for each particle
      gsap.set(particle, {
        width: gsap.utils.random(10, 20),
        height: gsap.utils.random(2, 6),
        backgroundColor: color,
        opacity: 0,
        borderRadius: '50%',
        filter: 'blur(8px)',
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight / 2),
      })

      // Create a repeating "meteor" animation with a curved path
      const animateMeteor = () => {
        gsap.to(particle, {
          motionPath: {
            path: [
              { x: particle.offsetLeft, y: particle.offsetTop },
              { x: particle.offsetLeft + gsap.utils.random(200, 400), y: particle.offsetTop + gsap.utils.random(200, 500) }
            ],
            curviness: 1.25,
            autoRotate: true,
          },
          opacity: 1,
          scaleX: 4,
          scaleY: 0.8,
          duration: gsap.utils.random(1.5, 3),
          ease: 'power2.out',
          onComplete: () => {
            // Fade out the particle after animation and restart
            gsap.to(particle, {
              opacity: 0,
              duration: 0.5,
              onComplete: animateMeteor,
              delay: gsap.utils.random(1, 3), // Delay before restarting
            })
          },
        })
      }

      animateMeteor() // Start the initial animation
    })
  }, [])

  return (
    <div className="meteor-particles-container w-full overflow-hidden">
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
          pointer-events: none;
          transform-origin: center;
          filter: brightness(5) blur(8px);
        }
      `}</style>
    </div>
  )
}

export default CoolMeteorParticles
