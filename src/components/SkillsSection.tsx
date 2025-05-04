
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Sample skills data
const skills = [
  {
    category: "Game Development",
    items: [
      { name: "Unreal Engine 5", level: 95 },
      { name: "Unity", level: 80 },
      { name: "Game Design", level: 85 },
      { name: "Level Design", level: 90 }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "C++", level: 90 },
      { name: "Blueprint Visual Scripting", level: 98 },
      { name: "Python", level: 75 },
      { name: "HLSL/Shaders", level: 85 }
    ]
  },
  {
    category: "Graphics & Technical Art",
    items: [
      { name: "Lighting & Rendering", level: 92 },
      { name: "Material Creation", level: 88 },
      { name: "Visual Effects", level: 80 },
      { name: "Technical Art", level: 85 }
    ]
  }
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
          className="skill-progress h-full bg-gradient-to-r from-ue-blue to-ue-teal rounded-full transition-all duration-1000 ease-out"
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">
            My expertise spans across various aspects of game development, from low-level 
            engine programming to high-level design concepts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((category, idx) => (
            <div 
              key={category.category} 
              className="bg-card p-7 rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-6 text-ue-teal">{category.category}</h3>
              
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
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Game Optimization", "Multiplayer Systems", "AI Programming", 
              "Physics Simulation", "Procedural Generation", "Cinematics", 
              "Performance Profiling", "UX Design", "Version Control", 
              "Agile Development"].map(tag => (
              <div 
                key={tag}
                className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
