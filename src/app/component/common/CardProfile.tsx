"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ImgSample from "../../assets/news1.jpg";
import ImgSample2 from "../../assets/sample.webp";

const CardProfile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP hover animation for spans
    const spans = containerRef.current?.querySelectorAll(".animated-bgr span");

    const handleMouseEnter = () => {
      gsap.to(spans, {
        scale: 1.1,
        opacity: 1,
        y: -10,
        stagger: {
          amount: 1,
          from: "bottom center",
        },
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(spans, {
        scale: 1,
        opacity: 0.5,
        y: 0,
        stagger: {
          amount: 1,
          from: "bottom center",
        },
        ease: "power1.inOut",
      });
    };

    cardRef.current?.addEventListener("mouseenter", handleMouseEnter);
    cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      cardRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      cardRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    // VanillaTilt initialization
    import("vanilla-tilt").then((VanillaTilt) => {
      if (cardRef.current) {
        VanillaTilt.default.init(cardRef.current, {
          max: 50,
          speed: 400,
          glare: true,
          "max-glare": 1,
        });
      }
    });
  }, []);

  return (
    <div className="relative flex justify-center inset-0 mt-auto items-center overflow-hidden">
      <div
        className="relative flex justify-center items-center w-full max-w-[1200px] flex-wrap z-10"
        ref={containerRef}
      >
        <div
          ref={cardRef}
          className="card relative w-[280px] h-[350px] m-[30px] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] rounded-[15px] bg-[rgba(255,255,255,0.1)] overflow-hidden flex justify-center items-center border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-[5px] group"
        >
          <div className="animated-bgr absolute inset-0 z-10 flex flex-wrap bg-transparent">
            {[...Array(25)].map((_, i) => (
              <span
                key={i}
                className="w-1/5 h-1/5 bg-[rgba(255,255,255,0.1)]"
              ></span>
            ))}
          </div>
          <div className="content z-30 p-5 text-center w-full h-full items-center justify-center">
            <Image
              src={ImgSample}
              alt="Profile"
              layout="contain"
              objectFit="cover"
              className="rounded-xl"
            />
            <h3 className="text-[1.8em] text-white">Tomy Genjong</h3>
            <p className="text-base text-white mb-10 font-light">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
