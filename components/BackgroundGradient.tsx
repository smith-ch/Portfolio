"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundGradient() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Fondo con cuadrícula */}
      <div className="absolute inset-0 grid-background opacity-70"></div>

      {/* Gradientes flotantes */}
      <motion.div
        className="floating-gradient w-[600px] h-[600px] left-[-100px] top-[10%]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(30, 30, 46, 0) 70%)",
          transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)`,
        }}
      />

      <motion.div
        className="floating-gradient w-[500px] h-[500px] right-[-100px] top-[30%]"
        style={{
          background: "radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, rgba(30, 30, 46, 0) 70%)",
          transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.01}px)`,
          animationDelay: "5s",
        }}
      />

      <motion.div
        className="floating-gradient w-[700px] h-[700px] left-[20%] bottom-[-200px]"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(30, 30, 46, 0) 70%)",
          transform: `translate(${scrollY * -0.01}px, ${scrollY * -0.03}px)`,
          animationDelay: "2s",
        }}
      />

      {/* Formas geométricas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos animados */}
        <div className="absolute top-[15%] left-[10%] w-[150px] h-[150px] rounded-full border-2 border-violet-500/20 animate-float-slow"></div>
        <div className="absolute top-[45%] right-[15%] w-[100px] h-[100px] rounded-full border-2 border-fuchsia-500/20 animate-float-slow animation-delay-1000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-[200px] h-[200px] rounded-full border-2 border-pink-500/20 animate-float-slow animation-delay-2000"></div>

        {/* Triángulos animados */}
        <div className="absolute top-[30%] right-[25%] animate-float-slow animation-delay-1500">
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
            <polygon points="50,15 100,100 0,100" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute bottom-[35%] left-[15%] animate-float-slow animation-delay-2500">
          <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-30">
            <polygon points="50,15 100,100 0,100" fill="none" stroke="rgba(217, 70, 239, 0.5)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Líneas decorativas */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent"></div>
      </div>

      {/* Efecto de líneas de ruido */}
      <div className="noise-lines"></div>
    </div>
  )
}

