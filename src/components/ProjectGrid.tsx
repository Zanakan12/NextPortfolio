import { link } from "fs";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    activeCategory: string;
}


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




export default function ProjectGrid({ activeCategory }: Props) {
    const filtered = activeCategory === "ALL"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="bg-black px-6 py-12">
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
            >
                <AnimatePresence mode="wait">
                    {filtered.map((p, i) => (
                        <motion.div
                            key={p.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProjectCard image={p.image}
                                title={p.title}
                                github={p.github}
                                site={p.site} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
