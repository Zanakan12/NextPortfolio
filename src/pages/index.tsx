import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProjectGrid from '../components/ProjectGrid';
import ProjectSlider from '../components/ProjectSlider';
import Footer from '../components/Footer';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-yellow-400 text-white">
      <Header />
      <HeroSection />
      <div className="w-full flex justify-center py-6">
        <button className="border border-white px-6 py-3 rounded-full text-sm text-white hover:bg-white hover:text-black transition duration-300 shadow-md">
          START A PROJECT?
        </button>
      </div>
      <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
      <ProjectGrid activeCategory={activeCategory} />
      <ProjectSlider />
      <br />
      <Footer />
    </div>
  );
}
