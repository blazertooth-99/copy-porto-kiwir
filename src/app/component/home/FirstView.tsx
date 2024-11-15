'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AnimatedScrollSection() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const pinWrapRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const layers = gsap.utils.toArray('.layer')
    const amount = layers.length

    gsap.set(layers, { zIndex: (i) => amount - i })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
        invalidateOnRefresh: true,  // Adjust on refresh
        markers: true,  // Optional: shows markers during development
      },
    })

    tl.to(layers.slice().reverse(), {  // Reverse only during animation
      clipPath: 'circle(71% at 50% 50%)',
      duration: 0.5,
      ease: 'power1.inOut',
      stagger: 0.25,
    }).to(pinWrapRef.current, {
      x: () => -(pinWrapRef.current.scrollWidth - window.innerWidth),
      duration: 4,
      ease: 'none',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="h-screen w-full grid place-items-center relative">
      <h2 className="text-[101.02px] leading-[121.23px] capitalize font-light text-red-500 max-w-[980px] z-10">
        How we transform digital to Realworld
      </h2>
      <div ref={wrapperRef} className="absolute inset-0 w-full h-screen">
        <div className="layer absolute top-0 left-0 right-0 w-full h-full bg-white" style={{ clipPath: 'circle(0% at 50% 50%)' }}></div>
        <div className="layer absolute top-0 left-0 right-0 w-full h-full bg-[rgb(178,218,255)]" style={{ clipPath: 'circle(0% at 50% 50%)' }}>
          <section className="horizontal-scroll h-screen overflow-hidden flex left-0">
            <div ref={pinWrapRef} className="pin-wrap h-screen flex justify-start items-center py-[50px] px-[10vw]">
              {[
                'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900',
                'https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900',
                'https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900',
                'https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900',
                'https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  className="h-[80vh] w-auto object-cover"
                  loading="lazy"  // Add lazy loading
                />
              ))}
            </div>
          </section>
        </div>
        <div className="layer absolute top-0 left-0 right-0 w-full h-full bg-white" style={{ clipPath: 'circle(0% at 50% 50%)' }}></div>
        <div className="layer absolute top-0 left-0 right-0 w-full h-full bg-[rgb(178,218,255)]" style={{ clipPath: 'circle(0% at 50% 50%)' }}></div>
      </div>
    </section>
  )
}
