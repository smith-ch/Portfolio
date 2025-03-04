"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#projects" },
  { name: "Tecnologías", href: "#technologies" },
  { name: "Sobre Mí", href: "#about" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "projects", "technologies", "about"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="relative group">
              <div className="px-4 py-1 bg-violet-900/30 rounded-md">
                <span className="text-gradient font-bold text-xl">SR</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-muted-foreground hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                        setIsMobileMenuOpen(false)
                      }
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-violet-900/30 rounded-md -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-violet-900/30"
                      : "text-muted-foreground hover:text-white hover:bg-secondary/30"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                      setIsMobileMenuOpen(false)
                    }
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </motion.nav>
  )
}

