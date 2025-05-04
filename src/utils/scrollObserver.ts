
import { useEffect } from 'react';

// Scroll observer utility that adds visible class to elements for animations
export const useScrollObserver = () => {
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element: Element): boolean => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll and show elements
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-fade');
      
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
