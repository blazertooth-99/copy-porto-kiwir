import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NUM_PARTICLES = 100; // Number of meteors in the shower
const COLORS = ['#FF00FF', '#00FFFF', '#39FF14', '#FF5500']; // Neon colors

const MeteorShowerBackground = () => {
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Create and animate meteors (particles)
    particlesRef.current.forEach((particle, index) => {
      const color = COLORS[index % COLORS.length];
      const size = gsap.utils.random(8, 15); // Random size for each meteor

      // Set initial styles and random positions for each particle
      gsap.set(particle, {
        width: size,
        height: size * 0.3,
        backgroundColor: color,
        opacity: gsap.utils.random(0.5, 1),
        borderRadius: '50%',
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        filter: `blur(${gsap.utils.random(3, 8)}px) brightness(2)`,
      });

      // Animate the meteor-like motion of particles
      const animateMeteor = () => {
        gsap.to(particle, {
          x: gsap.utils.random(0, window.innerWidth),
          y: window.innerHeight + 50, // Move out of view on the bottom
          opacity: 0,
          scaleX: gsap.utils.random(1.5, 3),
          scaleY: 0.5,
          duration: gsap.utils.random(2, 4),
          ease: 'power2.out',
          onComplete: () => {
            // Reset position to simulate endless meteor shower
            gsap.set(particle, {
              y: -50, // Start from the top again
              opacity: gsap.utils.random(0.5, 1),
            });
            animateMeteor(); // Restart animation
          },
        });
      };

      animateMeteor(); // Start the animation for the particle
    });
  }, []);

  return (
    <div className="meteor-shower-container">
      {[...Array(NUM_PARTICLES)].map((_, index) => (
        <div
          key={index}
          className="meteor-particle"
          ref={(el) => (particlesRef.current[index] = el)}
        ></div>
      ))}
      <style jsx>{`
        .meteor-shower-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1; /* Ensure it stays behind the content */
          background: radial-gradient(circle, #0a0a0a, #000000); /* Dark background */
        }

        .meteor-particle {
          position: absolute;
          pointer-events: none;
          transform-origin: center;
          filter: brightness(2) blur(6px); /* Glow effect */
        }
      `}</style>
    </div>
  );
};

export default MeteorShowerBackground;
