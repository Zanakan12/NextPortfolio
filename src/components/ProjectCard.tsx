import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  github: string;
  site: string;
  badge: "LIVE" | "SOON";
}

export default function ProjectCard({ image, title, github, site, badge }: ProjectCardProps) {
  const badgeColor = badge === "LIVE" ? "bg-green-500" : "bg-yellow-400";
  const badgeTextColor = badge === "LIVE" ? "text-white" : "text-black";

  return (
    <div className="relative group bg-zinc-900 rounded-3xl overflow-hidden text-white w-64 h-80 border border-white/10 shadow-md hover:scale-105 transition-transform">
      {/* Badge en haut à gauche */}
      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${badgeColor} ${badgeTextColor}`}>
        {badge}
      </div>

      {/* Image */}
      <img
        src={`/projects/${image}`}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Contenu */}
      <div className="p-4 flex flex-col justify-between h-32">
        <h3 className="font-bold text-lg text-center">{title}</h3>

        {/* Liens GitHub et Site */}
        <div className="flex justify-center gap-6 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition text-2xl"
              title="View on GitHub"
            >
              <FaGithub />
            </a>
          )}
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition text-2xl"
              title="Visit Site"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
