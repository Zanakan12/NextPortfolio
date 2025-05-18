"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_1vhq5kt",
        "template_2tm625e",
        form.current,
        "H4ZaRHJdKaVp2lwIi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current?.reset(); // Reset après envoi
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <div className="bg-gradient from-black to-blue-800 text-white p-8 flex flex-col items-center mt-25">
      {/* Titre */}
      <motion.h1
        className="text-4xl md:text-3xl font-bold text-center mb-8 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {"Let's Work Together"}
      </motion.h1>

      {/* Petit texte */}
      <motion.p
        className="text-center text-lg max-w-2xl mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {"I'm open to freelance opportunities, collaborations, or just a chat!"}
      </motion.p>

      {/* Formulaire */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-200">{"Your Name"}</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 rounded-xl bg-[#1f1f2e] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-200">{"Your Email"}</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 rounded-xl bg-[#1f1f2e] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-200">{"Your Message"}</label>
          <textarea
            name="message"
            className="w-full p-3 h-32 rounded-xl bg-[#1f1f2e] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
        </div>

        {/* Bouton Envoyer */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-3 px-8 rounded-xl transition-transform hover:scale-105"
          >
            {"Send Message"}
          </button>
        </div>

        {/* Message succès */}
        {success && (
          <p className="text-green-400 text-center mt-4">
            {"Your message has been sent successfully! 🚀"}
          </p>
        )}
      </motion.form>
    </div>
  );
}
