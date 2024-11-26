"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Star, Github } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { getLanguageColor } from "../../utils/languageColors";
import Link from "next/link";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export default function GithubRepository() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/blazertooth-99/repos"
      );
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("ERROR 403 x_x");
        } else if (response.status === 404) {
          throw new Error("ERROR 404 x_x");
        } else {
          throw new Error("Failed to fetch repositories");
        }
      }
      const data = await response.json();
      setRepositories(data);
      setFilteredRepos(data);
      setDisplayedRepos(data.slice(0, 6));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filtered);
    setDisplayedRepos(filtered.slice(0, visibleCount));
  }, [searchTerm, repositories, visibleCount]);

  const animateRepositories = () => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    }
  };

  const showMoreRepos = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 6, filteredRepos.length)
    );
    setTimeout(() => animateRepositories(), 0);
  };

  const showLessRepos = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 6, 6));
    setTimeout(() => animateRepositories(), 0);
  };

  if (loading) {
    return (
      <div className="flex py-24 px-5 items-center justify-center bg-custom-blue dark:bg-slate-800 min-h-screen">
        <div className="w-16 h-16 border-t-4 border-cyan-600 dark:border-teal-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex py-24 px-5 items-center justify-center min-h-screen bg-custom-blue dark:bg-slate-800">
        <p className="text-red-500 text-xl">{error}</p>
        <Button
          onClick={fetchRepositories}
          className="ml-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-24 px-5 bg-custom-blue dark:bg-slate-800 items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center animate-pulse text-white">
        My{" "}
        <span className="text-cyan-600 dark:text-teal-400">
          Github Repository
        </span>
      </h1>
      <motion.div
        className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 items-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef}
      >
        {displayedRepos.map((repo, index) => (
          <motion.div
            key={repo.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex p-5 m-5 border dark:border-teal-400 border-cyan-600 dark:bg-gray-700 bg-custom-slate hover:dark:bg-gray-600 hover:bg-custom-slate/80 rounded-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col h-full w-full">
              <Link href={repo.html_url}>
                <h2 className="text-lg md:text-xl font-semibold mb-8 text-black dark:text-teal-400 hover:text-gray-600 dark:hover:text-teal-300 hover:scale-105 transition-all duration-500">
                  {repo.name}
                </h2>
              </Link>
              <div
                className={`border-t-2 border-cyan-600 dark:border-teal-400 rounded-xl transition-all duration-500 mb-5 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`}
              ></div>
              <p className="line-clamp-2 text-sm md:text-base text-gray-950 dark:text-gray-200">
                {repo.description || "No description available."}
              </p>
              <div className="flex flex-row mr-3 pt-5 pb-5 justify-start text-left">
                <div className="w-fit transform-all duration-500 hover:scale-125">
                  <Github className="w-5 h-5 mr-1 text-gray-500 hover:text-gray-400 dark:text-teal-400 dark:hover:text-teal-300" />
                </div>
                <div className="flex text-pretty">
                  <span className="ml-2 text-lightText transition-colors duration-500">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-500 dark:text-gray-300 hover:text-sky-500 dark:hover:text-purple-400"
                    >
                      {repo.full_name}
                    </a>
                  </span>
                </div>
              </div>

              {repo.language && (
                <div className="relative content-end">
                  <div className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                      }}
                      aria-hidden="true"
                    ></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {repo.language}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-8 space-x-4">
        {visibleCount < filteredRepos.length && (
          <Button
            onClick={showMoreRepos}
            variant="outline"
            className="relative px-10 py-6 rounded-lg bg-white dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
               dark:border-teal-400 dark:hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
               hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400 
                before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
               inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
               disabled:pointer-events-none"
          >
            Show more
          </Button>
        )}
        {visibleCount > 6 && (
          <Button
            onClick={showLessRepos}
            variant="outline"
            className="relative px-10 py-6 rounded-lg bg-white dark:bg-slate-800/50 text-teal-800 dark:text-teal-400 isolation-auto z-10 border-2 border-sky-800
              dark:border-teal-400 dark:hover:border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
              hover:text-white dark:hover:text-black before:-right-full before:hover:right-0 before:rounded-full before:bg-cyan-600 dark:before:bg-teal-400 
               before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
              inline-flex items-center justify-center text-base md:text-lg font-semibold  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
              disabled:pointer-events-none"
          >
            Show less
          </Button>
        )}
      </div>
    </div>
  );
}
