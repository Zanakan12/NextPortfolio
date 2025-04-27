import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProjectSlider from '../components/ProjectSlider';
import Footer from '../components/Footer';
import { RainbowButton } from '@/components/ui/rainbow-button';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-600 text-white">
      <Header />

      <HeroSection />
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
