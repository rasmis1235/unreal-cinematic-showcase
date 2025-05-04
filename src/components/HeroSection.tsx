
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { typeAnimation } from '@/utils/animationUtils';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Enhanced parallax effect
      const items = containerRef.current.querySelectorAll('.parallax');
      const slowItems = containerRef.current.querySelectorAll('.parallax-slower');
      const fastItems = containerRef.current.querySelectorAll('.parallax-faster');
      
      items.forEach(item => {
        const el = item as HTMLElement;
        const offsetX = (x - 0.5) * 30;
        const offsetY = (y - 0.5) * 30;
        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      });
      
      slowItems.forEach(item => {
        const el = item as HTMLElement;
        const offsetX = (x - 0.5) * 15;
        const offsetY = (y - 0.5) * 15;
        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      });
      
      fastItems.forEach(item => {
        const el = item as HTMLElement;
        const offsetX = (x - 0.5) * 45;
        const offsetY = (y - 0.5) * 45;
        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Initialize typing animation
    setTimeout(() => {
      setIsLoaded(true);
      if (titleRef.current) {
        titleRef.current.textContent = '';
        setTimeout(() => {
          if (titleRef.current) {
            typeAnimation(titleRef.current, 'Crafting custom multiplayer worlds', 80);
          }
        }, 1000);
      }
    }, 500);
    
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-16 overflow-hidden"
      ref={containerRef}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ue-dark z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30"
          poster="/hero-placeholder.jpg"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Particle Effects Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-ue-blue animate-float-slow parallax-faster"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-ue-teal animate-float-medium parallax-faster"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-ue-blue animate-float-fast"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-ue-teal animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className={`space-y-4 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-lg md:text-xl font-mono text-ue-teal tracking-wider">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2">Rasmi Ranjan Sahoo</span>
                <span className="block bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">
                  Unreal Engine 5 Developer
                </span>
              </h1>
              
              <h2 
                ref={titleRef} 
                className="text-xl md:text-2xl text-white/80 font-mono mt-2 h-8 border-r-2 border-ue-teal pr-1"
              ></h2>
            </div>
            
            <p className={`text-lg text-muted-foreground max-w-lg transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              I specialize in creating custom multiplayer systems, gameplay features, and immersive experiences using 
              Blueprints and C++. From battle royale mechanics to adventure game progression systems, I build memorable 
              player experiences that perform beautifully.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#projects" 
                className="relative bg-gradient-to-r from-ue-blue to-ue-teal text-white px-8 py-3 rounded-md font-medium 
                           shadow-neon hover:shadow-neon-hover transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-ue-blue to-ue-teal opacity-0 group-hover:opacity-100 
                               translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="bg-transparent text-foreground px-8 py-3 rounded-md font-medium border border-ue-teal/30
                         hover:border-ue-teal transition-all duration-300 hover:bg-ue-teal/5"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Hero Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 aspect-video w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 parallax">
              <div className="absolute inset-0 bg-gradient-to-br from-ue-dark/90 via-ue-dark/70 to-transparent z-10"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
                poster="/project-placeholder.jpg"
              >
                <source src="/featured-project.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8">
                  <div className="inline-block mb-3 px-3 py-1 bg-ue-blue/20 backdrop-blur-sm border border-ue-blue/30 rounded-full text-xs text-ue-blue">
                    Featured Project
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Battle Royale Matchmaker</div>
                  <div className="text-sm text-white/70">Custom multiplayer system with friend invites</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-ue-teal/30 rounded-md z-0 parallax-slower"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-ue-blue/30 rounded-md z-0 parallax-slower"></div>
            
            {/* Tech stack floating badges */}
            <div className="absolute -right-4 top-1/3 px-3 py-2 bg-card/50 backdrop-blur-md rounded-lg border border-white/10 shadow-lg parallax-faster">
              <span className="text-xs font-mono text-ue-teal">UE5 C++</span>
            </div>
            <div className="absolute -left-4 bottom-1/4 px-3 py-2 bg-card/50 backdrop-blur-md rounded-lg border border-white/10 shadow-lg parallax-faster">
              <span className="text-xs font-mono text-ue-blue">Blueprints</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ue-teal">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
