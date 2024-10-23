"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Img1 from "../assets/slides/content.jpg"

gsap.registerPlugin(ScrollTrigger);

const SplitText = () => {
  const content = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Ensure that the content element is available
    if (!content.current) {
      console.error("Content element not found!");
      return;
    }

    // Initialize SplitType on the content element
    new SplitType(content.current, {
      types: "words",
      tagName: "span",
    });

    // GSAP animation targeting the split words
    gsap.from(".content span", {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: content.current,
        scrub: true,
        start: "top center",
        end: "bottom center",
        onEnter: () => console.log("ScrollTrigger animation started"), // Debugging
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
        className="h-screen grid grid-cols-2 flex bg-lime-800 justify-center items-center"
      >
        <div  id="third-title">
          <h1 ref={content} className="content text-5xl font-semibold text-gray-100 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </h1>
        </div>
        <div className="mx-auto justify-center items-center p-5">
          <Image
            src={Img1}
            alt="image content"
            layout="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitText;
