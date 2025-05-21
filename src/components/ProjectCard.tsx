import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  github: string;
  site: string;
  badge: "LIVE" | "SOON";
  cardState?: boolean;
}

export default function ProjectCard({ image, title, github, site, badge, cardState }: ProjectCardProps) {
  const badgeColor = badge === "LIVE" ? "bg-green-500" : "bg-blue-400";
  const badgeTextColor = badge === "LIVE" ? "text-white" : "text-black";

  const state = cardState ? "PRIVATE" : "PUBLIC";
  const stateBadgeColor = cardState ? "bg-red-500" : "bg-green-500";
  const stateBadgeTextColor = "text-white";

  return (
    <div className="relative group bg-zinc-900 rounded-3xl overflow-hidden text-white w-64 h-80 border border-white/10 shadow-md hover:scale-105 transition-transform">
      
      {/* Badge LIVE / SOON à gauche */}
      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${badgeColor} ${badgeTextColor}`}>
        {badge}
      </div>

      {/* Badge PUBLIC / PRIVATE à droite */}
      <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${stateBadgeColor} ${stateBadgeTextColor}`}>
        {state}
      </div>

      {/* Image */}
      <Image
        src={`/projects/${image}`}
        alt={title}
        width={300}
        height={102}
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
              className="text-white hover:text-blue-400 transition text-2xl"
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
              className="text-white hover:text-blue-400 transition text-2xl"
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
