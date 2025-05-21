import Link from 'next/link'
import { motion } from 'framer-motion'


export default function ContactMe() {
  return (
    <div className="flex justify-center mt-16">
      {/* Bouton "Contact Me" */}
      <Link href="/contact">
        <motion.button
          className="bg-blue-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl transition-transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {"Contact Me"} 🚀
        </motion.button>
      </Link>
    </div>
  )
}

