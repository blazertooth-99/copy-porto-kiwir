"use client";

import Image from "next/image";
import CardProfile from "../component/common/CardProfile";
import TextRotateLoop from "../component/common/TextRotateLoop";
import { Button } from "@/components/ui/button";
import FloatingParticles from "../component/home/FloatingParticles"
import CoolMeteorParticles from "../component/home/CoolMeteorParticles";
import MeteorShowerBackground from "../component/home/MeteorShowerBackground";

const Profiles = () => {
  return (
    <div className="h-screen w-full p-0 mx-auto justify-center items-center bg-gray-900/50">
      <FloatingParticles />
      {/* <CoolMeteorParticles /> */}
      {/* <MeteorShowerBackground /> */}
      <div className="relative flex flex-col z-10">
        <div className="relative">
          <TextRotateLoop />
        </div>
        <div className="relative top-0 items-center justify-start">
          <CardProfile />
        </div>
        <div className="mt-4 items-center justify-center mx-auto">
          <Button
            variant="outline"
            className="group/button relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white-100/30 backdrop-blur-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-600/80 border border-white-200"
          >
            My Resume
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Profiles;
