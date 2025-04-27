"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaKey, FaLanguage } from "react-icons/fa";
import SkillGrid from "../components/SkillGrid";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white p-8 space-y-16">

            {/* BIO */}
            <motion.section
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {"WHY CHOOSE ME ?"}
                </motion.h1>
                <motion.p
                    className="text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {"I'm"} <span className="font-semibold text-yellow-400">{"Djihadi Raftandjani"}</span>, {"a full-stack developer apprentice with a dual background in science and tech. I'm passionate about building efficient, innovative, and scalable solutions for real-world problems."}
                </motion.p>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <a
                        href="/cv-raftandjani.pdf"
                        download
                        className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                        {"📄 Download CV"}
                    </a>
                </motion.div>
            </motion.section>

            {/* MY VALUE */}
            <motion.section
                className="bg-[#181826] rounded-xl p-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FaKey className="text-yellow-400" /> {"My Value"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-white/90">
                    <ul className="space-y-2 list-disc pl-5">
                        <li>{"Experience in creating HTTP/HTTPS servers, managing users and databases"}</li>
                        <li>{"Data modeling, UML, performance optimization and debugging"}</li>
                        <li>{"Robotics: LEGO Mindstorms, WAVE ROVER with AI integration"}</li>
                        <li>{"DevOps culture: Git, GitHub, Makefile, Agile workflow"}</li>
                    </ul>
                    <ul className="space-y-2 list-disc pl-5">
                        <li>{"Mastery of system data collection, memory/process control"}</li>
                        <li>{"Skilled in animations, game development and UI/UX"}</li>
                    </ul>
                </div>
            </motion.section>

            {/* MY TECHNICAL EXPERTISE */}
            <motion.section
                className="bg-[#161624] rounded-xl p-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FaTools className="text-yellow-400" /> {"My Technical Expertise"}
                </h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                        <p className="font-semibold text-yellow-400 mb-2">{"Languages"}</p>
                        <ul className="space-y-1">
                            <li>{"Go, C++, Python, JavaScript, HTML, CSS"}</li>
                            <li>{"Kotlin, Rust (learning)"}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-yellow-400 mb-2">{"Frameworks"}</p>
                        <ul className="space-y-1">
                            <li>{"Django, Dear ImGui, Android Studio"}</li>
                            <li>{"Qt Creator, MIT App Inventor, React, Next"}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-yellow-400 mb-2">{"Databases"}</p>
                        <ul className="space-y-1">
                            <li>{"SQLite, MobiDB, TinyDB, TinyWebDB"}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-yellow-400 mb-2">{"Tools"}</p>
                        <ul className="space-y-1">
                            <li>{"Git, Docker, UML, VS Code"}</li>
                            <li>{"Figma, REST API, WebSocket"}</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* EDUCATION & EXPERIENCE */}
            <motion.section
                className="bg-[#161624] rounded-xl p-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FaGraduationCap className="text-yellow-400" /> {"Education & Experience"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="font-semibold">{"2024–2027"}</p>
                        <p>{"Full Stack Development — Zone 01 Normandie, Rouen"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">{"2022–2024"}</p>
                        <p>{"Captain Deliverer — Just Eat, Rouen"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">{"2019–2023"}</p>
                        <p>{"Study in Biology — University of Rouen"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">{"2016–2019"}</p>
                        <p>{"Study in Computer Science — University of Pau"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">{"2015–2016"}</p>
                        <p>{"Scientific Baccalauréat (Maths) — Mayotte"}</p>
                    </div>
                </div>
            </motion.section>

            {/* SKILLS GRID */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <SkillGrid />
            </motion.div>

            {/* LANGUAGES & PERSONAL INFO */}
            <motion.section
                className="bg-[#161624] rounded-xl p-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FaLanguage className="text-yellow-400" /> {"Languages & Personal Info"}
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                        <p><span className="font-semibold">{"Languages:"}</span> {"Shibushi (native), French (native), English (C1)"}</p>
                        <p className="mt-2"><span className="font-semibold">{"Location:"}</span> {"Rouen, France"}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">{"Driving License:"}</span> {"Permis B"}</p>
                        <p className="mt-2"><span className="font-semibold">{"Contact:"}</span> {"zanakan12maniac@proton.me"}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">{"Interests:"}</span> {"Handball, Workout, Finance, Poetry"}</p>
                    </div>
                </div>
            </motion.section>

        </main>
    );
}
