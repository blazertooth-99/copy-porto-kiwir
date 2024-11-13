"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = [
  "awesome.",
  "beautiful.",
  "creative.",
  "fabulous.",
  "interesting.",
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
        span.className = "letter inline-block";
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
    <section className="relative w-full mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col w-full mx-auto items-center justify-center">
          <div className="mt-10">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold">
              Welcome to my blog :)
            </span>
            <div
              ref={containerRef}
              className="relative overflow-hidden h-[1.2em] inline-block w-full text-xl font-bold"
            >
              <p>
                <span>I'm Genjong,</span>
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="word absolute whitespace-nowrap w-full overflow-hidden"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default RotatingText;
