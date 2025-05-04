
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Sample experience data
const experiences = [
  {
    title: "Lead Gameplay Programmer",
    company: "Epic Game Studio",
    period: "2022 - Present",
    description: "Lead the gameplay programming team for an unannounced AAA title. Architected multiplayer systems and gameplay mechanics using Unreal Engine 5.",
    highlights: [
      "Developed a custom matchmaking system for 150-player battles",
      "Implemented cross-platform friend and party systems",
      "Optimized multiplayer replication for large-scale worlds"
    ]
  },
  {
    title: "Senior Unreal Developer",
    company: "GameCraft Interactive",
    period: "2019 - 2022",
    description: "Worked as a senior developer on multiple Unreal Engine projects, focusing on gameplay systems and multiplayer infrastructure.",
    highlights: [
      "Created procedural dungeon generation tools using C++ and Blueprints",
      "Built a modular inventory system used across multiple projects",
      "Developed AI behavior systems for NPCs and enemies"
    ]
  },
  {
    title: "Unreal Engine Developer",
    company: "Indie Collective",
    period: "2017 - 2019",
    description: "Collaborated on several indie game projects using Unreal Engine 4, handling both gameplay programming and technical art tasks.",
    highlights: [
      "Implemented custom shaders and material systems for stylized graphics",
      "Created combat mechanics for action RPG titles",
      "Developed tools to accelerate level design workflows"
    ]
  }
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ experience, index, isLast }: TimelineItemProps) => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-12 top-14 bottom-0 w-0.5 bg-gradient-to-b from-ue-blue via-ue-teal to-muted"></div>
      )}
      
      <div className="flex gap-8 items-start">
        {/* Timeline marker */}
        <div 
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center shadow-neon flex-shrink-0 mt-4",
            index % 2 === 0 ? "bg-gradient-to-br from-ue-blue to-ue-teal" : "bg-gradient-to-br from-ue-teal to-ue-blue"
          )}
        >
          <span className="text-white text-xl font-bold">{index + 1}</span>
        </div>
        
        {/* Content */}
        <div className="glass p-6 rounded-lg w-full mb-8 hover:shadow-neon transition-all duration-300">
          <div className="flex flex-wrap justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-ue-teal">{experience.company}</p>
            </div>
            <div className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground self-start">
              {experience.period}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">{experience.description}</p>
          
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-ue-teal mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
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
      id="experience" 
      className="py-20 relative section-fade bg-ue-darker"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(33,150,243,0.05)_0%,_transparent_50%)] opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Resume</h2>
          <p className="text-muted-foreground">
            My professional journey through game development, showcasing industry experience and
            expertise in Unreal Engine development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="mb-12">
            {experiences.map((experience, idx) => (
              <TimelineItem 
                key={idx} 
                experience={experience} 
                index={idx}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>
          
          {/* Resume Download */}
          <div className="text-center">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ue-blue to-ue-teal text-white rounded-lg shadow-neon hover:shadow-neon-hover transition-all duration-300"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
