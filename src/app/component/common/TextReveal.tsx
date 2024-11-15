"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Img1 from "../../assets/slides/content.jpg"

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const content = useRef(null);

  useEffect(() => {
    // Ensure that the content element is available
    if (!content.current) {
      console.error("Content element not found!");
      return;
    }

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
        start: "top 70%",
        end: "top 20%",
        scrub: 0.5,

      },
    });

    // Cleanup GSAP and ScrollTrigger on unmount to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div
        className="w-full bg-lime-800 justify-center items-center"
      >
        <div>
          <h1 ref={content} className="content text-6xl font-semibold text-gray-100 p-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TextReveal;
