import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import imgBanner from "../assets/Banner.jpeg"
import AnimatedTitle from "./AnimatedTitle"

export default function Component() {
  return (
    <div className="flex items-center justify-center overflow-hidden my-10">
      <AspectRatio ratio={24 / 9} className="bg-muted">
        <Image
          src={imgBanner}
          alt="Responsive banner image"
          fill
          className="rounded-md object-cover"
          sizes="100vw"
          priority
        />
        <span>
          <AnimatedTitle />
        </span>
      </AspectRatio>
    </div>
  )
}