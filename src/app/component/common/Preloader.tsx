'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default function Preloader() {
  const preloaderRef = useRef(null)
  const contentRef = useRef(null)
  const progressBarRef = useRef(null)
  const percentageRef = useRef(null)

  useEffect(() => {
    const loadingText = new SplitType(".loading-text-initial", { types: "chars" })
    const completeText = new SplitType(".loading-text-complete", { types: "chars" })
    const titleText = new SplitType(".content h1", { types: "chars" })
    const paragraphText = new SplitType(".content p", { types: "chars" })

    gsap.set(".loading-text-complete", { y: "100%" })
    gsap.set(loadingText.chars, { opacity: 0, y: 100 })
    gsap.set(completeText.chars, { opacity: 0, y: 100 })

    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    })

    const colorStages = [
      { bg: "rgb(60, 66, 55)", text: "rgb(230, 225, 215)" },
      { bg: "rgb(200, 180, 160)", text: "rgb(60, 66, 55)" },
      { bg: "rgb(230, 225, 215)", text: "rgb(60, 66, 55)" },
      { bg: "rgb(100, 110, 90)", text: "rgb(230, 225, 215)" }
    ]

    function updateColors(progress: number) {
      const stage = Math.floor(progress / 25)
      if (stage < colorStages.length) {
        preloaderRef.current.style.backgroundColor = colorStages[stage].bg
        progressBarRef.current.style.backgroundColor = colorStages[stage].text
        document.querySelectorAll(".loading-text-initial .char, .loading-text-complete .char, .percentage").forEach((el) => {
          (el as HTMLElement).style.color = colorStages[stage].text
        })
      }
    }

    const tl = gsap.timeline()

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100)
        percentageRef.current.textContent = progress
        updateColors(progress)
      }
    })
      .to(".loading-text-initial", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(
        ".loading-text-complete",
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut"
        },
        "<"
      )
      .to(
        completeText.chars,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.out"
        },
        "<0.2"
      )
      .to(preloaderRef.current, {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.8
      })
      .set(
        contentRef.current,
        {
          visibility: "visible"
        },
        "-=1"
      )
      .to(
        [titleText.chars, paragraphText.chars],
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out"
        },
        "-=0.5"
      )
      .set(preloaderRef.current, {
        display: "none"
      })
  }, [])

  return (
    <>
      <div ref={preloaderRef} className="fixed top-0 left-0 w-full h-screen bg-[rgb(60,66,55)] flex justify-center items-center flex-col z-[1000]">
        <div className="w-[300px] h-[2px] bg-white/10 mb-5 relative z-2">
          <div ref={progressBarRef} className="absolute left-0 top-0 h-full w-0 bg-[rgb(230,225,215)]"></div>
        </div>
        <div className="h-[3em] relative overflow-hidden my-5 w-[200px]">
          <div className="loading-text-initial absolute w-full text-center font-['Inter'] font-light text-[rgb(230,225,215)] text-base uppercase tracking-[-0.02em]">Loading</div>
          <div className="loading-text-complete absolute w-full text-center font-['Inter'] font-light text-[rgb(230,225,215)] text-base uppercase tracking-[-0.02em] translate-y-full">Complete</div>
        </div>
        <div ref={percentageRef} className="fixed bottom-8 right-8 font-['Inter'] font-bold text-[25rem] leading-[0.8] text-[rgb(230,225,215)] opacity-10">0</div>
      </div>

      <div ref={contentRef} className="fixed top-0 left-0 w-full h-screen p-8 flex flex-col justify-center items-center text-[rgb(230,225,215)] bg-[rgb(60,66,55)] invisible z-1">
        <h1 className="text-5xl mb-4 overflow-hidden">Welcome to the Website</h1>
        <p className="text-xl overflow-hidden">This content appears after the preloader finishes.</p>
      </div>
    </>
  )
}