"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import projectImg1 from "../assets/news1.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
    projectSubtitle: "Short description of the project.",
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
    <div className="relative mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 items-center justify-center w-full min-h-screen bg-gray-700">
      {projectList.map((project, index) => (
        <Card
          key={project.id}
          ref={(el) => (refs.current[index] = el!)}
          className="relative flex-col rounded-lg shadow-lg overflow-hidden group cursor-none"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={(event) => handleMouseMove(event, index)}
        >
          <CardHeader className="p-0">
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
          <Image
            src={project.projectImg}
            alt={project.altImg}
            layout="fill"
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
                className="absolute flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-lg pointer-events-none"
                style={{ x: textX, y: textY }}
              >
                <span className="mr-2 text-sm font-semibold text-gray-800">
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
          <div className="flex justify-between items-starto">
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold col-span-2 mb-2">{project.projectTitle}</CardTitle>
            <Link
              href={project.projectLink}
              target="_blank"
              className="relative mb-2 hover:text-purple-300 cursor-default right-0 justify-self-end"
              onMouseEnter={() => setHoveredIndex(null)}
              onMouseLeave={() => setHoveredIndex(index)}
              onMouseMove={(event) => handleMouseMove(event, index)}
            >
              <FaExternalLinkAlt />
            </Link>
            <p className="text-sm text-gray-600 mb-5 col-span-2">{project.projectSubtitle}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
