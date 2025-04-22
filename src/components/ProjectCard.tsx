import { useState } from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    image: string;
    title: string;
    github: string;
    site: string;
}

export default function ProjectCard({ image, title, github, site }: ProjectCardProps) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="relative group bg-zinc-900 rounded-3xl overflow-hidden text-white w-full max-w-sm h-96 border border-white/10 shadow-md 
        transition-transform duration-700 hover:rotate-[360deg] flex flex-col justify-between">

            {/* Image + badge */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={`/projects/${image}`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {site ? (
                    <span className="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        LIVE
                    </span>
                ) : (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        SOON
                    </span>
                )}
            </div>

            {/* Titre + actions */}
            <div className="p-4 flex justify-between items-center h-32">
                <h3 className="font-bold text-base">{title}</h3>
                <div className="flex gap-3 relative">
                    {/* GitHub */}
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
                        title="GitHub"
                    >
                        <FaGithub className="text-sm" />
                    </a>

                    {/* Site + preview */}
                    <div
                        onMouseEnter={() => site && setShowPreview(true)}
                        onMouseLeave={() => setShowPreview(false)}
                        className="relative"
                    >
                        <a
                            href={site || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${site
                                    ? "border-white hover:bg-yellow-400 hover:text-black cursor-pointer"
                                    : "border-gray-500 text-gray-500 cursor-not-allowed"
                                }`}
                            title={site ? "Visit Site" : "Not Available"}
                        >
                            <span className="text-sm">↘</span>
                        </a>

                        {showPreview && site && (
                            <div className="absolute bottom-10 right-0 z-50 w-[320px] h-[180px] border border-white/20 shadow-xl rounded-lg overflow-hidden">
                                <iframe
                                    src={site}
                                    title="preview"
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
