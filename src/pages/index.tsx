import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProjectSlider from '../components/ProjectSlider';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import InstagramPhoto from '@/components/Photo';
import ServicesPage from '../components/Service';
import { RainbowButton } from "../components/ui/rainbow-button";
import SkillGalaxy from '@/components/SkillGalaxy';
import StarsBackground from '@/components/StarBackground';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const myImages = [
    { src: "/images/image.png", alt: "Photo 1" }
    //{ src: "/images/sunrise.jpg", alt: "Photo 2" },
    //{ src: "/images/eva.jpg", alt: "Photo 3" },
   //{ src: "/images/waverobot.jpg", alt: "Photo 4" },
    /*{ src: "/images/githubProfile5.jpg", alt: "Photo 5" },
    { src: "/images/githubProfile6.jpg", alt: "Photo 6" },
    { src: "/images/githubProfile7.jpg", alt: "Photo 7" },
    { src: "/images/githubProfile8.jpg", alt: "Photo 8" },*/
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-800 text-white">
      <StarsBackground />
      <div className="px-15">
        <Header />
        
        <section className=" flex justify-center text-white py-15">
          <ImageGallery images={myImages} />
          <HeroSection />
        </section>

        
        <div className="flex justify-center items-center mt-5 pb-15">
          <RainbowButton href="/about"> QUICK VISIT </RainbowButton>
        </div>
        

        <section>
          <h2 className="flex justify-center text-4xl md:text-3xl font-bold text-center mt-10 mb-8 text-white">
            LAST PROJECT
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <a href="https://graph-ql.zanakan.fr" target="_blank" rel="noopener noreferrer">
              <InstagramPhoto src="/projects/graph_ql.png" />
            </a>
            <a href="https://barber.zanakan.fr" target="_blank" rel="noopener noreferrer">
              <InstagramPhoto src="/projects/barber.png" />
            </a>
            <a href="https://real-time-forum.zanakan.fr" target="_blank" rel="noopener noreferrer">
              <InstagramPhoto src="/projects/real-time-forum.png" />
            </a>
            <a href="https://tetris.zanakan.fr" target="_blank" rel="noopener noreferrer">
              <InstagramPhoto src="/projects/tetris.png" />
            </a>
          </div>
        </section>

        
        <section id="project-slider" className="flex justify-center mt-10 rounded-md pt-15">
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </section>

        <section>
          <StarsBackground />
          <ProjectSlider activeCategory={activeCategory} />
        </section>

        <section id="skills" >
          <span className=" flex justify-center text-4xl md:text-3xl font-bold text-center mb-8 text-white">SKILLS</span>
          <SkillGalaxy />
        </section>
        
        <section id="service">
          <ServicesPage />
        </section>
        </div>
      <br />
      <Footer />
    </div>
  );
}
