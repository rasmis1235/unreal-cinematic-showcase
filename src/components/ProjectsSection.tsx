
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Enhanced project data
const projects = [
  {
    id: 1,
    title: "Battle Royale Matchmaker",
    description: "A comprehensive multiplayer matchmaking system with friend invites, party management, and regional server selection. Built as a plugin for Unreal Engine 5.",
    longDescription: "This project implements a complete matchmaking solution for battle royale games. It handles player queuing, skill-based matchmaking, friend invites and party systems. The system is built as a modular plugin that can be integrated into any UE5 project.",
    tags: ["Multiplayer", "Blueprints", "C++"],
    tools: ["Unreal Engine 5", "C++", "Blueprint"],
    type: "Solo",
    image: "/project1.jpg",
    featured: true,
    videoUrl: "/project1-video.mp4"
  },
  {
    id: 2,
    title: "RPG Dialogue & Quest System",
    description: "A branching dialogue and quest tracking system with conditional responses, reputation tracking, and dynamic quest generation.",
    longDescription: "A complete quest system for RPGs that manages dialogue trees, NPC interactions, and quest progression. The system tracks player choices and adjusts dialogue options based on character reputation, previous interactions, and quest status.",
    tags: ["Gameplay", "Systems", "UI"],
    tools: ["Unreal Engine 5", "Blueprint", "Behavior Trees"],
    type: "Team",
    image: "/project2.jpg",
    featured: true,
    videoUrl: "/project2-video.mp4"
  },
  {
    id: 3,
    title: "Procedural Cave Generator",
    description: "A procedural cave generation system using cellular automata, with runtime mesh generation and optimized LOD management.",
    longDescription: "This tool generates realistic cave environments that can be configured through an intuitive editor interface. It produces runtime meshes with optimized collision, proper UV mapping for texturing, and LOD systems for performance.",
    tags: ["Procedural", "Tools", "Optimization"],
    tools: ["Unreal Engine 5", "C++", "Runtime Mesh Component"],
    type: "Solo",
    image: "/project3.jpg",
    featured: false,
    videoUrl: "/project3-video.mp4"
  },
  {
    id: 4,
    title: "Dynamic Combat System",
    description: "A flexible combat framework supporting melee, ranged and magical abilities with extensive animation integration and VFX.",
    longDescription: "This combat framework provides a base for action games with combo systems, weapon switching, and diverse attack patterns. It includes hit detection, damage calculation, and tight animation integration using the Gameplay Ability System.",
    tags: ["Gameplay", "Animation", "VFX"],
    tools: ["Unreal Engine 5", "Gameplay Ability System", "Blueprint"],
    type: "Team",
    image: "/project4.jpg",
    featured: false,
    videoUrl: "/project4-video.mp4"
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  className?: string;
  onClick: () => void;
}

const ProjectCard = ({ project, className, onClick }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden border border-white/10 transition-all duration-300 project-card cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Project Image */}
      <AspectRatio ratio={16/9}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700" 
        />
        
        {/* Type Badge */}
        <div className={cn(
          "absolute top-3 right-3 badge z-20",
          project.type === "Solo" ? "badge-solo" : "badge-team"
        )}>
          {project.type}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-16 h-16 rounded-full bg-ue-blue/80 flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
        </div>
      </AspectRatio>
      
      {/* Project Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* View Details Button */}
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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
            Explore my portfolio of Unreal Engine 5 projects showcasing multiplayer systems, 
            game mechanics, and technical solutions.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted backdrop-blur-sm">
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
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-white/10">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <span className={cn(
                    "badge",
                    selectedProject.type === "Solo" ? "badge-solo" : "badge-team"
                  )}>
                    {selectedProject.type} Project
                  </span>
                </div>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Project Video/Image */}
              <div className="mt-2 rounded-lg overflow-hidden border border-white/10">
                <AspectRatio ratio={16/9}>
                  <video 
                    controls 
                    poster={selectedProject.image} 
                    className="w-full h-full object-cover"
                  >
                    <source src={selectedProject.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span 
                          key={tool} 
                          className="px-3 py-1 text-sm rounded-full bg-muted/70 text-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-sm rounded-full bg-ue-blue/20 text-ue-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
