"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import DarkMode from "./dark-mode-switcher";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const iconRef = useRef(null);

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
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 text-white bg-black rounded-full md:hidden"
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

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
          onClick={toggleMenu}
        >
          <nav className="text-center" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-4 right-20 p-2">
              <DarkMode />
            </div>
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="block py-4 text-4xl font-bold text-white transition-colors hover:text-gray-300"
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
