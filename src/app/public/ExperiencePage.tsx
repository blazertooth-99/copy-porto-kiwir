"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const pathRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsClient(true);

    const loadGSAP = async () => {
      try {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { MotionPathPlugin } = await import("gsap/MotionPathPlugin");
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const container = containerRef.current;
        const orb = orbRef.current;
        const path = pathRef.current;

        if (!container || !orb || !path) return;

        gsap.set(orb, { xPercent: -50, yPercent: -50 });

        gsap.to(orb, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
          },
          ease: "power1.inOut",
          stagger: 1,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        gsap.utils.toArray(".experience-item").forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 1,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 50%",
                scrub: true,
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      } catch (error) {
        console.error("Failed to load GSAP plugins:", error);
      }
    };

    loadGSAP();

    return () => {
      if (typeof window !== "undefined") {
        const ScrollTrigger = require("gsap/ScrollTrigger").default;
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
      }
    };
  }, []);

  const experiences = [
    {
      year: "May 2020- Jan 2021",
      title: "Junior Developer",
      Jobdesc : "Create something goods",
      Tag : ["PHP", "HTML", "Boostrap"],
      company: "Tech Startup Inc.",
    },
    {
      year: "Feb 2021 - Mar 2022",
      title: "Mid-level Developer",
      Jobdesc : "Create something goods",
      Tag : ["PHP", "HTML", "Boostrap"],
      company: "Innovative Solutions LLC",
    },
    {
      year: "2022",
      title: "Senior Developer",
      Jobdesc : "Create something goods",
      Tag : ["PHP", "HTML", "Boostrap"],
      company: "Global Tech Giants",
    },
    {
      year: "2023",
      title: "Lead Developer",
      Jobdesc : "Create something goods",
      Tag : ["PHP", "HTML", "Boostrap"],
      company: "Future Systems Co.",
    },
  ];

  return (
    <div
      id="EXPERIENCE"
      ref={containerRef}
      className="min-h-screen w-full py-10 bg-custom-blue"
    >
      <h1 className="text-4xl font-bold mb-12 text-center animate-pulse text-neon-blue">
        My Experience
      </h1>

      <div className="relative max-w-4xl mx-auto">
        <svg
          viewBox="0 0 2 800"
          className="absolute left-0 transform -translate-x-1/2 w-1 h-full ml-5"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M1 0v800"
            fill="none"
            stroke="rgba(66, 220, 255, 0.3)"
            strokeWidth="2"
          />
        </svg>

        {isClient && (
          <svg
            ref={orbRef}
            className="absolute left-0 top-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" fill="rgba(66, 220, 255, 1)" />
            <circle cx="12" cy="12" r="6" fill="rgba(66, 220, 255, 0.5)" />
            <circle cx="12" cy="12" r="3" fill="rgba(66, 220, 255, 0.2)" />
          </svg>
        )}

        <div className="space-y-36 md:space-y-52 relative z-10 p-10 w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item bg-custom-slate w-full flex items-center my-10 justify-center p-5  drop-shadow-[5px_5px_0_#000] transition-all transform duration-600 hover:translate-x-[-5px] hover:translate-y-[-5px] hover:drop-shadow-[12px_12px_0_#000]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ scale: 1 }}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-11/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <motion.div
                  className="w-full rounded-full p-8"
                >
                  <span className="block text-2xl font-extrabold uppercase text-black mb-4 relative overflow-hidden">
                    {exp.company}
                    <div
                      className={`border-t-2 border-black rounded-xl transition-all duration-500 ${
                        hoveredIndex === index ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </span>
                  <h4 className="text-xl font-bold mb-1 block uppercase text-black relative overflow-hidden">
                    {exp.year}
                  </h4>
                  <p className="text-lg font-semibold">{exp.title}</p>
                  <p className="text-md font-normal">{exp.Jobdesc}</p>
                  <div className="border-b border-gray-400 rounded-xl w-full mt-5"></div>
                  <div className={`flex space-x-1 mt-5 gap-2 ${index % 2 === 0 ? "justify-end pl-8" : "justify-start pr-8"}`}>
                        {exp.Tag.map((tags, index) => (
                          <span
                            key={index}
                            className="bg-sky-950 px-2 py-1 text-white text-xs rounded"
                          >
                            {tags}
                          </span>
                        ))}
                      </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
