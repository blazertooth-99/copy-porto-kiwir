"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !headingsRef.current[0]) return;

    gsap.fromTo(
      headingsRef.current[0],
      { scale: 100 }, // Start large
      {
        scale: 1, // End at normal size
        duration: 3,
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          end: "bottom top",
          scrub: 3,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const word = "What's u lookin for ?";

  return (
    <div className="h-[200vh] flex bg-gradient-to-b from-purple-600 to-blue-600 justify-center items-center">
      <section
        ref={sectionRef}
        id="zoom-out"
        className="w-full h-full p-0 m-0"
      >
        <div className="h-full py-52 flex items-start justify-center overflow-hidden">
          <h2
            ref={(el) => (headingsRef.current[0] = el)}
            className="text-white text-4xl md:text-6xl lg:text-8xl font-bold opacity-80 text-center"
          >
            {word}
          </h2>
        </div>
      </section>
    </div>
  );
}
