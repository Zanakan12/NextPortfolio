import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProjectSlider from '../components/ProjectSlider';
import Footer from '../components/Footer';
import { RainbowButton } from '@/components/ui/rainbow-button';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const myImages = [
    { src: "/images/githubProfile.jpg", alt: "Photo 1" },
    { src: "/images/sunrise.jpg", alt: "Photo 2" },
    { src: "/images/eva.jpg", alt: "Photo 3" },
   { src: "/images/waverobot.jpg", alt: "Photo 4" },
    /*{ src: "/images/githubProfile5.jpg", alt: "Photo 5" },
    { src: "/images/githubProfile6.jpg", alt: "Photo 6" },
    { src: "/images/githubProfile7.jpg", alt: "Photo 7" },
    { src: "/images/githubProfile8.jpg", alt: "Photo 8" },*/
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-600 text-white">
      <Header />

      <HeroSection />
      <div className=" text-white absolute right-45 top-65 ">
        <ImageGallery images={myImages} />
      </div>
      <div className="flex justify-center mt-10">
        <RainbowButton href="/about">HOW I CAN CONTRIBUTE TO YOUR SUCESS ? </RainbowButton>
      </div>

      <div className="flex justify-center mt-10 rounded-md">
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <ProjectSlider activeCategory={activeCategory} />

      <br />
      <Footer />
    </div>
  );
}
