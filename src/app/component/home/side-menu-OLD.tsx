'use client'

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

const menuItems = ['About', 'Stack', 'Experience', 'Project', 'Contact']

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuItemsRef = useRef([])

  useEffect(() => {
    gsap.set(menuRef.current, { x: '100%' })
    gsap.set(menuItemsRef.current, { opacity: 0, x: -20 })
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: '0%', duration: 0.5, ease: 'power3.out' })
      gsap.to(menuItemsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      })
    } else {
      gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' })
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power3.in',
      })
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex w-auto">
      <button
        onClick={toggleMenu}
        className="flex top-0 right-0 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        ref={menuRef}
        className={`fixed -pr-10 top-0 right-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
        aria-hidden={!isOpen}
      >
        <ul className="relative">
          {menuItems.map((item, index) => (
            <li
              key={item}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="mb-4"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </div>
  )
}