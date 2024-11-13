import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const NUM_PARTICLES = 20
const NUM_LINES = 5
const COLORS = ['#00FFFF', '#FF00FF', '#39FF14', '#FF5500'] // Neon colors

function CyberpunkMeteorParticles() {
  const particlesRef = useRef([])

  // Randomly create neon lines and particles
  useEffect(() => {
    // Set up neon lines with random positions
    const createNeonLines = () => {
      for (let i = 0; i < NUM_LINES; i++) {
        const line = document.createElement('div')
        line.classList.add('neon-line')
        document.body.appendChild(line)

        // Set random initial position and direction
        gsap.set(line, {
          width: `${gsap.utils.random(200, 400)}px`,
          height: gsap.utils.random(2, 4),
          backgroundColor: COLORS[gsap.utils.random(0, COLORS.length - 1)],
          position: 'absolute',
          top: `${gsap.utils.random(0, window.innerHeight)}px`,
          left: `${gsap.utils.random(0, window.innerWidth)}px`,
          opacity: 0,
          filter: 'blur(4px)',
        })

        // Animate the neon line to move across the screen
        gsap.to(line, {
          x: gsap.utils.random(800, 1200), // Move the line randomly in x direction
          y: gsap.utils.random(300, 500), // Move the line randomly in y direction
          opacity: 1,
          duration: gsap.utils.random(2, 4),
          ease: 'power3.out',
          repeat: -1, // Repeat infinitely
          yoyo: true, // Reverse the animation on repeat
          delay: gsap.utils.random(0, 2), // Random delay before starting the animation
        })
      }
    }

    // Create particle meteors
    particlesRef.current.forEach((particle, index) => {
      const color = COLORS[index % COLORS.length]
      const size = gsap.utils.random(6, 15)

      // Set initial styles and random positions for each particle
      gsap.set(particle, {
        width: size,
        height: size * 0.3,
        backgroundColor: color,
        opacity: 0,
        borderRadius: '50%',
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        filter: `blur(${gsap.utils.random(4, 8)}px) brightness(1.5)`,
      })

      // Create the meteor animation effect
      const animateMeteor = () => {
        gsap.to(particle, {
          motionPath: {
            path: [
              { x: particle.offsetLeft, y: particle.offsetTop },
              {
                x: particle.offsetLeft + gsap.utils.random(400, 800),
                y: particle.offsetTop + gsap.utils.random(200, 600),
              },
            ],
            curviness: 1.4,
            autoRotate: true,
          },
          opacity: 1,
          scaleX: gsap.utils.random(2, 4),
          scaleY: 0.6,
          duration: gsap.utils.random(1.5, 2.5),
          ease: 'power3.out',
          onComplete: () => {
            // Fade out the particle after animation and restart
            gsap.to(particle, {
              opacity: 0,
              duration: 0.5,
              onComplete: animateMeteor,
              delay: gsap.utils.random(0.5, 2), // Delay before restarting
            })
          },
        })
      }

      animateMeteor() // Start the initial animation
    })

    createNeonLines() // Create the neon lines

  }, [])

  return (
    <div className="cyberpunk-meteor-container">
      {[...Array(NUM_PARTICLES)].map((_, index) => (
        <div
          key={index}
          className="particle"
          ref={(el) => (particlesRef.current[index] = el)}
        ></div>
      ))}

      <style jsx>{`
        .cyberpunk-meteor-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1; /* Ensure it's behind the content */
          background: radial-gradient(circle, #0a0a0a, #000000); /* Dark background */
        }
        .particle {
          position: absolute;
          pointer-events: none;
          transform-origin: center;
          filter: brightness(1.5) blur(8px); /* Glow effect */
        }
        .neon-line {
          position: absolute;
          pointer-events: none;
          filter: blur(4px);
          opacity: 0;
          background-color: #00ffff; /* Default neon color */
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}

export default CyberpunkMeteorParticles
