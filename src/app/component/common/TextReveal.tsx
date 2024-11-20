"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Img1 from "../../assets/slides/content.jpg";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const content = useRef(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const divTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure that the content element is available
    if (!content.current) {
      console.error("Content element not found!");
      return;
    }
    let splitInstance: SplitType | null = null;
    let tl: gsap.core.Timeline | null = null;

    // Initialize SplitType on the content element
    new SplitType(content.current, {
      types: "lines",
      tagName: "span",
    });

    // GSAP animation targeting the split words
    gsap.from(".content span", {
      opacity: 0.3,
      duration: 0.2,
      ease: "power1.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: content.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    const createSplit = () => {
      if (splitInstance) splitInstance.revert();
      if (tl) tl.kill();

      splitInstance = new SplitType(textRef.current!, {
        types: "chars",
        tagName: "span",
      });

      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: divTriggerRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
        })
        .set(
          splitInstance.chars,
          {
            color: "#e51d1d",
            stagger: 2,
          },
          0.1
        );
    };

    createSplit();

    // Cleanup GSAP and ScrollTrigger on unmount to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-[600px]">
    <div className="flex h-full bg-custom-blue w-full items-center justify-center p-24">
      <div ref={divTriggerRef} className="flex flex-col md:flex-row">
        <h1
          ref={content}
          className="content text-4xl md:text-5xl font-semibold text-gray-100 text-center mr-4"
        >
          Interested in
        </h1>
        <span
          ref={textRef}
          className="text-4xl md:text-5xl text-white font-bold">
          Collaboration{" "}?
        </span>
      </div>
    </div>
  </div>
  );
};

export default TextReveal;
