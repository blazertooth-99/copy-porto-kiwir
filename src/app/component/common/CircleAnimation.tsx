'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin)

export default function CircleAnimation() {
  const circleRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current
    const path = pathRef.current

    gsap.set(circle, { xPercent: -50, yPercent: -50 })

    gsap.to(circle, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      duration: 5,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 300 300" width="100" height="100">
        <path
          ref={pathRef}
          d="M50,150a100,100,0,1,1,200,0a100,100,0,1,1,-200,0"
          fill="none"
          stroke="#D3D3D3"
          strokeWidth="4"
        />
        <circle ref={circleRef} r="10" fill="#3498db" />
      </svg>
    </div>
  )
}