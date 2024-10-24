"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  useEffect(() => {
    // Ensure GSAP initializes after the component has mounted
    const textElements = document.querySelectorAll(".text");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        y: "-70%",
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
        stagger: 0.5,

        scrollTrigger: {
          trigger: text,
          start: "top 80%", // Adjust start position
          end: "bottom 20%", // Adjust end position
          scrub: true, // Ensures smooth animation
          markers: false, // Set to true to visualize scroll positions
        },
      });
    });

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto py-20 min-h-screen flex flex-col justify-center items-start space-y-10">
      <h1 className="w-full text text-9xl tracking-tight leading-none text-gray-300 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent bg-[length:0%_100%] transition-all ease-[cubic-bezier(.1,.5,.5,1)] duration-500 border-b border-gray-700 relative">
        TEXT EFFECT
        <span className="absolute inset-0 flex items-center justify-start bg-blue-600 text-black clip-path-polygon-50">
          WOAH
        </span>
      </h1>
      <h1 className="w-full text text-9xl tracking-tight leading-none text-gray-300 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent bg-[length:0%_100%] transition-all ease-[cubic-bezier(.1,.5,.5,1)] duration-500 border-b border-gray-700 relative">
        GSAP
        <span className="absolute inset-0 flex items-center justify-start bg-blue-600 text-black clip-path-polygon-50">
          AND CLIPPING
        </span>
      </h1>
      <h1 className="w-full text text-9xl tracking-tight leading-none text-gray-300 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent bg-[length:0%_100%] transition-all ease-[cubic-bezier(.1,.5,.5,1)] duration-500 border-b border-gray-700 relative">
        CRAZYYY
        <span className="absolute inset-0 flex items-center justify-start bg-blue-600 text-black clip-path-polygon-50">
          CRAZYYY
        </span>
      </h1>
      <h1 className="w-full text text-9xl tracking-tight leading-none text-gray-300 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent bg-[length:0%_100%] transition-all ease-[cubic-bezier(.1,.5,.5,1)] duration-500 border-b border-gray-700 relative">
        HOVER ON ME
        <span className="absolute inset-0 flex items-center justify-start bg-blue-600 text-black clip-path-polygon-50">
          <Link
            href="https://stacksorted.com/text-effects/minh-pham"
            target="_blank"
          >
            SOURCE
          </Link>
        </span>
      </h1>
      <h1 className="w-full text text-9xl tracking-tight leading-none text-gray-300 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent bg-[length:0%_100%] transition-all ease-[cubic-bezier(.1,.5,.5,1)] duration-500 border-b border-gray-700 relative">
        LIKE THIS?
        <span className="absolute inset-0 flex items-center justify-start bg-blue-600 text-black clip-path-polygon-50">
          <Link href="https://twitter.com/juxtopposed" target="_blank">
            LET'S CONNECT
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default TextScroll;
