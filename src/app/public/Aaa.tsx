'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'

gsap.registerPlugin(Flip)

export default function Component() {
  const [activeBoxIndex, setActiveBoxIndex] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const modalOverlayRef = useRef<HTMLDivElement>(null)
  const boxesRef = useRef<HTMLDivElement[]>([])
  const boxesContentRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeBoxIndex !== null) {
        setActiveBoxIndex(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [activeBoxIndex])

  const handleBoxClick = (index: number) => {
    const box = boxesContentRef.current[index]
    if (activeBoxIndex !== null) {
      // Close modal
      const state = Flip.getState(box, { props: "backgroundColor" })
      boxesRef.current[activeBoxIndex].appendChild(box)
      setActiveBoxIndex(null)

      gsap.to([modalRef.current, modalOverlayRef.current], {
        autoAlpha: 0,
        ease: "power1.inOut",
        duration: 0.35,
      })

      Flip.from(state, {
        duration: 0.7,
        ease: "power1.inOut",
        absolute: true,
        onComplete: () => gsap.set(box, { zIndex: "auto" }),
      })

      gsap.set(box, { zIndex: 1002 })
    } else {
      // Open modal
      const state = Flip.getState(box, { props: "backgroundColor" })
      modalContentRef.current?.appendChild(box)
      setActiveBoxIndex(index)

      gsap.set(modalRef.current, { autoAlpha: 1 })

      Flip.from(state, {
        duration: 0.7,
        ease: "power1.inOut",
      })

      gsap.to(modalOverlayRef.current, { autoAlpha: 0.65, duration: 0.35 })
    }
  }

  return (
    <div className="font-['Signika_Negative',sans-serif] text-white">
      <div className="wrapper bg-[#000970] flex h-screen w-full items-center justify-center">
        <div className="boxes-container m-auto flex max-w-[1200px] flex-wrap">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((boxNumber, index) => (
            <div
              key={boxNumber}
              ref={(el) => (boxesRef.current[index] = el as HTMLDivElement)}
              className="box flex h-[200px] w-1/3 items-center justify-center border border-red-500 p-[10px_0] relative"
            >
              <div
                ref={(el) => (boxesContentRef.current[index] = el as HTMLDivElement)}
                role="button"
                tabIndex={0}
                onClick={() => handleBoxClick(index)}
                onKeyDown={(e) => e.key === "Enter" && handleBoxClick(index)}
                className="box-content flex h-full w-1/2 cursor-pointer items-center justify-center rounded-[10px] bg-[#008080] text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008080]"
              >
                Box {boxNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={modalRef}
        className="modal fixed inset-0 z-[1000] flex items-center justify-center bg-transparent opacity-0 invisible"
      >
        <div
          ref={modalOverlayRef}
          onClick={() => setActiveBoxIndex(null)}
          className="overlay absolute inset-0 h-full w-full bg-black opacity-0 cursor-pointer"
        ></div>
        <div
          ref={modalContentRef}
          className="content relative h-4/5 w-4/5 max-h-[400px] max-w-[800px]"
        >
          <div className="box-content bg-[tomato] w-full h-full rounded-[10px] flex items-center justify-center text-2xl">
            {/* Content will be moved here when a box is clicked */}
            <h1>ello</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
