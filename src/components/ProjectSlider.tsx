"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  
    const filteredProjects = activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));
  
    return (
      <div className="overflow-hidden w-full bg-black py-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-white text-xl py-20">
            Aucun projet disponible pour cette catégorie.
          </div>
        ) : (
          <motion.div
            className="flex gap-6 w-max"
            animate={!isPaused ? { x: ["100%", "-100%"] } : false}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }}
          >
            {[...filteredProjects, ...filteredProjects].map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
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