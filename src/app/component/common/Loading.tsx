"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Loading() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preloaderRef.current || !contentRef.current || !progressBarRef.current || !percentageRef.current || !circleRef.current) {
      console.error("One or more refs are null");
      return;
    }

    const loadingText = new SplitType(".loading-text-initial", {
      types: "chars",
    });
    const completeText = new SplitType(".loading-text-complete", {
      types: "chars",
    });
    const titleText = new SplitType(".content h1", { types: "chars" });
    const paragraphText = new SplitType(".content p", { types: "chars" });

    gsap.set(".loading-text-complete", { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    gsap.to(loadingText.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });

    const colorStages = [
      { start: { bg: "#1e3a8a", text: "#2dd4bf", accent: "#0d9488" }, end: { bg: "#0f172a", text: "#5eead4", accent: "#14b8a6" } },
      { start: { bg: "#0f172a", text: "#5eead4", accent: "#14b8a6" }, end: { bg: "#0c4a6e", text: "#99f6e4", accent: "#0d9488" } },
      { start: { bg: "#0c4a6e", text: "#99f6e4", accent: "#0d9488" }, end: { bg: "#134e4a", text: "#2dd4bf", accent: "#0f766e" } },
      { start: { bg: "#134e4a", text: "#2dd4bf", accent: "#0f766e" }, end: { bg: "#1e3a8a", text: "#2dd4bf", accent: "#0d9488" } },
    ];

    function updateColors(progress: number) {
      const stageIndex = Math.min(Math.floor(progress / 25), colorStages.length - 1);
      const stage = colorStages[stageIndex];
      const stageProgress = (progress % 25) / 25;

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
      gsap.to(circleRef.current, {
        borderColor: stage.end.accent,
        duration: 0.5,
        ease: "power2.inOut",
      });

      document.querySelectorAll(
        ".loading-text-initial .char, .loading-text-complete .char, .percentage"
      ).forEach((el) => {
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
        gsap.to(circleRef.current, {
          rotation: progress * 3.6,
          duration: 0.1,
          ease: "none",
        });
      },
    })
      .to(".loading-text-initial", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".loading-text-complete",
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
      .set(
        contentRef.current,
        {
          visibility: "visible",
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
          ease: "power4.out",
        },
        "-=0.5"
      )
      .set(preloaderRef.current, {
        display: "none",
      });
  }, []);

  return (
    <>
      <div
        ref={preloaderRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#1e3a8a] flex justify-center items-center flex-col z-[1000]"
      >
        <div className="w-[300px] h-[2px] bg-[#2dd4bf]/10 mb-5 relative z-2">
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 h-full w-0 bg-[#2dd4bf]"
          ></div>
        </div>
        <div className="h-[3em] relative overflow-hidden my-5 w-[200px]">
          <div className="loading-text-initial absolute w-full text-center font-['Inter'] font-light text-[#2dd4bf] text-base uppercase tracking-[-0.02em]">
            Initializing
          </div>
          <div className="loading-text-complete absolute w-full text-center font-['Inter'] font-light text-[#2dd4bf] text-base uppercase tracking-[-0.02em] translate-y-full">
            System Ready
          </div>
        </div>
        <div
          ref={circleRef}
          className="w-[300px] h-[300px] border-4 border-[#0d9488] rounded-full absolute opacity-20"
        ></div>
        <div
          ref={percentageRef}
          className="fixed bottom-8 right-8 font-['Inter'] font-bold text-[25rem] leading-[0.8] text-[#2dd4bf] opacity-10"
        >
          0
        </div>
      </div>

      <div
        ref={contentRef}
        className="fixed top-0 left-0 w-full h-screen p-8 flex flex-col justify-center items-center text-[#2dd4bf] bg-[#1e3a8a] invisible z-1"
      >
        <h1 className="text-5xl mb-4 overflow-hidden">
          Welcome to the Future
        </h1>
        <p className="text-xl overflow-hidden">
          Explore the possibilities of tomorrow, today.
        </p>
      </div>
    </>
  );
}

