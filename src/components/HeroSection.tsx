import { useState } from "react";

export default function HeroSection() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <section className="relative px-6 py-16 rounded">
      {/* Titre + description */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-extrabold mb-4">{"ABOUT ME"}</h2>
        <div className="text-md leading-relaxed flex-col gap-4 flex">
          <p>
            {"I’m Djihadi Raftandjani, a full-stack developer apprentice with a passion for learning and solving complex challenges. I combine a strong scientific background with technical creativity, adaptability, and a solid foundation in modern web and system development."}
          </p>
          <p>
            {"My expertise spans Go, C++, Python, and Django, with hands-on experience in UI development, system monitoring tools, and intelligent robotics. I’m currently training at Zone01 Normandie, an intensive full-time coding school focused on autonomous and peer-to-peer learning."}
          </p>
          <p>
            {"I’m curious, rigorous, and a strong team player. Whether it's building a web app, optimizing code performance, or integrating AI into robotics, I’m always ready to bring my energy and ideas to the table."}
          </p>
        </div>
      </div>

      {/* Bouton circulaire "PLAY SHOWREEL" */}
      {/* <div
        className="absolute right-2 top-12 transform -translate-y-1/2"
        onClick={handleOpen}
      >
        <div className="w-28 h-28 rounded-full border-4 border-white flex items-center justify-center text-center text-sm rotate-[-15deg] hover:scale-105 transition-all cursor-pointer shadow-lg">
          <div className="text-white font-bold">
            {"▶"}
            <br />
            {"PLAY"}
            <br />
            {"SHOWREEL"}
          </div>
        </div>
      </div> */}

      {/* Popup Modale pour la vidéo */}
      {/* {openModal && (
        <div className="fixed inset-0 bg-opacity-70 z-50" onClick={handleClose}>
          <div
            className="absolute top-88 right-1 bg-transparent rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:scale-125 transition-all z-50"
              onClick={handleClose}
            >
              ✖
            </button>

            <video
              src="/videos/showreel.mp4"
              controls
              style={{ width: "810px", height: "400px", objectFit: "cover" }}
              className="rounded-md shadow-lg"
            />
          </div>
        </div> */}
    </section>
  );
}
