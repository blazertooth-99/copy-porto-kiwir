"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Img1 from "../assets/sample.webp";
import Img2 from "../assets/paVincent.jpg";
import TextWelcome from "../component/common/TextWelcome";
import Link from "next/link";

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
 
  return (
    <div className="flex min-h-screen place-items-center justify-center py-16 px-5 bg-custom-blue dark:bg-slate-800">
      <div
        ref={cardRef}
        className="bg-custom-slate dark:bg-gray-700 border border-cyan-600 dark:border dark:border-teal-400 h-full rounded-[25px] md:w-[95%] shadow-[0px_14px_80px_rgba(34,35,58,0.5)] w-full flex flex-col md:flex-row relative drop-shadow-xl"
      >
        <div className="w-full md:w-1/3 border-b-2 sm:border-b-2 md:border-y-0 md:border-r-2 border-cyan-600 dark:border-teal-400">
          {/* <div className="absolute w-full h-2/4 md:h-full md:w-1/3 inset-0 bg-slate-800/60" /> */}
          <div className="h-2/3 md:h-full w-full md:rounded-tl-[25px] md:rounded-bl-[25px]">
            <Image
              src={Img2}
              alt="Image Banner"
              className="object-cover w-full h-full rounded-tl-[25px] rounded-tr-[25px] sm:rounded-tl-[25px] sm:rounded-tr-[25px] md:rounded-tr-[0px] md:rounded-tl-[25px] md:rounded-bl-[25px]"
            />
          </div>
        </div>
        <div ref={contentRef} className="w-full md:w-2/3 py-2 px-10">
          <div className="flex flex-col items-center justify-center p-5 space-y-2 md:space-y-5">
            <div
              ref={avatarRef}
              className="flex items-center justify-center w-20 h-20 md:w-30 md:h-30 lg:w-32 lg:h-32 rounded-full border-2 border-cyan-600 dark:border-teal-400 bg-cyan-600 dark:bg-teal-400"
            >
              <Image
                src={Img1}
                alt="Image Profiles"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="flex justify-end top-0 right-0 flex-row space-x-2 md:space-x-5">
              <div>
                <button className="group w-10 h-10 hover:w-32 md:w-12 md:h-12 md:hover:w-44  hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <FaLinkedin
                    y="0"
                    x="0"
                    className="w-6 h-9 md:w-8 md:h-10 shrink-0 fill-neutral-50"
                  />
                  <span className="origin-left text-left text-xs md:text-base inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    Christian Satrio
                  </span>
                </button>
              </div>
              <div>
                <button className="group w-10 h-10 hover:w-32 md:w-12 md:h-12 md:hover:w-44  hover:bg-gray-800 relative bg-gray-900 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <FaGithubSquare
                    y="0"
                    x="0"
                    className="w-6 h-9 md:w-8 md:h-10 shrink-0 fill-neutral-50"
                  />
                  <span className="origin-left text-left text-xs md:text-base inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    blazertooth-99
                  </span>
                </button>
              </div>
              <div>
                <button className="group w-10 h-10 hover:w-40 md:w-12 md:h-12 md:hover:w-56  hover:bg-rose-700 relative bg-rose-800 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <IoIosMail
                    y="0"
                    x="0"
                    className="w-6 h-9 md:w-8 md:h-10 shrink-0 fill-neutral-50"
                  />
                  <span className="origin-left text-left text-xs md:text-base inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    christiansatrio30 @gmail.com
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-cyan-600 dark:border-teal-200 w-full"></div>
          <div className="px-2 md:px-5">
            <TextWelcome />
          </div>
          <p className="px-2 md:px-5 text-md md:text-xl mb-4 text-pretty">
            An enthusiastic person who likes to learnn new things, especially in
            the field of technology. Has approximately 3 years of working
            experience. Have worked with various roles such as System Engineer,
            Fullstack web developer, Freelancer, Design & Software quality
            assurance.
          </p>
          <div className="px-2 py-5 md:px-5 relative gap-2">
            <div className="flex flex-col md:flex-row my-2 gap-5">
              <div>
                <Button
                  variant="outline"
                  className="relative w-full px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 dark:text-gray-300 isolation-auto z-10 border-2 border-sky-800
                 dark:border-slate-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
                >
                  Resume
                </Button>
              </div>
              <div>
                <Link href="#CONTACT" prefetch={false}>
                  <Button
                    variant="outline"
                    className="relative w-full px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-teal-400 dark:hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
