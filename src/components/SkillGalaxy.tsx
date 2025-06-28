"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useMemo } from "react";
import Image from "next/image";
import StarsBackground from "./StarBackground";
import { AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

const skills = [
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
                    { name: "Rust", icon: "https://www.rust-lang.org/logos/rust-logo-512x512.png" },
                    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                    { name: "Dear ImGui", icon: "https://raw.githubusercontent.com/wiki/sammyfreg/netImgui/Web/img/DearImGui.png" },
                    { name: "Android Studio", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
                    { name: "Qt Creator", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" },
                    { name: "MIT App Inventor", icon: "https://appinventor.mit.edu/images/logo.png" },
                    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                
                  ];
      
function SkillSphere() {
  const positions = useMemo(() => {
    const radius = 6;
    const skillCount = skills.length;
    const result: { position: [number, number, number]; skill: (typeof skills)[0] }[] = [];

    for (let i = 0; i < skillCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / skillCount);
      const theta = Math.sqrt(skillCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      result.push({ position: [x, y, z], skill: skills[i] });
    }

    return result;
  }, []);

  return (
    <>
      {positions.map((item, i) => (
        <mesh key={i} position={item.position}>
          <sphereGeometry args={[0, 100, 100]} />
          <meshStandardMaterial color="blue" />
          <Html
            center
            transform
            distanceFactor={1.5}
            style={{ pointerEvents: "none" }}
          >
            <Image
              src={item.skill.icon}
              alt={item.skill.name}
              title={item.skill.name}
              width={200}
              height={200}
              className="object-contain border rounded-full "
            />
          </Html>
        </mesh>
      ))}
    </>
  );
}

export default function SkillGalaxy() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[700px]" id="skill-section">
      {/* Flèche vers le haut */}
      <div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 text-white md:hidden"
        onClick={() => scrollTo("project-slider")}
      >
        <AiFillCaretUp size={50} />
      </div>

      <StarsBackground />
      <Canvas
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 12], fov: 60 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <SkillSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Flèche vers le bas */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 text-white md:hidden"
        onClick={() => scrollTo("service")}
      >
        <AiFillCaretDown size={50} />
      </div>
    </div>
  );
}
