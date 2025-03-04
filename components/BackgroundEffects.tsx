"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const requestRef = useRef<number>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Inicializar partículas
    const initialParticles: Particle[] = []
    const colors = [
      "rgba(124, 58, 237, 0.5)",
      "rgba(139, 92, 246, 0.5)",
      "rgba(167, 139, 250, 0.3)",
      "rgba(236, 72, 153, 0.4)",
      "rgba(244, 114, 182, 0.3)",
    ]

    for (let i = 0; i < 30; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      })
    }
    setParticles(initialParticles)

    // Configurar canvas
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar y actualizar partículas
      const updatedParticles = particles.map((particle) => {
        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Conectar partículas cercanas
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 - distance / 1500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })

        // Actualizar posición
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY

        // Rebote en los bordes
        if (newX > canvas.width || newX < 0) {
          particle.speedX = -particle.speedX
          newX = particle.x + particle.speedX
        }
        if (newY > canvas.height || newY < 0) {
          particle.speedY = -particle.speedY
          newY = particle.y + particle.speedY
        }

        return {
          ...particle,
          x: newX,
          y: newY,
        }
      })

      setParticles(updatedParticles)
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [particles])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-40" />

      {/* Elementos decorativos adicionales */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-2]">
        {/* Círculos de gradiente */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 to-transparent opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-purple-500/5 to-transparent opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Ondas en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </>
  )
}

