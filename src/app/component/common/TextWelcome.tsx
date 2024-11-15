"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HandWave from "./HandWave";
import TypingAnimation from "./TypingAnimation";

// const words = [
//   "Design a website.",
//   "Fontend.",
//   "bandar" +" "+ "togel",
//   "Peternak handal.",
//   "Jawir.",
// ];
const TextWelcome = () => {
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const wordElements = containerRef.current.querySelectorAll(".word");

  //   wordElements.forEach((word) => {
  //     const letters = word.textContent?.split("") || [];
  //     word.textContent = "";
  //     letters.forEach((letter) => {
  //       const span = document.createElement("span");
  //       span.textContent = letter;
  //       span.className = "letter inline-block";
  //       word.appendChild(span);
  //     });
  //   });

  //   const tl = gsap.timeline({
  //     repeat: -1,
  //     defaults: { stagger: 0.05 },
  //     paused: true,
  //   });

  //   wordElements.forEach((word, i) => {
  //     if (i) {
  //       tl.from(
  //         word.childNodes,
  //         {
  //           y: -100,
  //           ease: "expo.out",
  //         },
  //         "+=1"
  //       );
  //       tl.to(
  //         wordElements[i - 1].childNodes,
  //         {
  //           y: 100,
  //           ease: "expo.in",
  //         },
  //         "<-=0.3"
  //       );
  //     }
  //   });

  //   tl.fromTo(
  //     wordElements[0].childNodes,
  //     {
  //       y: -100,
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       immediateRender: false,
  //     },
  //     "+=1"
  //   ).to(
  //     wordElements[wordElements.length - 1].childNodes,
  //     {
  //       y: 100,
  //       ease: "expo.in",
  //     },
  //     "<-=0.3"
  //   );

  //   gsap.from(wordElements[0].childNodes, {
  //     y: -100,
  //     ease: "expo.out",
  //     stagger: 0.05,
  //     onComplete: () => tl.play(),
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex flex-col w-full">
          <div className="mt-10">
            <span className="flex text-lg md:text-xl lg:text-2xl font-bold">
              Hi! there!{" "}
              <span>
                <HandWave />
              </span>
            </span>
            <div className="font-semibold text-md md:text-lg w-full justify-center">
              <span className="">
                I am Christian Satrio &nbsp;{" "}
              </span>
              <span>
                <TypingAnimation />
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default TextWelcome;
