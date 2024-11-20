"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import projectImg1 from "../assets/news1.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectList = {
  id: number;
  projectTitle: string;
  projectImg: StaticImageData;
  altImg: string;
  projectLink: string;
  projectSubtitle: string;
};

const projectList: ProjectList[] = [
  {
    id: 1,
    projectTitle: "It's project 1",
    projectImg: projectImg1,
    altImg: "Test Image",
    projectLink: "https://github.com",
    projectSubtitle: "Short description of the project.",
  },
  {
    id: 2,
    projectTitle: "It's project 2",
    projectImg: projectImg1,
    altImg: "Test Image",
    projectLink: "https://github.com",
    projectSubtitle: "Short description of the project.",
  },
  {
    id: 3,
    projectTitle: "It's project 3",
    projectImg: projectImg1,
    altImg: "Test Image",
    projectLink: "https://github.com",
    projectSubtitle: "Short description of the project. Short description of the project. Short description of the project. Short description of the project.",
  },
  {
    id: 4,
    projectTitle: "It's project 4",
    projectImg: projectImg1,
    altImg: "Test Image",
    projectLink: "https://github.com",
    projectSubtitle:
      "Short description of the project.Short description of the project.Short description of the project.",
  },
];

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
    <div id="PROJECT" className="min-h-screen bg-custom-blue">
      <div className="flex items-center justify-center mx-auto">
        <h1 className="text-4xl font-bold">Work Project</h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 place-items-center w-full items-stretch">
        {projectList.map((project, index) => (
          <Card
            key={project.id}
            ref={(el) => (refs.current[index] = el!)}
            className="relative h-auto rounded-xl w-3/4 md:w-full flex-col shadow-lg overflow-hidden group cursor-none bg-custom-slate"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(event) => handleMouseMove(event, index)}
          >
            <CardHeader className="p-0">
              <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={project.projectImg}
                  alt={project.altImg}
                  fill
                  className="cover"
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
                      className="absolute flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-lg pointer-events-none"
                      style={{ x: textX, y: textY }}
                    >
                      <span className="mr-2 text-sm font-semibold text-gray-800 dark:text-white">
                        View Project
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-800 duration-500" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </CardHeader>
            <div className="">
              <CardContent className="grid grid-cols-2 p-5 h-full items-stretch b">
                <CardTitle className="text-lg font-semibold mb-2">
                  {project.projectTitle}
                </CardTitle>
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="relative mb-2 hover:text-purple-300 cursor-default right-0 top-0 justify-self-end"
                  onMouseEnter={() => setHoveredIndex(null)}
                  onMouseLeave={() => setHoveredIndex(index)}
                  onMouseMove={(event) => handleMouseMove(event, index)}
                >
                  <FaExternalLinkAlt />
                </Link>
                <p className="text-sm text-gray-600 mb-5 col-span-2">
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
