
// Function to type out text with a typewriter effect
export const typeAnimation = (element: HTMLElement, text: string, speed: number = 100) => {
  let i = 0;
  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.textContent = '';
  element.appendChild(cursor);

  const typing = setInterval(() => {
    if (i < text.length) {
      if (element.childNodes[0]) {
        element.childNodes[0].textContent += text.charAt(i);
      } else {
        const textNode = document.createTextNode(text.charAt(i));
        element.insertBefore(textNode, cursor);
      }
      i++;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        element.classList.remove('border-r-2');
      }, 500);
    }
  }, speed);

  return () => clearInterval(typing);
};

// Function to initialize parallax effects
export const initParallax = () => {
  document.addEventListener('mousemove', (e) => {
    const parallaxItems = document.querySelectorAll<HTMLElement>('.parallax');
    const parallaxSlowItems = document.querySelectorAll<HTMLElement>('.parallax-slower');
    const parallaxFastItems = document.querySelectorAll<HTMLElement>('.parallax-faster');
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (mouseX / windowWidth) - 0.5;
    const moveY = (mouseY / windowHeight) - 0.5;
    
    parallaxItems.forEach(item => {
      item.style.transform = `translate3d(${moveX * 30}px, ${moveY * 30}px, 0)`;
    });
    
    parallaxSlowItems.forEach(item => {
      item.style.transform = `translate3d(${moveX * 15}px, ${moveY * 15}px, 0)`;
    });
    
    parallaxFastItems.forEach(item => {
      item.style.transform = `translate3d(${moveX * 45}px, ${moveY * 45}px, 0)`;
    });
  });
};
