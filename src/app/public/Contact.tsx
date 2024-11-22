"use client";

// import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Dribbble,
  icons,
} from "lucide-react";
import Link from "next/link";
import { title } from "process";

const ContacIcon = [
  {
    id: 1,
    title: "Github",
    Icon: <Github />,
    link: "#",
  },
  {
    id: 2,
    title: "Linkedin",
    Icon: <Linkedin />,
    link: "#",
  },
  {
    id: 3,
    title: "Twitter",
    Icon: <Twitter />,
    link: "#",
  },
  {
    id: 4,
    title: "Instagram",
    Icon: <Instagram />,
    link: "#",
  },
  {
    id: 5,
    title: "Facebook",
    Icon: <Facebook />,
    link: "#",
  },
  {
    id: 6,
    title: "Dribble",
    Icon: <Dribbble />,
    link: "#",
  },
];

const Contact = () => {
  return (
    <div
      id="CONTACT"
      className="flex h-full w-full items-center justify-center m-auto p-2"
    >
      <div className="flex flex-col h-full justify-end z-10 items-center py-10 space-y-8 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white sm:text-4xl text-center">
          <span className="text-cyan-600 dark:text-teal-400 animate-pulse">Connect</span> with me on social media.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {ContacIcon.map((icons, index) => (
            <div className="relative rounded-full bg-cyan-600/60 dark:bg-white/10 p-3 text-white dark:text-teal-400 hover:bg-cyan-600/70 dark:hover:bg-white/20 transition-transform duration-300 hover:scale-125">
              <Link key={index} href={icons.link}>
                <span className="w-6 h-6 bg-transparent hover:scale-75">
                  {icons.Icon}
                </span>
                <span className="sr-only">{icons.title}</span>
              </Link>
            </div>
          ))}

          {/* <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
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
          <Link
            href="#"
            className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link> */}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="relative px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 dark:text-gray-300 isolation-auto z-10 border-2 border-sky-800
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
            className="relative px-10 py-6 rounded-lg bg-white/50 dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
                 dark:border-teal-400 dark:hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                 hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400 
                  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
                 inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
                 disabled:pointer-events-none"
          >
            Les&apos;t talk
          </Button>
        </div>

        <div className="w-full flex justify-center items-center bottom-5">
          <p className="text-sm md:text-base text-white/60 text-center">
            Created using Next Js and Developed{" "}
            <span className="text-red-500">❤️</span> by C Satrio
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
