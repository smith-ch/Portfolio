"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", { name, email, message })
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded"
        >
          Enviar Mensaje
        </motion.button>
      </form>
    </motion.section>
  )
}

