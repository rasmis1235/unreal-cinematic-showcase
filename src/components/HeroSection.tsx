
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Subtle parallax effect
      const items = containerRef.current.querySelectorAll('.parallax');
      const slowItems = containerRef.current.querySelectorAll('.parallax-slower');
      
      items.forEach(item => {
        const el = item as HTMLElement;
        const offsetX = (x - 0.5) * 20;
        const offsetY = (y - 0.5) * 20;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
      
      slowItems.forEach(item => {
        const el = item as HTMLElement;
        const offsetX = (x - 0.5) * 10;
        const offsetY = (y - 0.5) * 10;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-16 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-ue-blue opacity-5 blur-3xl parallax-slower"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-ue-teal opacity-5 blur-3xl parallax-slower"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-ue-teal font-mono">
                Hello, I'm a
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Game Developer</span>
                <span className="block mt-2 bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">
                  Specializing in Unreal Engine 5
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I create immersive, visually stunning game experiences with a focus on 
              performance, multiplayer systems, and engaging gameplay. From Blueprint systems 
              to C++ optimization, I bring game worlds to life.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-ue-blue to-ue-teal text-white px-8 py-3 rounded-md font-medium shadow-lg shadow-ue-blue/20 hover:shadow-ue-blue/30 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="bg-muted text-foreground px-8 py-3 rounded-md font-medium border border-border hover:bg-muted/70 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-video rounded-lg overflow-hidden shadow-2xl border border-border parallax">
              {/* This would be replaced with your actual hero image or video */}
              <div className="absolute inset-0 bg-gradient-to-br from-ue-dark/90 via-ue-dark/50 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-ue-darker flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-muted-foreground">Featured Project Preview</div>
                  <div className="text-xl font-bold text-ue-teal">Unreal Engine Showcase</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-ue-teal rounded-md z-0 parallax-slower"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-ue-blue rounded-md z-0 parallax-slower"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
