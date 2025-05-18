"use client";

import { useEffect, useRef, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState(() => [] as React.ReactNode[]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starCount = 100;
    const starElements = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;

      starElements.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}%`,
            left: `${x}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }

    setStars(starElements);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="starfield">
      {stars}
    </div>
  );
}
