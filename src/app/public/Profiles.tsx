"use client";

import Image from "next/image";
import CardProfile from "../component/common/CardProfile";
import TextRotateLoop from "../component/common/TextWelcome";
import { Button } from "@/components/ui/button";
import FloatingParticles from "../component/home/FloatingParticles";
import CardProfileRev from "../component/common/CardProfileRev";

const Profiles = () => {
  return (
    <div
      id="HOME"
      className="relative w-full p-10 bg-sky-900"
    >
      <div className="flex justify-center mx-auto p-10 w-full h-full place-items-center">
        <CardProfileRev />
      </div>
    </div>
  );
};
export default Profiles;
