
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeToggle from '@/components/ThemeToggle';
import { useScrollObserver } from '@/utils/scrollObserver';
import { initParallax } from '@/utils/animationUtils';

const Index = () => {
  // Initialize scroll observer for animations
  useScrollObserver();
  
  useEffect(() => {
    // Update page title
    document.title = 'Rasmi Ranjan Sahoo | Unreal Engine 5 Developer';
    
    // Initialize parallax effect
    initParallax();
    
    // Preload sound effects
    new Audio('/switch-start.mp3');
    new Audio('/switch-end.mp3');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  );
};

export default Index;
