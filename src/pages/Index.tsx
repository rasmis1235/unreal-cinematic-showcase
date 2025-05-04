
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollObserver } from '@/utils/scrollObserver';

const Index = () => {
  // Initialize scroll observer for animations
  useScrollObserver();
  
  // Update page title
  useEffect(() => {
    document.title = 'Game Developer Portfolio | Unreal Engine 5 Specialist';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
