"use client";

import Image from "next/image";
import CardProfile from "./CardProfile";
import TextRotateLoop from "../component/common/TextWelcome";
import { Button } from "@/components/ui/button";
import FloatingParticles from "../component/home/FloatingParticles";
import CardProfileRev from "./CardProfileRev";

const Profiles = () => {
  return (
    <div
      id="HOME"
      className="min-h-screen w-full p-10 items-center justify-center bg-sky-900"
    >
      <div className="relative items-center justify-center mx-auto p-10 w-full h-full">
        <CardProfileRev />
      </div>
    </div>
  );
};
export default Profiles;
