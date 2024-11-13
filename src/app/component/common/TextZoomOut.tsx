"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextZoomOut = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const texts = textRefs.current.filter(
      (text): text is HTMLDivElement => text !== null
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    texts.forEach((text, index) => {
      tl.fromTo(
        text,
        {
          scale: index === 0 ? 1 : 0,
          opacity: index === 0 ? 1 : 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        index
      ).to(
        text,
        {
          scale: 0,
          opacity: 0,
          duration: 1,
        },
        index + 1
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  const textContent = ["About", "Education"];
  return (
    <div ref={containerRef}>
      <div>
        {textContent.map((text, index) => (
          <div key={index} ref={(el) => (textRefs.current[index] = el)}>
            <h1 className="absolute text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#bc2789] to-[#f85956] bg-clip-text text-transparent inline-flex">
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TextZoomOut;
