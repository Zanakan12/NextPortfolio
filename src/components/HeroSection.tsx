export default function HeroSection() {
  return (
    <section className="relative px-6 py-16">
      {/* Titre + description */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-extrabold mb-4">ABOUTE ME</h2>
        <div className="text-md leading-relaxed flex-col gap-4 flex">
         <p> {"I’m Djihadi Raftandjani, a full-stack developer apprentice with a passion for learning and solving complex challenges. I combine a strong scientific background with technical creativity, adaptability, and a solid foundation in modern web and system development."}</p>
         <p>{"My expertise spans Go, C++, Python, and Django, with hands-on experience in UI development, system monitoring tools, and intelligent robotics. I’m currently training at Zone01 Normandie, an intensive full-time coding school focused on autonomous and peer-to-peer learning."}</p>
         <p> {"I’m curious, rigorous, and a strong team player. Whether it's building a web app, optimizing code performance, or integrating AI into robotics, I’m always ready to bring my energy and ideas to the table."}</p>
        </div>
      </div>

      {/* Bouton circulaire "PLAY SHOWREEL" */}
      <div className="absolute right-2 top-12 transform -translate-y-1/2">
        <div className="w-28 h-28 rounded-full border-4 border-white flex items-center justify-center text-center text-sm rotate-[-15deg] hover:scale-105 transition-all cursor-pointer shadow-lg">
          <div className="text-white font-bold">
            ▶<br />{"PLAY"}<br />{"SHOWREEL"}
          </div>
        </div>
      </div>
    </section>
  );
}
