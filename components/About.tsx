"use client"
import Image from "next/image"
import { useEffect } from "react"

export default function About() {
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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center text-gradient fade-in-section">Sobre Mí</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center fade-in-section">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-md overflow-hidden glow-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCtppPHWEpSSfDiTaaE9TlbZp3Hksk.png"
                  alt="Smith Rodriguez"
                  width={500}
                  height={750}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="glass-effect p-8 rounded-md shadow-xl">
              <div className="text-lg text-muted-foreground space-y-6">
                <p className="leading-relaxed fade-in-section">
                  Soy un desarrollador web apasionado por crear experiencias digitales únicas y atractivas. Con
                  experiencia en tecnologías front-end y back-end, me especializo en construir aplicaciones web modernas
                  y responsivas.
                </p>
                <p className="leading-relaxed fade-in-section">
                  Mi enfoque se centra en la creación de soluciones web innovadoras que no solo sean visualmente
                  atractivas, sino también altamente funcionales y orientadas al usuario. Me mantengo constantemente
                  actualizado con las últimas tecnologías y mejores prácticas del desarrollo web.
                </p>
                <p className="leading-relaxed fade-in-section">
                  Cuando no estoy programando, me dedico a expandir mis conocimientos en nuevas tecnologías y
                  metodologías de desarrollo. Siempre estoy buscando nuevos desafíos y oportunidades para crecer
                  profesionalmente.
                </p>
              </div>

              <div className="mt-8 flex justify-center md:justify-start fade-in-section">
                <a
                  href="/smith-rodriguez-cv.pdf"
                  download="Smith_Rodriguez_CV.pdf"
                  className="modern-button bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Descarga mi CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

