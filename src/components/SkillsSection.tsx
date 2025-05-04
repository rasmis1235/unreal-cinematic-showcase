
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Enhanced skills data with icons
const skills = [
  {
    category: "Programming",
    items: [
      { name: "Blueprint Visual Scripting", level: 98 },
      { name: "C++", level: 90 },
      { name: "Gameplay Ability System", level: 85 },
      { name: "Multiplayer & Replication", level: 93 }
    ]
  },
  {
    category: "Game Systems",
    items: [
      { name: "UMG UI Development", level: 88 },
      { name: "Animation Blueprints", level: 87 },
      { name: "Behavior Trees & AI", level: 82 },
      { name: "Physics & Interactions", level: 85 }
    ]
  },
  {
    category: "Technical Art",
    items: [
      { name: "Material Development", level: 80 },
      { name: "VFX & Niagara", level: 75 },
      { name: "Lighting & Environment", level: 83 },
      { name: "Post Processing", level: 78 }
    ]
  }
];

// Tools expertise
const tools = [
  { name: "Unreal Engine 5", icon: "ue5.png" },
  { name: "Visual Studio", icon: "vs.png" },
  { name: "Perforce", icon: "perforce.png" },
  { name: "Git", icon: "git.png" },
  { name: "Blender", icon: "blender.png" },
  { name: "Substance Designer", icon: "substance.png" }
];

// Soft Skills
const softSkills = [
  "Rapid Prototyping", 
  "Problem Solving", 
  "Technical Documentation", 
  "Performance Optimization", 
  "Team Collaboration",
  "System Architecture"
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar = ({ name, level, index }: SkillBarProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          const bar = skillRef.current?.querySelector('.skill-progress');
          if (bar) {
            (bar as HTMLElement).style.width = `${level}%`;
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level]);

  return (
    <div 
      className="mb-5" 
      ref={skillRef}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="skill-progress h-full bg-gradient-to-r from-ue-blue to-ue-teal rounded-full transition-all duration-1500 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
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
      id="skills" 
      className="py-20 relative section-fade"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-ue-blue blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-ue-teal blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">
            My expertise covers the full spectrum of Unreal Engine development, from low-level 
            programming to high-level design and optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div 
              key={category.category} 
              className="glass p-7 rounded-lg hover:shadow-neon transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">
                {category.category}
              </h3>
              
              <div>
                {category.items.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIdx}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tools */}
          <div className="glass p-7 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Software</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map(tool => (
                <div key={tool.name} className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                    <img 
                      src={`/icons/${tool.icon}`} 
                      alt={tool.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-sm text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass p-7 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Professional Skills</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map(skill => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:bg-gradient-to-r hover:from-ue-blue/20 hover:to-ue-teal/20 hover:text-white transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-5 bg-muted/50 rounded-lg border border-white/5">
              <h4 className="font-semibold mb-2 text-ue-teal">Game Development Philosophy</h4>
              <p className="text-muted-foreground text-sm">
                I believe in creating systems that are modular, well-documented, and performance-optimized. 
                My approach combines technical excellence with player-focused design to build mechanics 
                that not only work flawlessly but also create meaningful game experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
