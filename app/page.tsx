import Navbar from "@/components/Navbar"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Technologies from "@/components/Technologies"
import Footer from "@/components/Footer"
import BackgroundGradient from "@/components/BackgroundGradient"
import BackgroundTexture from "@/components/BackgroundTexture"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundGradient />
      <BackgroundTexture />
      {/* Capa de textura adicional */}
      <div className="fixed inset-0 texture-overlay pointer-events-none z-[-5]"></div>
      {/* Patrón de fondo adicional */}
      <div className="fixed inset-0 pattern-dots pointer-events-none z-[-6]"></div>
      <Navbar />
      <main className="container mx-auto px-4 pt-16 relative z-10">
        <Intro />
        <Projects />
        <Technologies />
        <About />
      </main>
      <Footer />
    </div>
  )
}

