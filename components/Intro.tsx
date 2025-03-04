"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export default function Intro() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const fadeElements = document.querySelectorAll(".fade-in-section")
    fadeElements.forEach((el) => observer.observe(el))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 mb-12 relative overflow-hidden glass-effect rounded-lg"
      >
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <motion.h1
            ref={textRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4 text-gradient text-shadow-lg"
          >
            Hola, soy Smith Rodriguez
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="overflow-hidden inline-block mx-auto"
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 typing-text">
              Desarrollador Web & Diseñador
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 fade-in-section"
          >
            Especializado en crear experiencias web únicas y atractivas. Con pasión por el diseño y la tecnología,
            transformo ideas en realidad digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative inline-block"
          >
            <button
              onClick={scrollToProjects}
              className="modern-button bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver mis proyectos
            </button>
          </motion.div>
        </div>

        {/* Líneas decorativas */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
      </motion.section>
      <div ref={projectsRef} />
    </>
  )
}

