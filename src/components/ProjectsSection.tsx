
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Open World RPG Environment",
    description: "A vast open world environment with dynamic weather, day-night cycle, and procedurally generated terrain features built in Unreal Engine 5.",
    tags: ["Landscapes", "Blueprints", "Lighting"],
    image: "/placeholder.svg",
    featured: true
  },
  {
    id: 2,
    title: "Multiplayer FPS Framework",
    description: "A robust multiplayer framework with server reconciliation, client-side prediction, and lag compensation mechanisms for fast-paced gameplay.",
    tags: ["C++", "Multiplayer", "Networking"],
    image: "/placeholder.svg",
    featured: true
  },
  {
    id: 3,
    title: "Interactive VR Experience",
    description: "An immersive VR experience with physics-based interactions, haptic feedback, and photorealistic environments using Lumen global illumination.",
    tags: ["VR", "Physics", "Lumen"],
    image: "/placeholder.svg",
    featured: false
  },
  {
    id: 4,
    title: "Procedural Animation System",
    description: "A sophisticated animation system that blends procedural and keyframed animations for realistic character movement in varying terrain.",
    tags: ["Animation", "C++", "IK"],
    image: "/placeholder.svg",
    featured: false
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-lg overflow-hidden bg-card border border-border transition-transform hover:scale-[1.02] duration-300",
        className
      )}
    >
      {/* Project Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ue-darkest via-transparent to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Play Button Overlay (for projects with videos) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="w-16 h-16 rounded-full bg-ue-blue/80 flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="pt-3">
          <Button 
            className="w-full bg-gradient-to-r from-ue-blue to-ue-teal hover:from-ue-blue hover:to-ue-blue text-white"
            variant="default"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
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

  const filteredProjects = activeTab === "featured" 
    ? projects.filter(p => p.featured) 
    : projects;

  return (
    <section 
      id="projects" 
      className="py-20 relative section-fade"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore my portfolio of Unreal Engine 5 projects showcasing advanced rendering, 
            gameplay systems, and technical proficiency.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-ue-blue data-[state=active]:to-ue-teal data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="featured" 
                onClick={() => setActiveTab("featured")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-ue-blue data-[state=active]:to-ue-teal data-[state=active]:text-white"
              >
                Featured
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
