'use client';

import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import gsap from 'gsap';
import { parallaxContent } from "../constant";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  const scroller = useRef(null);

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),
        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className="flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900 relative h-screen"
        >
          {parallaxContent.map((content) => (
            <section
              key={content.id}
              className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
            >
              <Image
                src={content.image}
                alt={content.title}
                layout="fill"
                objectFit="contain"
                className="max-w-[70vw] max-h-[60vh] m-auto"
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parallax;
