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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const myImages = [
    { src: "/images/githubProfile.jpg", alt: "Photo 1" }
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
      <div className="px-15">
        <Header />
        <HeroSection />
        <div className="flex justify-center items-center mt-10 p-15">
          <RainbowButton href="/about">HOW I CAN CONTRIBUTE TO YOUR SUCESS ? </RainbowButton>
        </div>
        <section className=" text-white absolute right-45 top-17 ">
          <ImageGallery images={myImages} />
        </section>
        <section>
          <h2 className="flex justify-center text-2xl font-bold mb-6 text-white pt-15 ">LAST PROJECT</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <InstagramPhoto src="/projects/graph_ql.png" />
              <InstagramPhoto src="/projects/barber.png" />
              <InstagramPhoto src="/projects/real-time-forum.png" />
              <InstagramPhoto src="/projects/tetris.png" />
          </div>
        </section>
        
        <section className="flex justify-center mt-10 rounded-md pt-15">
          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </section>
        <section>
          <ProjectSlider activeCategory={activeCategory} />
        </section>
        <section>
          <ServicesPage />
        </section>
        </div>
      <br />
      <Footer />
    </div>
  );
}
