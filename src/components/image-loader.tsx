"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageLoaderProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageLoader({ src, alt, width, height, className }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
