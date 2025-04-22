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
        category: "WEB APP / DJANGO",
        github: "https://github.com/Zanakan12/netfix",
        site: "",
    },
    {
        image: "real-time-forum.png",
        title: "Real-Time Forum Team",
        category: "WEB APP / GO",
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
        category: "WEB APP / GO",
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


export default function ProjectSlider() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="overflow-hidden w-full bg-black py-10">
            <motion.div
                className="flex gap-6 w-max"
                animate={!isPaused ? { x: ["100%", "-100%"] } : false}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                }}
            >
                {[...projects, ...projects].map((project, index) => (
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
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

