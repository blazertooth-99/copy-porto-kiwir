"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactIcon, ContactIcon1 } from "../constant";
import { SOCIAL_MEDIA } from "../constant";

const Contact = () => {
  return (
    <div
      id="CONTACT"
      className="flex h-full w-full items-center justify-center m-auto p-2"
    >
      <div className="flex flex-col h-full justify-end z-10 items-center py-10 space-y-8 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white sm:text-4xl text-center">
          <span className="text-cyan-600 dark:text-teal-400 animate-pulse">
            Connect
          </span>{" "}
          with me on social media.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {ContactIcon.map(({ id, title, Icon, link }) => (
            <div
              key={id}
              className="relative rounded-full bg-cyan-600/60 dark:bg-white/10 p-3 text-white dark:text-teal-400 hover:bg-cyan-600/70 dark:hover:bg-white/20 transition-transform duration-300 hover:scale-125"
            >
              <Link key={id} href={link} target="_blank">
                <Icon
                  className={`text-xl md:text-3xl lg:text-4xl`}
                  aria-label={title}
                />
                <span className="sr-only">{title}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="relative px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-slate-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
          >
            Resume
          </Button>
          <Link 
          href="https://wa.me/+6285851816241"
          target="_blank">
            <Button
              variant="outline"
              className="relative px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-teal-400 dark:hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
            >
              Les&apos;t talk
            </Button>
          </Link>
        </div>

        <div className="w-full flex justify-center items-center bottom-5">
          <p className="text-sm md:text-base text-white/60 text-center">
            Created using Next Js and Developed{" "}
            <span className="text-red-500 dark:text-teal-400">&#10084;</span> by C Satrio
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
