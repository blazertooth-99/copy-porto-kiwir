"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  const bioRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(bioRef.current, {
        yPercent: "50",
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: bioRef.current,
            start: 'top 80%',
          },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section ref={bioRef} className="h-screen mb-16 p-10 items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Bio</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            Hello! I'm a passionate web developer with a keen eye for design. I
            love creating beautiful, functional, and user-friendly websites.
            With a background in both front-end and back-end technologies, I
            strive to build comprehensive web solutions that not only look great
            but also perform exceptionally.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
export default About;
