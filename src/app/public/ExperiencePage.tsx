"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import FloatingParticles from "../component/home/FloatingParticles";

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const pathRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadGSAP = async () => {
      try {
        // Import and register GSAP plugins
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { MotionPathPlugin } = await import("gsap/MotionPathPlugin");
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        const container = containerRef.current;
        const orb = orbRef.current;
        const path = pathRef.current;

        if (!container || !orb || !path) return;

        // Set initial position of the orb
        gsap.set(orb, { xPercent: -50, yPercent: -50 });

        // Orb motion path animation
        gsap.to(orb, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
          },
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        // Animate each experience item
        gsap.utils.toArray(".experience-item").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 30%",
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
      // Cleanup GSAP animations
      if (typeof window !== "undefined") {
        const ScrollTrigger = require("gsap/ScrollTrigger").default;
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
      }
    };
  }, []);

  // Experience data
  const experiences = [
    { year: "2020", title: "Junior Developer", company: "Tech Startup Inc." },
    {
      year: "2021",
      title: "Mid-level Developer",
      company: "Innovative Solutions LLC",
    },
    { year: "2022", title: "Senior Developer", company: "Global Tech Giants" },
    { year: "2023", title: "Lead Developer", company: "Future Systems Co." },
  ];

  return (
    <div
      id="EXPERIENCE"
      ref={containerRef}
      className="min-h-screen w-full py-10 bg-gray-900/70"
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
            d="M1 0v800" // Vertical motion path for orb to follow
            fill="none"
            stroke="rgba(66, 220, 255, 0.3)"
            strokeWidth="2"
          />
        </svg>

        {/* Neon Orb */}
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
            <style jsx>{`
              svg {
                filter: drop-shadow(0px 0px 8px rgba(66, 220, 255, 0.8));
              }
            `}</style>
          </svg>
        )}

        {/* Experience Items */}
        <div className="space-y-52 relative z-10 w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex items-center justify-center"
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="w-full bg-red-500/60 rounded-full p-8 animate-spin">
                  <h3 className="text-2xl font-semibold text-neon-pink mb-2">
                    {exp.year}
                  </h3>
                  <h4 className="text-xl text-neon-blue mb-1">{exp.title}</h4>
                  <p className="text-neon-green">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
