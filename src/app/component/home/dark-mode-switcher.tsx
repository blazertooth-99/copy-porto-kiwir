"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const DarkMode = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark")
    } else if (prefersDark) {
      setTheme("dark")
    }
    document.documentElement.classList.toggle("dark", savedTheme === "dark" || (!savedTheme && prefersDark))
  }, [])

  useEffect(() => {
    // Update the HTML class and save the theme preference
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <Button
      variant="outline"
      className="group/button relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white/30 dark:bg-gray-700 backdrop-blur-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-600/20 border border-white/20 dark:border-black/20 w-11 h-11"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-600" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
export default DarkMode;