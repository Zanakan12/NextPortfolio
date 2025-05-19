"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import ProjectCard from "./ProjectCard";
import StarsBackground from "./StarBackground";



const projects = [
  {
    image: "system-monitor.png",
    title: "System Monitor",
    category: "DESKTOP APP / C++",
    github: "https://github.com/Zanakan12/system-monitor",
    site: "",
    cardState: false,
  },
  {
    image: "barber.png",
    title: "Barber Website",
    category: "WEBSITE / TYPESCRIPT",
    github: "https://github.com/Zanakan12/barber-website",
    site: "https://barber.zanakan.fr/",
    cardState: true,
  },
  {
    image: "netfix.png",
    title: "Netfix",
    category: "WEBSITE / DJANGO",
    github: "https://github.com/Zanakan12/netfix",
    site: "",
    cardState: false,
  },
  {
    image: "real-time-forum.png",
    title: "Real-Time Forum Team",
    category: "WEBSITE / GO",
    github: "https://github.com/Zanakan12/real-time-forum-team",
    site: "https://real-time-forum.zanakan.fr",
    cardState: false,
  },
  {
    image: "tetris.png",
    title: "Tetris Game",
    category: "GAME / JAVASCRIPT",
    github: "https://github.com/Zanakan12/tetris-game",
    site: "https://tetris.zanakan.fr",
    cardState: false,
  },
  {
    image: "zk12ebike.png",
    title: "ZK12BIKE",
    category: "WEBSITE / GO / E-COMMERCE",
    github: "https://github.com/Zanakan12/ZK12BIKE",
    site: "https://zk12ebike.zanakan.fr",
    cardState: false,
  },
  {
    image: "sortable.png",
    title: "Sortable",
    category: "UI / JAVASCRIPT",
    github: "https://github.com/Zanakan12/sortable",
    site: "https://sortable.zanakan.fr",
    cardState: false,
  },
  {
    image: "default.png",
    title: "pdfInvoiceUi",
    category: "DESKTOP APP / C++",
    github: "https://github.com/Zanakan12/pdfInvoiceUi",
    site: "",
    cardState: true,
  },
  {
    image: "graph_ql.png",
    title: "graphQL",
    category: "API / TYPESCRIPT",
    github: "https://github.com/Zanakan12/graphQL",
    site: "https://graph-ql.zanakan.fr/",
    cardState: false,
  },
  {
    image: "default.png",
    title: "autonomeCar",
    category: "AI / PYTHON",
    github: "https://github.com/Zanakan12/autonomeCar",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "numpy",
    category: "DATA / PYTHON",
    github: "https://github.com/Zanakan12/numpy",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "Guess-it",
    category: "GAME / GO",
    github: "https://github.com/Zanakan12/Guess-it",
    site: "",
    cardState: false,
  },

  {
    image: "default.png",
    title: "fakeSms",
    category: "MOBILE APP / JAVA",
    github: "https://github.com/Zanakan12/fakeSms",
    site: "",
    cardState: true,
  },
  {
    image: "default.png",
    title: "PwdSecure",
    category: "DESKTOP APP",
    github: "https://github.com/Zanakan12/PwdSecure",
    site:"",
    cardState: false,
  },
  {
    image: "default.png",
    title: "crossword",
    category: "GAME / JAVASCRIPT",
    github: "https://github.com/Zanakan12/crossword",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "piscine-js",
    category: "TRAINING / JAVASCRIPT",
    github: "https://github.com/Zanakan12/piscine-js",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "ascii-art-color",
    category: "TOOL / GO",
    github: "https://github.com/Zanakan12/ascii-art-color",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "tetris-optimizer",
    category: "TOOL / GO",
    github: "https://github.com/Zanakan12/tetris-optimizer",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "net-cat",
    category: "NETWORK / GO",
    github: "https://github.com/Zanakan12/net-cat",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "atm-management-system",
    category: "DESKTOP APP / C",
    github: "https://github.com/Zanakan12/atm-management-system",
    site: "",
    cardState: false,
  },
  {
    image: "default.png",
    title: "forum",
    category: "WEBSITE / GO",
    github: "https://github.com/Zanakan12/forum",
    site: "",
    cardState: false,
  }
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

  const displayedProjects = [...filteredProjects]; // On double toujours

  const CARD_WIDTH = 350;
  const GAP = 24;
  const totalWidth = displayedProjects.length * (CARD_WIDTH + GAP);

  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const startScrolling = (direction: "left" | "right") => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      x.set(x.get() + (direction === "left" ? CARD_WIDTH + GAP : -CARD_WIDTH - GAP) * 0.05);
    }, 16); // ~60fps
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    const clearOnRelease = () => stopScrolling();
    window.addEventListener("mouseup", clearOnRelease);
    window.addEventListener("touchend", clearOnRelease);
    return () => {
      window.removeEventListener("mouseup", clearOnRelease);
      window.removeEventListener("touchend", clearOnRelease);
    };
  }, []);

  useEffect(() => {
    x.set(-totalWidth / 4 + window.innerWidth / 2 - CARD_WIDTH / 2);
  }, [totalWidth, x]);
  

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      x.set(x.get() - delta * 0.05);

      // ➔ Correction PRO ici
      const position = x.get();
      if (position <= -totalWidth / 2) {
        x.set(0); // recale proprement au milieu
      }
    }
  });

  return (
    <div className="relative overflow-hidden w-full py-10 rounded-2xl border bg-black mb-25">
      <StarsBackground />
  
      {/* CONTENU SLIDER */}
      <div className="relative z-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-white text-xl py-20">
            No projects available for this category.
          </div>
        ) : (
          <>
            <motion.div
              className="flex gap-6 w-max"
              style={{ x }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {displayedProjects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-[350px]">
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    github={project.github}
                    site={project.site}
                    badge={project.site ? "LIVE" : "SOON"}
                    cardState={project.cardState}
                  />
                </div>
              ))}
            </motion.div>
  
            {/* BOUTONS EN DESSOUS */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                onMouseDown={() => startScrolling("left")}
                onMouseUp={stopScrolling}
                onMouseLeave={stopScrolling}
                onTouchStart={() => startScrolling("left")}
                onTouchEnd={stopScrolling}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur"
              >
                ←
              </button>

              <button
                onMouseDown={() => startScrolling("right")}
                onMouseUp={stopScrolling}
                onMouseLeave={stopScrolling}
                onTouchStart={() => startScrolling("right")}
                onTouchEnd={stopScrolling}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur"
              >
                →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
  
}
