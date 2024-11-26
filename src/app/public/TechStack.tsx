"use client";

import { IconType } from "react-icons";
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { techIcons, TechIcon } from "../constant";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

export default function TechStack() {
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
        {techIcons.map(({ id, Icon, label, color, duration }) => (
          <TooltipProvider key={id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  key={id}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                  custom={duration}
                  className="rounded-2xl p-4 dark:bg-gray-700 bg-custom-slate border border-cyan-600 dark:border-teal-400"
                >
                  <Icon
                    className={`text-4xl md:text-5xl lg:text-7xl ${color}`}
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

