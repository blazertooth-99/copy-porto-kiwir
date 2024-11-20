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
            className="bg-transparent text-white hover:bg-white/20"
            variant="outline"
          >
            Resume
          </Button>
          <Button className="bg-white text-teal-900 hover:bg-white/90">
            Let&apos;s Talk
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
