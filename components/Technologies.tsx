"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiAdobephotoshop,
} from "react-icons/si"
import { useEffect } from "react"

const technologies = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-600" },
]

export default function Technologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
    <section id="technologies" className="py-20 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading mb-16 text-center text-gradient fade-in-section">
          Tecnologías
        </h2>

        <div className="tech-slider-container fade-in-section">
          <Slider {...settings} className="tech-slider">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="px-4">
                <div className="flex flex-col items-center justify-center group">
                  <div className="relative mb-4">
                    <div className="bg-secondary/80 glass-effect p-6 rounded-md transition-all duration-300 hover-lift">
                      <tech.icon
                        className={`text-4xl ${tech.color} transition-all duration-300 group-hover:scale-110`}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

