"use client";

import { IconType } from "react-icons";
import { motion, Variants } from "framer-motion";


import { DiPhp } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";
import {
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiSelenium,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechIcon {
  id: number;
  Icon: IconType;
  label: string;
  color: string;
  duration: number;
}

const techIcons: TechIcon[] = [
  {
    id:1,
    Icon: FaLinux,
    label: "Linux",
    color: "text-cyan-500",
    duration: 2.5,
  },
  {
    id:2,
    Icon: FaReact,
    label: "React Js",
    color: "text-cyan-500",
    duration: 2.5,
  },
  {
    id:3,
    Icon: SiJavascript,
    label: "JavaScript",
    color: "text-orange-800",
    duration: 3,
  },
  { 
    id:4,
    Icon: SiVite, 
    label: "Vite", 
    color: "text-cyan-800", 
    duration: 4 },
  {
    id:5,
    Icon: SiTailwindcss,
    label: "Tailwind Csst",
    color: "text-cyan-400",
    duration: 2.5,
  },
  { 
    id:6,
    Icon: DiPhp, 
    label: "PHP", 
    color: "text-cyan-600", 
    duration: 2.5 
  },
  { 
    id:7,
    Icon: FaCss3Alt, 
    label: "CSS 3", 
    color: "text-blue-600", 
    duration: 2.5 
  },
  { 
    id:8,
    Icon: SiNextdotjs, 
    label: "Next Js", 
    color: "text-slate-800", 
    duration: 3 
  },
  {
    id:9,
    Icon: BiLogoPostgresql,
    label: "PostgreSQL",
    color: "text-sky-700",
    duration: 4,
  },
  {
    id:10,
    Icon: SiSelenium,
    label: "Selenium",
    color: "text-sky-700",
    duration: 4,
  },
  {
    id:11,
    Icon: FaFigma,
    label: "Figma",
    color: "text-pink-500",
    duration: 4,
  },
  {
    id:12,
    Icon: FaGitAlt,
    label: "Git",
    color: "text-pink-500",
    duration: 4,
  },
];

const iconVariants: Variants = {
  initial: { y: -10 },
  animate: (duration: number) => ({
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

export default function Tech() {
  return (
    <div className="py-24 px-5 bg-custom-blue dark:bg-slate-800">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-3xl md:text-4xl lg:text-5xl font-bold text-center animate-pulse text-white"
      >
          Tech <span className="text-cyan-600 dark:text-teal-400">Stack</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5 p-2 mb-20"
      >
        {techIcons.map(({id, Icon, label, color, duration }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  key={id}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                  custom={duration}
                  className="rounded-2xl p-4 dark:bg-gray-700 bg-custom-slate boder border-cyan-600 dark:border dark:border-teal-400 "
                >
                  <Icon
                    className={`text-4xl md:text-5xl lg:text-7xl  ${color}`}
                    aria-label={label}
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </div>
  );
}
