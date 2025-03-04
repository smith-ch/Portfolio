"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Blummos E-commerce",
    description:
      "Tienda en línea de moda y accesorios de lujo desarrollada con Shopify. Diseño minimalista y elegante con funcionalidades completas de e-commerce, incluyendo catálogo de productos, carrito de compras y pasarela de pagos segura.",
    image:
      "https://sjc.microlink.io/eSeXOEFmmLYAUnHsj1uvnajJnUDBUbj2RQcA01aOP565u2-xdo2jokWIIu95qK1kiAXwDG9n6hWAS5ZbyC-Fng.jpeg",
    link: "https://blummos.com/",
    technologies: ["Shopify", "JavaScript", "HTML/CSS", "Liquid"],
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description:
      "Portfolio web moderno y dinámico construido con Next.js y TailwindCSS. Incluye animaciones fluidas con Framer Motion, diseño responsive, y una experiencia de usuario optimizada. Showcase perfecto de proyectos y habilidades.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pZz6GKwONhjUK7ogEvGjiDm9sFgiZq.png",
    link: "#",
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Aplicación de gestión de tareas con React y Firebase",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Firebase", "Material-UI"],
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <section id="projects" className="py-20 relative">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center text-gradient fade-in-section">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card/90 rounded-md overflow-hidden shadow-lg glow-border hover-lift fade-in-section"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {project.link && (
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-button bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform translate-y-4 hover:translate-y-0"
                    >
                      Visitar sitio
                    </Link>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3
                  className={`text-xl font-heading mb-4 transition-colors duration-300 ${
                    hoveredId === project.id ? "text-gradient" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

