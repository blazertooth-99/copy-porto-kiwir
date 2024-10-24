"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./splitText";
import AnimLoading from "../component/common/PlanetLoading";
import TypingAnimation from "../component/common/TypingAnimation";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none text-white",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};
const Welcome = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col px-5 tracking-tight"
      >
        <h1 className="text-8xl md:text-9xl" id="title-2">
          Hi!
        </h1>
        <h1 className="text-8xl md:text-9xl" id="title-3">
          Hello there :)
        </h1>
        <AnimLoading />
      </div>
      <div className="h-screen flex flex-col bg-gray-950 items-start justify-center">
        <div className={HERO_STYLES.CONTENT}>
          <div className="md:mb-4 mb-2 flex flex-col">
            <h2 className="text-4xl seq">Hello 👋🏻</h2>
            <h1 className="text-3xl seq">I am Tomy Kiwir</h1>
          </div>
        </div>
        <div className="mb-4">
          <span>
            <TypingAnimation />
          </span>
        </div>
        <div>
          <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
            <span className="text-lg">My Resume</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
      <div
        id="split-content"
        className="h-screen flex bg-gray-950 justify-center items-center"
      >
        <SplitText />
      </div>
    </div>
  );
};
export default Welcome;
