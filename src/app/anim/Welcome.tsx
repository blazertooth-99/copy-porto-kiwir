"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./splitText";
import AnimLoading from "../component/common/PlanetLoading";
import TypingAnimation from "../component/common/TypingAnimation";
import ImgBanner from "../assets/Banner.jpeg";

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
        className="h-screen p-10 bg-gray-400 absolute top-0 left-0 z-10 w-full flex flex-col px-5 tracking-tight"
      >
        <h1 className="text-8xl md:text-9xl" id="title-2">
          Hi!
        </h1>
        <h1 className="text-8xl md:text-9xl" id="title-3">
          Hello there :)
        </h1>
        <AnimLoading />
      </div>
      <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={ImgBanner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="transition-all duration-300 ease-in-out filter"
      />
        <div className="h-screen flex flex-col items-start justify-center bg-blackOverlay">
          {/* <div className="w-full h-full backdrop-blur-lg">
        <Image
        src={ImgBanner}
        alt="Banner"
        layout="object-cover"
        className="z-0"
        />
        </div> */}
          <div className="font-medium flex flex-col pt-32 md:pt-0 select-none text-white px-5">
            <div className="relative md:mb-4 mb-2 flex flex-col">
              <h2 className="text-4xl seq">Hello 👋🏻</h2>
              <h1 className="text-3xl seq">I am Tomy Kiwir</h1>
            </div>
          </div>
          <div className="relative font-medium flex pt-32 md:pt-0 select-none text-white px-5">
            <span>
              <TypingAnimation />
            </span>
          </div>
          <div className="px-5 mt-5">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <span className="text-lg">My Resume</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </div>
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
