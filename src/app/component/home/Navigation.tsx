"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logoCS from "../../assets/logoCS.png";
import logoCSDark from "../../assets/logoCSoutline.png";
import { motion } from "framer-motion";
import DarkMode from "./dark-mode-switcher";
import BurgerMenu from "./BurgerMenu";

const Navbar = (props: any) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header>
      <nav className="invisible md:visible fixed w-fit mx-auto rounded-full border border-cyan-600 dark:border dark:border-teal-400 inset-x-0 top-0 mt-2 z-50 bg-white/30 backdrop-blur-md shadow-lg dark:bg-neutral-800/30">
        <div className="container">
          <div className="flex mx-auto w-full justify-center gap-5 p-1 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                src={logoCS}
                alt="Logo Portofolio Lancea"
                height={0}
                width={0}
                sizes="100vh"
                style={{width:'55px', height: "auto" }}
                className="hidden dark:block"
              />

              <Image
                src={logoCSDark}
                alt="Logo Portofolio Lancea"
                height={0}
                width={0}
                sizes="100vh"
                style={{width:'55px', height: "auto" }}
                className="block dark:hidden"
              />
            </Link>
            <nav className="hidden md:flex gap-10">
              <ul
                onMouseLeave={() => {
                  setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                  }));
                }}
                className="relative mx-auto flex w-fit"
              >
                <Link
                  href="#EXPERIENCE"
                  className="font-medium items-center text-xs transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Experience</Tab>
                </Link>
                <Link
                  href="#PROJECT"
                  className="font-medium items-center text-xs transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Project</Tab>
                </Link>
                <Link
                  href="#CONTACT"
                  className="font-medium items-center text-xs transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Contact</Tab>
                </Link>
                <Cursor position={position} />
              </ul>
            </nav>
            <div className="flex items-center w-fit h-fit">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <BurgerMenu />
      </div>
    </header>
  );
};
const Tab = ({ children, setPosition }: any) => {
  const ref = useRef<HTMLLIElement>(null);
  const rect = ref?.current?.getBoundingClientRect();

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1 uppercase text-black dark:text-white font-semibold md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};
const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full dark:bg-slate-700 bg-slate-50 shadow-inner md:h-12"
    />
  );
};
export default Navbar;
