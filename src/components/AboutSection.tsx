
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(3,218,198,0.1)_0%,_transparent_50%)] opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Stylized border */}
              <div className="absolute inset-4 border-2 border-ue-teal/50 rounded-lg"></div>
              
              {/* Main image with glow effect */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-ue-blue/20 to-ue-teal/20 mix-blend-overlay z-10"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Rasmi Ranjan Sahoo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 p-3 rounded-lg bg-gradient-to-br from-ue-blue to-ue-teal shadow-neon">
                <div className="w-full h-full rounded bg-card flex items-center justify-center p-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-xs text-muted-foreground">Years UE Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-ue-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <span className="text-sm">UE5 Certified Developer</span>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-3 -translate-y-1/2 p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-ue-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm">Dhenkanal, Odisha</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-ue-teal font-mono mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Creative Unreal Engine Developer</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Rasmi Ranjan Sahoo, an Unreal Engine 5 developer from Dhenkanal, Odisha. With over 3 years of hands-on 
                experience, I specialize in building robust multiplayer systems and gameplay frameworks using both Blueprints 
                and C++. I love playing and making games, and nothing excites me more than pushing the boundaries of what 
                real-time experiences can deliver.
              </p>
              <p>
                Currently working as Lead Game Developer at GauravGo Games Technologies, I'm known for developing a custom matchmaking system capable 
                of scaling to massive user loads, and implementing friend systems from scratch for Battle Royale, Adventure, and F2P multiplayer experiences.
              </p>
              <blockquote className="border-l-4 border-ue-teal pl-4 py-2 italic mt-6">
                "I build worlds I'd want to play in — scalable, beautiful, and multiplayer-ready."
              </blockquote>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-6">
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold text-ue-blue">15+</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold text-ue-teal">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass p-4 rounded-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground">Multiplayer Systems</div>
              </div>
            </div>
            
            <div className="pt-4 flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/rasmis1235/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-ue-teal hover:text-ue-blue transition-colors"
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
