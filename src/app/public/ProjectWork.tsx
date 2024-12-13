"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { projectList, ProjectList } from "../constant";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HoverImage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const refs = useRef<HTMLDivElement[]>([]);

  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const textX = useTransform(x, (value) => value - 60); // Adjust based on text width
  const textY = useTransform(y, (value) => value - 20); // Adjust based on text height

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    const rect = refs.current[index]?.getBoundingClientRect();
    if (rect) {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  return (
    <div
      id="PROJECT"
      className="py-24 px-5 min-h-screen bg-custom-blue dark:bg-slate-800"
    >
      <div className="flex items-center justify-center mx-auto">
        <h1 className="my-20 text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
          Work{" "}
          <span className="text-cyan-600 dark:text-teal-400 animate-pulse">
            Project
          </span>
        </h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 place-items-center w-full items-stretch">
        {projectList.map((project, index) => (
          <Card
            key={project.id}
            ref={(el: any) => (refs.current[index] = el!)}
            className="relative h-auto rounded-xl w-3/4 md:w-full flex-col shadow-lg overflow-hidden group cursor-none bg-custom-slate dark:bg-gray-700 border-cyan-600 dark:border dark:border-teal-400"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(event) => handleMouseMove(event, index)}
          >
            <CardHeader className="p-0">
            <Link href={project.projectLink} target="_blank" className="cursor-none">
              <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={project.projectImg}
                  alt={project.altImg}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw"
                  className="object-cover w-full"
                />
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"
                  >
                    <motion.div
                      className="absolute flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg pointer-events-none"
                      style={{ x: textX, y: textY }}
                    >
                     
                        <span className="mr-2 text-sm font-semibold text-gray-800 dark:text-teal-400">
                          View Project
                        </span>
                      
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-800 dark:text-teal-400 duration-500" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
              </Link>
            </CardHeader>
            <div className="border-t border-cyan-600 dark:border-teal-400">
              <CardContent className="grid grid-cols-2 p-5 h-full items-stretch b">
                <CardTitle className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-teal-400">
                  {project.projectTitle}
                </CardTitle>
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="relative mb-2 hover:text-sky-700 dark:hover:text-teal-400 cursor-default right-0 top-0 justify-self-end"
                  onMouseEnter={() => setHoveredIndex(null)}
                  onMouseLeave={() => setHoveredIndex(index)}
                  onMouseMove={(event) => handleMouseMove(event, index)}
                >
                  <FaExternalLinkAlt />
                </Link>
                <p className="text-base md:text-lg text-black dark:text-white inline-flex mb-5 col-span-2">
                  {project.projectSubtitle}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
