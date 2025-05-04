
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          sectionRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-ue-darker relative section-fade"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(3,218,198,0.07)_0%,_transparent_50%)] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Main image with border */}
              <div className="absolute inset-4 border-2 border-ue-teal rounded-lg"></div>
              
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-ue-dark to-ue-darker flex items-center justify-center">
                  <span className="text-muted-foreground">Profile Image</span>
                </div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-gradient-to-br from-ue-blue to-ue-teal p-0.5">
                <div className="w-full h-full rounded-[7px] bg-ue-darker flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-ue-teal font-mono mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Passionate Game Developer with a Vision</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a dedicated game developer with 5+ years of experience specializing in Unreal Engine 
                development. My journey in game development began with a fascination for creating immersive 
                worlds and has evolved into a professional career building high-performance game systems.
              </p>
              <p>
                My expertise spans both the technical and artistic aspects of game development, from 
                optimizing rendering pipelines to designing intuitive gameplay mechanics. I'm particularly 
                passionate about real-time rendering techniques that push the boundaries of visual fidelity 
                while maintaining performance.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                or participating in game jams to sharpen my rapid prototyping skills.
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-6">
              <div>
                <div className="text-3xl font-bold text-ue-blue">15+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ue-teal">10+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground">AAA Game Credits</div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-ue-teal hover:text-ue-blue transition-colors"
                download
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
