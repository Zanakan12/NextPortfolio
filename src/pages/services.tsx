"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Modern and fast websites, SaaS platforms, and e-commerce solutions.",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description: "Android apps optimized for smartphones and tablets.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces and experiences.",
    icon: "🎨",
  },
  {
    title: "Automation / AI",
    description: "Task automation, smart bots, and AI integration using Python and Go.",
    icon: "🤖",
  },
  {
    title: "Desktop Applications",
    description: "Powerful desktop apps for PC and Mac with C++/Qt.",
    icon: "💻",
  },
  {
    title: "Custom Projects",
    description: "Tailored solutions to match your ideas and project requirements.",
    icon: "✨",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h1>

      <motion.p
        className="text-center text-lg max-w-2xl mx-auto mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Here's how I can help you: I build solid, modern, and high-performance solutions.
      </motion.p>

      {/* Grille des services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1f1f2e] rounded-2xl p-6 shadow-md transition-transform hover:scale-105 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Effet gradient lumineux */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl" />
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bouton "Contact Me" */}
      <div className="flex justify-center mt-16">
        <Link href="/contact" passHref>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl transition-transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me 🚀
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
