"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from 'lucide-react';
import DarkMode from "./dark-mode-switcher";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const iconRef = useRef(null);
  const darkModeSwitcherRef = useRef(null);

  const menuItems = ["Home", "Experience", "Project", "Contact"];

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        menuItemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
      // Animate burger to X
      gsap.to(iconRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
      // Animate dark mode switcher
      gsap.fromTo(
        darkModeSwitcherRef.current,
        { opacity: 0, scale: 0.5, x: 5, duration: 0.5},
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      // Animate X to burger
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      // Hide dark mode switcher
      gsap.to(darkModeSwitcherRef.current, {
        opacity: 0,
        scale: 0.5,
        x: 40,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 text-cyan-600 dark:text-teal-400 bg-white/10 dark:bg-black/20 border-2 border-cyan-600 dark:border-teal-400 rounded-full md:hidden backdrop-blur-lg"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <div ref={iconRef} className="w-6 h-6 relative">
          <Menu
            className={`absolute inset-0 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
            size={24}
          />
          <X
            className={`absolute inset-0 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            size={24}
          />
        </div>
      </button>

      <div ref={darkModeSwitcherRef} className="fixed top-4 right-20 z-50 md:hidden opacity-0">
        <DarkMode />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg md:hidden"
          onClick={toggleMenu}
        >
          <nav className="text-center" onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="block py-4 text-4xl font-bold text-white dark:text-teal-400 transition-colors hover:text-cyan-600 dark:hover:text-teal-200"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

