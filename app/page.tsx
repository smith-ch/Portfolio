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
        <div className="min-h-screen text-foreground">
            {/* Fondo base */}
            <div className="fixed inset-0 bg-background z-[-30]"></div>

            {/* Capas de fondo en orden */}
            <BackgroundGradient />
            <div className="fixed inset-0 bg-noise opacity-[0.15] z-[-25]"></div>
            <div className="fixed inset-0 texture-overlay pointer-events-none z-[-20]"></div>
            <div className="fixed inset-0 pattern-dots pointer-events-none z-[-15]"></div>
            <BackgroundTexture />

            {/* Contenido principal */}
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

