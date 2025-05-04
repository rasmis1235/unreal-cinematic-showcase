
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Updated experience data with real information
const experiences = [
  {
    title: "Lead Game Developer",
    company: "GauravGo Games Technologies",
    period: "Oct 2023 - Present",
    location: "Remote",
    description: "Leading gameplay development for multiplayer projects, architecting scalable matchmaking systems and friend systems for Battle Royale and adventure games.",
    highlights: [
      "Developed a custom matchmaking system with support for 150+ concurrent players",
      "Implemented cross-platform friend invites and party management",
      "Optimized multiplayer replication for large-scale open worlds"
    ]
  },
  {
    title: "Senior Game Developer",
    company: "GauravGo Games Technologies",
    period: "May 2023 - Oct 2023",
    location: "Remote",
    description: "Focused on C++ development within Unreal Engine, creating gameplay systems and optimizing performance for multiplayer games.",
    highlights: [
      "Created gameplay systems using C++ and Blueprint integration",
      "Optimized network performance for critical gameplay features",
      "Implemented animation systems and gameplay ability frameworks"
    ]
  },
  {
    title: "Game Developer Intern",
    company: "GauravGo Games Technologies",
    period: "Mar 2023 - May 2023",
    location: "Remote",
    description: "Learned and applied core gameplay logic using Blueprints and C++, focusing on the fundamentals of game development with Unreal Engine.",
    highlights: [
      "Mastered Blueprint visual scripting for rapid prototyping",
      "Built foundational C++ skills for Unreal Engine development",
      "Contributed to gameplay systems under senior guidance"
    ]
  }
];

// Education data
const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "GITA Autonomous College",
    period: "2022 - 2026"
  },
  {
    degree: "12th Science",
    institution: "SRCST",
    period: "2020 - 2022"
  },
  {
    degree: "10th Science",
    institution: "SSVM Joranda",
    period: "2018 - 2020"
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
              <p className="text-sm text-muted-foreground">{experience.location}</p>
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

interface EducationItemProps {
  education: typeof education[0];
  isLast: boolean;
}

const EducationItem = ({ education, isLast }: EducationItemProps) => {
  return (
    <div className="relative mb-6 last:mb-0">
      {!isLast && (
        <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-gradient-to-b from-ue-teal to-muted"></div>
      )}
      <div className="flex gap-4 items-start">
        <div className="w-6 h-6 rounded-full bg-ue-teal/30 border-2 border-ue-teal flex-shrink-0 mt-1"></div>
        <div>
          <h4 className="text-lg font-medium">{education.degree}</h4>
          <p className="text-muted-foreground">{education.institution}</p>
          <p className="text-sm text-ue-teal/80">{education.period}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground">
            My professional journey through game development, showcasing industry experience and
            education background in Unreal Engine development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">Work Experience</h3>
            <div>
              {experiences.map((experience, idx) => (
                <TimelineItem 
                  key={idx} 
                  experience={experience} 
                  index={idx}
                  isLast={idx === experiences.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-ue-teal to-ue-blue bg-clip-text text-transparent">Education</h3>
            <div className="glass p-6 rounded-lg">
              {education.map((edu, idx) => (
                <EducationItem
                  key={idx}
                  education={edu}
                  isLast={idx === education.length - 1}
                />
              ))}
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Side Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-xs">Java</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-xs">HTML</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-xs">JavaScript</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-muted/50 rounded-full text-xs">MySQL</span>
                </div>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="mt-8 text-center">
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
      </div>
    </section>
  );
};

export default ExperienceSection;
