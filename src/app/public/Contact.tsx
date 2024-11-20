"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Dribbble,
  Globe,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="CONTACT"
      className="flex relative h-full items-center justify-center m-auto"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center top-1/2">
        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
          Connect with me on social media.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          {/* <Link href="#" className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link> */}
          {/* <Link href="#" className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <Globe className="h-6 w-6" />
              <span className="sr-only">Medium</span>
            </Link> */}
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Dribbble className="h-6 w-6" />
            <span className="sr-only">Dribbble</span>
          </Link>
          {/* <Link href="#" className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <Globe className="h-6 w-6" />
              <span className="sr-only">Behance</span>
            </Link> */}
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          {/* <Link href="#" className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <Globe className="h-6 w-6" />
              <span className="sr-only">Website</span>
            </Link> */}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="relative px-6 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 dark:text-gray-300 isolation-auto z-10 border-2 border-sky-800
                 dark:border-slate-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold text-black shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
          >
            Resume
          </Button>
          <Button
            variant="outline"
            className="relative px-6 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-slate-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
          >
            Les&apos;t talk
          </Button>
        </div>
        <p className="text-white/60">
          Created using Next Js and Developed{" "}
          <span className="text-red-500">❤️</span> by C Satrio
        </p>
      </div>
    </div>
  );
};
export default Contact;
