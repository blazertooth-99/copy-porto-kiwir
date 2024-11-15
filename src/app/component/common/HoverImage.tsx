"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HoverImage() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const x = useSpring(0, { stiffness: 300, damping: 30 })
  const y = useSpring(0, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        x.set(mouseX)
        y.set(mouseY)
      }
    }

    const handleMouseLeave = () => setIsHovered(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y])

  const textX = useTransform(x, (value) => value - 60) // Adjust based on text width
  const textY = useTransform(y, (value) => value - 20) // Adjust based on text height

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        ref={containerRef}
        className="relative w-full h-64 bg-gray-200 cursor-none"
        onMouseEnter={() => setIsHovered(true)}
      >
        <img
          src="/placeholder.svg?height=256&width=384"
          alt="Project preview"
          className="object-cover w-full h-full"
        />
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"
        >
          <motion.div
            className="absolute flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-lg pointer-events-none"
            style={{ x: textX, y: textY }}
          >
            <span className="mr-2 text-sm font-semibold text-gray-800">View Project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4 text-gray-800 rotate-[-90deg]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">Project Title</h3>
        <p className="text-sm text-gray-600">Short project description goes here.</p>
      </div>
    </div>
  )
}