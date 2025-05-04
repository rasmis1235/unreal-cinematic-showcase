
import { useEffect } from 'react';

export const useScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
};

export const useParallaxEffect = (containerId: string) => {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const items = container.querySelectorAll('.parallax');
      const slowItems = container.querySelectorAll('.parallax-slower');
      
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
    
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [containerId]);
  
  return null;
};
