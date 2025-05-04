
// Animation utility functions for the portfolio

// Typing animation effect
export const typeAnimation = (element: HTMLElement, text: string, speed: number = 50): void => {
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
};

// Parallax effect
export const initParallax = (): void => {
  window.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const slowerElements = document.querySelectorAll('.parallax-slower');
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    parallaxElements.forEach((el) => {
      const element = el as HTMLElement;
      const offsetX = (x - 0.5) * 30; // Increased effect
      const offsetY = (y - 0.5) * 30;
      element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });
    
    slowerElements.forEach((el) => {
      const element = el as HTMLElement;
      const offsetX = (x - 0.5) * 15;
      const offsetY = (y - 0.5) * 15;
      element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });
  });
};

// Sound effects
export const playSoundEffect = (soundUrl: string, volume: number = 0.5): void => {
  const audio = new Audio(soundUrl);
  audio.volume = volume;
  audio.play().catch(error => {
    console.log("Audio play failed:", error);
  });
};

// Page transition animations
export const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    }
  }
};

export const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99],
    }
  }
};
