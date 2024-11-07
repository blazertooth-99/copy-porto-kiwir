"use client";

import Image from "next/image";
import CardProfile from "./CardProfile";
import TextRotateLoop from "./TextRotateLoop";
import { Button } from "@/components/ui/button";
import LoopText from "./LoopText"

const Profiles = () => {
  return (
    <main className="min-h-screen w-full p-0 mx-auto justify-center items-center bg-sky-300">
      <div className="grid grid-cols-4">
        <div className="flex">
          <CardProfile />
        </div>
        <div className="relative col-span-3">
          <TextRotateLoop />
          <LoopText />
          <Button
            variant="outline"
            className="group/button relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white-100/30 backdrop-blur-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-600/80 border border-white/20"
          >
            My Resume
          </Button>
        </div>
      </div>
      <div></div>
    </main>
  );
};
export default Profiles;
