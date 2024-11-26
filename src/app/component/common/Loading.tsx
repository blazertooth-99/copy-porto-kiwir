"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Loading() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  const loadingTextRef = useRef<HTMLDivElement>(null);
  const completeTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if all refs are available
    if (!preloaderRef.current || !contentRef.current || !progressBarRef.current || 
        !percentageRef.current || !loadingTextRef.current || 
        !completeTextRef.current) {
      return;
    }

    // Initialize SplitType after ensuring elements exist
    const loadingText = new SplitType(loadingTextRef.current, {
      types: "chars",
    });
    const completeText = new SplitType(completeTextRef.current, {
      types: "chars",
    });

    // Initial states
    gsap.set(completeTextRef.current, { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    // Animate loading text
    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });
    //Color Initial when loading
    const colorStages = [
      { start: { bg: "#363c4d", text: "#2dd4bf", accent: "#0d9488" }, end: { bg: "#313338", text: "#5eead4", accent: "#14b8a6" } },
      { start: { bg: "#0f172a", text: "#5eead4", accent: "#14b8a6" }, end: { bg: "#182830", text: "#99f6e4", accent: "#0d9488" } },
      { start: { bg: "#0c4a6e", text: "#99f6e4", accent: "#0d9488" }, end: { bg: "#1a2928", text: "#2dd4bf", accent: "#0f766e" } },
      { start: { bg: "#134e4a", text: "#2dd4bf", accent: "#0f766e" }, end: { bg: "#22242b", text: "#2dd4bf", accent: "#0d9488" } },
    ];

    function updateColors(progress: number) {
      const stageIndex = Math.min(Math.floor(progress / 25), colorStages.length - 1);
      const stage = colorStages[stageIndex];

      gsap.to(preloaderRef.current, {
        backgroundColor: stage.end.bg,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(progressBarRef.current, {
        backgroundColor: stage.end.text,
        duration: 0.5,
        ease: "power2.inOut",
      });
     

      // Update text colors
      const textElements = [
        ...loadingText.chars || [],
        ...completeText.chars || [],
        percentageRef.current
      ].filter(Boolean);

      textElements.forEach((el) => {
        gsap.to(el, {
          color: stage.end.text,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    }

    const tl = gsap.timeline();

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        if (percentageRef.current) {
          percentageRef.current.textContent = progress.toString();
        }
        updateColors(progress);
       
      },
    })
      .to(loadingTextRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        completeTextRef.current,
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
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
          ease: "power2.out",
        },
        "<0.2"
      )
      .to(preloaderRef.current, {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.8,
      })
      
      .set(preloaderRef.current, {
        display: "none",
      });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={preloaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex justify-center items-center flex-col z-[1000]"
      >
        <div className="w-[300px] h-[2px] bg-[#2dd4bf]/10 mb-5 relative z-2">
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 h-full w-0 bg-teal-400"
          ></div>
        </div>
        <div className="h-[3em] relative overflow-hidden my-5 w-[200px]">
          <div
            ref={loadingTextRef}
            className="absolute w-full text-center font-light text-teal-400 text-base uppercase tracking-[-0.02em]"
          >
            Loading
          </div>
          <div
            ref={completeTextRef}
            className="absolute w-full text-center font-light text-teal-400 text-base uppercase tracking-[-0.02em] translate-y-full"
          >
            COMPLETE
          </div>
        </div>
        <div
          ref={percentageRef}
          className="fixed bottom-8 right-8 font-bold text-[18rem] md:text-[20rem] lg:text-[25rem] leading-[0.8] text-[#2dd4bf] opacity-10"
        >
          0
        </div>
      </div>

      <div
        ref={contentRef}
        className="fixed top-0 left-0 w-full h-screen p-8 flex flex-col justify-center items-center text-[#2dd4bf] bg-gray-700 invisible z-1"
      >
      </div>
    </>
  );
}

