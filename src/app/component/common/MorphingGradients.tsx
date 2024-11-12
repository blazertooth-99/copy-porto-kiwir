'use client'

import { useEffect, useRef } from 'react'
import Profiles from './Profiles'

export default function OptimizedMorphingGradients() {
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interactiveBubble = interactiveRef.current
    if (!interactiveBubble) return

    let rafId: number
    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0

    const move = () => {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      interactiveBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      rafId = requestAnimationFrame(move)
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX
      tgY = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    move()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#6C00A2] to-[#001152]">
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ filter: 'url(#goo) blur(40px)' }}>
        <Gradient className="g1 animate-moveVertical" color="rgba(18, 113, 255, 0.8)" />
        <Gradient className="g2 animate-moveInCircle" color="rgba(221, 74, 255, 0.8)" style={{ transformOrigin: 'calc(50% - 400px) 50%' }} />
        <Gradient className="g3 animate-moveInCircleReverse" color="rgba(100, 220, 255, 0.8)" style={{ transformOrigin: 'calc(50% + 400px) 50%', top: '200px', left: '-500px' }} />
        <Gradient className="g4 animate-moveHorizontal" color="rgba(200, 50, 50, 0.7)" />
        <Gradient className="g5 animate-moveInCircle" color="rgba(180, 180, 50, 0.8)" style={{ transformOrigin: 'calc(50% - 800px) calc(50% + 200px)', width: '160%', height: '160%' }} />
        <div
          ref={interactiveRef}
          className="interactive absolute w-full h-full top-[-50%] left-[-50%] opacity-70"
          style={{
            background: 'radial-gradient(circle at center, rgba(140, 100, 255, 0.8) 0, rgba(140, 100, 255, 0) 50%)',
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center font-dongle" style={{ textShadow: '1px 1px rgba(0,0,0,0.1)' }}>
        <Profiles />
      </div>
    </div>
  )
}

interface GradientProps {
  className: string
  color: string
  style?: React.CSSProperties
}

function Gradient({ className, color, style }: GradientProps) {
  return (
    <div
      className={`absolute w-4/5 h-4/5 top-[10%] left-[10%] ${className}`}
      style={{
        background: `radial-gradient(circle at center, ${color} 0, ${color.replace('0.8', '0')} 50%)`,
        mixBlendMode: 'hard-light',
        ...style,
      }}
    />
  )
}