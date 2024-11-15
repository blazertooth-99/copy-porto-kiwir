'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
export default function WavingHand() {
  const handRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then((gsapModule) => {
        import('gsap/CustomEase').then((CustomEaseModule) => {
          const gsap = gsapModule.default
          const CustomEase = CustomEaseModule.default
          gsap.registerPlugin(CustomEase)
          setupIntersectionObserver(gsap, CustomEase)
        })
      })
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [])

  useEffect(() => {
    if (isInViewport) {
      animateHand()
    } else if (animationRef.current) {
      animationRef.current.kill()
    }
  }, [isInViewport])

  const setupIntersectionObserver = (gsap: any, CustomEase: any) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInViewport(entry.isIntersecting)
      })
    }, options)

    if (handRef.current) {
      observer.observe(handRef.current)
    }

    return () => {
      if (handRef.current) {
        observer.unobserve(handRef.current)
      }
    }
  }

  const animateHand = () => {
    if (handRef.current && window.gsap) {
      // Stop the previous animation if it's running
      if (animationRef.current) {
        animationRef.current.kill()
      }

      // Custom ease for more natural waving motion
      const customEase = window.gsap.parseEase("M0,0 C0.14,0 0.27,0.02 0.389,0.075 0.56,0.15 0.68,0.346 0.748,0.5 0.818,0.657 0.86,0.818 0.93,0.94 0.967,1 1,1 1,1")

      // Create the waving animation
      animationRef.current = window.gsap.to(handRef.current, {
        rotation: 20,
        duration: 0.5,
        repeat: -1, // Infinite repeat
        yoyo: true,
        ease: customEase,
        transformOrigin: "bottom right"
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js" strategy="beforeInteractive" />

      <div ref={handRef} className="text-3xl top-0">👋</div>
    </div>
  )
}
