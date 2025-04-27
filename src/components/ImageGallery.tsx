"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col items-center justify-center pt-10">
      <div className="relative w-70 h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-400">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
