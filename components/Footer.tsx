"use client"

import Link from "next/link"
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden">
      <div className="absolute inset-0 glass-effect z-0"></div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 fade-in-section">
            <h3 className="text-2xl font-bold mb-2 text-gradient">Contáctame</h3>
            <p className="text-muted-foreground">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </div>
          <div className="flex space-x-6 fade-in-section">
            <Link
              href="https://wa.me/qr/M6ZD2BWR5UWGM1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover-lift"
            >
              <div className="text-muted-foreground hover:text-green-500 transition-colors duration-300">
                <FaWhatsapp size={28} />
                <span className="sr-only">WhatsApp</span>
              </div>
            </Link>
            <Link href="mailto:smithrodriguez345@gmail.com" className="relative group hover-lift">
              <div className="text-muted-foreground hover:text-red-500 transition-colors duration-300">
                <FaEnvelope size={28} />
                <span className="sr-only">Email</span>
              </div>
            </Link>
            <Link
              href="https://github.com/smith-ch"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover-lift"
            >
              <div className="text-muted-foreground hover:text-gray-300 transition-colors duration-300">
                <FaGithub size={28} />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/smith-rodriguez-7b76a3278/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover-lift"
            >
              <div className="text-muted-foreground hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={28} />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center text-muted-foreground fade-in-section">
          <p>© {new Date().getFullYear()} Smith Rodriguez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

