"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import ProjectCard from "./ProjectCard";



const projects = [
  {
    image: "system-monitor.png",
    title: "System Monitor",
    category: "DESKTOP APP / C++",
    github: "https://github.com/Zanakan12/system-monitor",
    site: "",
  },
  {
    image: "netfix.png",
    title: "Netfix",
    category: "WEBSITE/ DJANGO",
    github: "https://github.com/Zanakan12/netfix",
    site: "",
  },
  {
    image: "real-time-forum.png",
    title: "Real-Time Forum Team",
    category: "WEBSITE / GO",
    github: "https://github.com/Zanakan12/real-time-forum-team",
    site: "",
  },
  {
    image: "tetris.png",
    title: "Tetris Game",
    category: "GAME / JAVASCRIPT",
    github: "https://github.com/Zanakan12/tetris-game",
    site: "https://tetris.zanakan.fr",
  },
  {
    image: "zk12ebike.png",
    title: "ZK12BIKE",
    category: "WEBSITE / GO / E-COMMERCE",
    github: "https://github.com/Zanakan12/ZK12BIKE",
    site: "",
  },
  {
    image: "sortable.png",
    title: "Sortable",
    category: "UI / JAVASCRIPT",
    github: "https://github.com/Zanakan12/sortable",
    site: "https://sortable.zanakan.fr",
  },
];

interface ProjectSliderProps {
  activeCategory: string;
}

export default function ProjectSlider({ activeCategory }: ProjectSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  const displayedProjects = [...filteredProjects, ...filteredProjects]; // ➔ Double pour la boucle

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      x.set(x.get() - delta * 0.05); // 0.05 = vitesse du slider
    }
  });

  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      const totalWidth = filteredProjects.length * 350; // 350 = largeur estimée d'une carte (ajuste selon ta card)
      if (latest <= -totalWidth) {
        x.set(0); // ➔ Reviens au début sans secousse
      }
    });
    return () => unsubscribe();
  }, [x, filteredProjects.length]);

  return (
    <div className="overflow-hidden w-full bg-black py-10">
      {filteredProjects.length === 0 ? (
        <div className="text-center text-white text-xl py-20">
          No projects available for this category.
        </div>
      ) : (
        <motion.div
          className="flex gap-6 w-max"
          style={{ x }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {displayedProjects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-[300px]"> {/* width fixée pour bien calculer */}
              <ProjectCard
                image={project.image}
                title={project.title}
                github={project.github}
                site={project.site}
                badge={project.site ? "LIVE" : "SOON"}
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}