"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const carouselItems = [
  {
    id: "our-work-1",
    step: 1,
    title: "About Singkat",
    text: [
      "Hello, I'm Christian Satrio, a passionate web developer with a keen love for creating beautiful, functional, and user-friendly websites. With a background in both front-end and back-end technologies.",
    ],
    headline: "About",
  },
  {
    id: "our-work-2",
    step: 2,
    title: "Education",
    text: ["It could be anyone who needs their business to become famous."],
    headline: "Education",
  },
];
export default function AboutCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const typeSplit = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!typeSplit.current) {
      console.error("Content element not found!");
      return;
    }

    const section = sectionRef.current;
    const slider = sliderRef.current;
    const navItems = gsap.utils.toArray(".nav_item", navRef.current);
    const slides = gsap.utils.toArray(".slide", slider);

    const tl = gsap.timeline();

    const myST = ScrollTrigger.create({
      animation: tl,
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / (slides.length - 1),
        duration: { min: 0.2, max: 0.5 },
        delay: 0.2,
      },
    });

    gsap.set(slides, { yPercent: 125, scale: 0.5, opacity: 0 });

    navItems.forEach((item: HTMLElement, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const percent =
          tl.labels[target.getAttribute("data-target") || ""] /
          tl.totalDuration();
        const scrollPos = myST.start + (myST.end - myST.start) * percent;
        gsap.to(window, { duration: 1, scrollTo: scrollPos });
      });

      const previousItem = navItems[i - 1] as HTMLElement;
      if (previousItem) {
        tl.to(
          item,
          { background: "#fda4af", boxShadow: "0 0 16px #f43f5e" },
          1 * (i - 1)
        )
          .to(
            slides[i],
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
            },
            "<"
          )
          .to(
            previousItem,
            { backgroundColor: "#424b58", boxShadow: "0 0 16px transparent" },
            "<"
          )
          .to(
            slides[i - 1],
            {
              opacity: 0,
              yPercent: -100,
              scale: 1,
            },
            "<"
          )
          .add(`our-work-${i + 1}`);
      } else {
        gsap.set(item, {
          background: "#fda4af",
          boxShadow: "0 0 16px #f43f5e",
        });
        tl.to(
          slides[i],
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0,
          },
          0
        );
        tl.add(`our-work-${i + 1}`, "+=1");
      }
    });

    new SplitType(".headline", {
      types: "words",
      tagName: "span",
    });

    gsap.from(".headline span", {
      yPercent: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        start: "top top",
        end: "bottom center",
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="ABOUT" className="relative min-h-screen h-[300vh] bg-custom-blue w-full p-4 sm:p-6 md:p-8 lg:p-12">
      <FloatingParticles />
      <div ref={sectionRef} className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full z-50 lg:w-1/3 mb-8 lg:mb-0 flex flex-col">
            <h1 ref={typeSplit} className="headline text-2xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-white">About</span> <span className="text-cyan-600 dark:text-teal-400 font-extrabold">Me</span>
            </h1>
          </div>
          <div className="w-full lg:w-2/3 slider relative items-center justify-center mt-52">
            <div
              ref={sliderRef}
              className="carousel__slider relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
            >
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="slide absolute top-0 w-full h-full p-6 sm:p-8 md:p-12 text-white bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl"
                >
                  <div className="blurred-box__step text-lg sm:text-xl md:text-2xl">
                    {item.step}
                  </div>
                  <h2 className="blurred-box__title text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    {item.title}
                  </h2>
                  <div className="blurred-box__footer">
                    <span className="blurred-box__footer-line block w-16 h-0.5 bg-white mb-4"></span>
                    {item.text.map((text, index) => (
                      <p
                        key={index}
                        className="blurred-box__text mb-2 text-sm sm:text-base md:text-lg"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <ul
              ref={navRef}
              className="carousel__nav flex lg:flex-col gap-4 justify-center lg:justify-start mt-4 lg:mt-0 lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            >
              {carouselItems.map((item) => (
                <li
                  key={item.id}
                  className="nav_item w-3 h-3 bg-gray-100 border border-white border-opacity-20 rounded-full cursor-pointer"
                  data-target={item.id}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
