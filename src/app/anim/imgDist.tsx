'use client';

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

import img1 from "../assets/slides/content.jpg"
import img2 from "../assets/slides/img2.jpg"
const ImgDist = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLImageElement>(null)
  const image2Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!containerRef.current || !image1Ref.current || !image2Ref.current) return

    const container = containerRef.current
    const image1 = image1Ref.current
    const image2 = image2Ref.current

    let isHovering = false

    const tl = gsap.timeline({ paused: true })

    tl.to(image2, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })

    const handleMouseEnter = () => {
      isHovering = true
      tl.play()
    }

    const handleMouseLeave = () => {
      isHovering = false
      tl.reverse()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      gsap.to(image2, {
        clipPath: `circle(30% at ${x * 100}% ${y * 100}%)`,
        duration: 0.2,
      })
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Image Distortion Effect on Hover</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis erat sit amet turpis consectetur, 
          vitae varius leo placerat. Proin eu maximus libero, at gravida est. Vestibulum arcu enim, egestas nec 
          gravida eget, scelerisque nec erat. Fusce volutpat ipsum vitae eros maximus, in placerat arcu dignissim. 
          Aenean vitae augue leo. Fusce tincidunt porttitor aliquam. Vivamus ante erat, placerat a tincidunt vitae, 
          facilisis non velit. Duis mollis massa lacus, in vehicula ipsum consequat nec.
        </p>
      </div>
      <div ref={containerRef} className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-lg shadow-xl">
        <Image
          ref={image1Ref}
          src={img1}
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <Image
          ref={image2Ref}
          src={img2}
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full opacity-0"
        />
      </div>
    </div>
  )
}
export default ImgDist;