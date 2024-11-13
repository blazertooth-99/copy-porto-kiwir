"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = [
  "Developer.",
  "Web Developer.",
  "Bandar togel.",
  "Peternak handal.",
  "Jawir.",
];

const RotatingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll(".word");

    wordElements.forEach((word) => {
      const letters = word.textContent?.split("") || [];
      word.textContent = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter inline-flex";
        word.appendChild(span);
      });
    });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { stagger: 0.05 },
      paused: true,
    });

    wordElements.forEach((word, i) => {
      if (i) {
        tl.from(
          word.childNodes,
          {
            y: -100,
            ease: "expo.out",
          },
          "+=1"
        );
        tl.to(
          wordElements[i - 1].childNodes,
          {
            y: 100,
            ease: "expo.in",
          },
          "<-=0.3"
        );
      }
    });

    tl.fromTo(
      wordElements[0].childNodes,
      {
        y: -100,
      },
      {
        y: 0,
        ease: "expo.out",
        immediateRender: false,
      },
      "+=1"
    ).to(
      wordElements[wordElements.length - 1].childNodes,
      {
        y: 100,
        ease: "expo.in",
      },
      "<-=0.3"
    );

    gsap.from(wordElements[0].childNodes, {
      y: -100,
      ease: "expo.out",
      stagger: 0.05,
      onComplete: () => tl.play(),
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full mt-10">
      <div className="container">
        <div className="flex flex-col w-full items-center justify-center mx-auto place-items-center">
          <div className="mt-10">
            <span className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
              Welcome to my blog :)
            </span>
            <div
              ref={containerRef}
              className="font-semibold text-3xl w-full"
            >
              <span className="text-white"> Hello, I'm Christian, im a&nbsp; </span>
                {words.map((word, index) => (
                  <span key={index} className="word mx-auto absolute inline-flex overflow-hidden text-red-600">
                    {word}
                  </span>
                ))}
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default RotatingText;
