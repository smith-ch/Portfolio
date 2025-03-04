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
        <div className="fixed inset-0 z-[-28] overflow-hidden">
            {/* Gradientes flotantes con menor opacidad */}
            <motion.div
                className="floating-gradient w-[600px] h-[600px] left-[-100px] top-[10%]"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(30, 30, 46, 0) 70%)",
                    transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)`,
                }}
            />

            <motion.div
                className="floating-gradient w-[500px] h-[500px] right-[-100px] top-[30%]"
                style={{
                    background: "radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, rgba(30, 30, 46, 0) 70%)",
                    transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.01}px)`,
                    animationDelay: "5s",
                }}
            />

            <motion.div
                className="floating-gradient w-[700px] h-[700px] left-[20%] bottom-[-200px]"
                style={{
                    background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(30, 30, 46, 0) 70%)",
                    transform: `translate(${scrollY * -0.01}px, ${scrollY * -0.03}px)`,
                    animationDelay: "2s",
                }}
            />
        </div>
    )
}

