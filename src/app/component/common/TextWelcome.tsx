"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HandWave from "./HandWave";
import TypingAnimation from "./TypingAnimation";

const TextWelcome = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="flex flex-col w-full">
          <div className="mt-10 space-y-1">
            <span className="flex text-xl md:text-4xl lg:text-6xl font-bold ">
              <span className="text-cyan-600 dark:text-teal-400 animate-pulse">Hi!&nbsp;</span> there!{" "}
              <span>
                <HandWave />
              </span>
            </span>
            <div className="font-semibold text-lg md:text-2xl lg:text-3xl w-full justify-center">
              <span>
                I&apos;m Christian Satrio &nbsp;{" "}
              </span>
              <span>
                <TypingAnimation />
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default TextWelcome;
