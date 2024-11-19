"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import {
  FaReact,
  FaCss3Alt,
  FaFigma,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Img1 from "../assets/sample.webp";
import Img2 from "../assets/slides/content.jpg";
import TextWelcome from "../component/common/TextWelcome";

export default function CardProfileRev() {
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const avatar = avatarRef.current;
    const content = contentRef.current;

    gsap.set(card, { opacity: 0, y: 50 });
    gsap.set(avatar, { scale: 0 });
    gsap.set(content, { opacity: 0, x: 20 });

    const tl = gsap.timeline();

    tl.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to(avatar, { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
      .to(content, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  }, []);

  useEffect(() => {
    // VanillaTilt initialization
    import("vanilla-tilt").then((VanillaTilt) => {
      if (avatarRef.current) {
        VanillaTilt.default.init(avatarRef.current, {
          max: 50,
          speed: 400,
          glare: true,
          "max-glare": 1,
        });
      }
    });
  }, []);
  const MyStackIcon = [
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "Vite",
      icon: <SiVite />,
    },
    {
      title: "CSS 3",
      icon: <FaCss3Alt />,
    },
    {
      title: "Tailwind Css",
      icon: <SiTailwindcss />,
    },
    {
      title: "Next Js",
      icon: <SiNextdotjs />,
    },
    {
      title: "Javascript",
      icon: <SiJavascript />,
    },
    {
      title: "Figma",
      icon: <FaFigma />,
    },
  ];
  return (
    <div className="h-full min-h-screen justify-center item-center mt-15">
      <div
        ref={cardRef}
        className="bg-white rounded-[25px] shadow-[0px_14px_80px_rgba(34,35,58,0.5)] w-full flex flex-col md:flex-row relative drop-shadow-xl"
      >
        <div className="w-full md:w-1/3 border-b-4 sm:border-b-4 md:border-y-0 md:border-r-4 border-sky-900">
          <div className="sm:h-2/3 md:h-full w-full md:rounded-tl-[25px] md:rounded-bl-[25px]">
            <Image
              src={Img2}
              alt="Image Banner"
              className="object-cover w-full h-full rounded-tl-[25px] rounded-tr-[25px] sm:rounded-tl-[25px] sm:rounded-tr-[25px] md:rounded-tr-[0px] md:rounded-tl-[25px] md:rounded-bl-[25px]"
            />
          </div>
        </div>
        <div ref={contentRef} className="w-full md:w-2/3 py-5 px-10">
          <div
            ref={avatarRef}
            className="absolute w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 rounded-full border-6 border-white bg-gradient-to-br from-[#16a085] to-[#f4d03f] top-4 -left-10 md:-left-15 lg:-left-20  hover:scale-110"
          >
            <Image
              src={Img1}
              alt="Image Profiles"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex justify-end top-0 right-0 flex-row space-x-5">
            <div>
              <button className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                <FaLinkedin
                  y="0"
                  x="0"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                />
                <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                  Christian Satrio
                </span>
              </button>
            </div>
            <div>
              <button className="group w-12 hover:w-44 h-12 hover:bg-gray-700 relative bg-gray-900 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-semibold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-gray-900 before:hover:bg-gray-700 before:rotate-45">
                <FaGithubSquare
                  y="0"
                  x="0"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                />
                <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                  blazertooth-99
                </span>
              </button>
            </div>
          </div>
          <div className="px-8 md:px-10 lg:px-16">
            <TextWelcome />
          </div>

          <p className="px-8 md:px-10 lg:px-16 text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="relative gap-2 px-8 md:px-10 lg:px-16">
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
              Tech Stack :
            </span>
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-5 justify-start my-5 items-center w-fit">
              {MyStackIcon.map((item) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-2xl transition-all duration-500 hover:text-[#4CAF50] hover:scale-125">
                        <span className="text-2xl md:text-3xl lg:text-4xl">
                          {item.icon}
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <div className="flex flex-col md:flex-row my-2 gap-5">
              <div>
              <Button
                variant="outline"
                className="relative px-8 py-2 rounded-lg bg-white isolation-auto z-10 border-2 border-sky-800 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-sky-800 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  Resume
                </Button>
              </div>
              <div>
                <Button
                variant="outline"
                className="relative px-8 py-2 rounded-lg bg-white isolation-auto z-10 border-2 border-sky-800 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-sky-800 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
