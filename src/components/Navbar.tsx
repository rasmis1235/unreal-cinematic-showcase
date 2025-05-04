
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find the current active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-2 glass-navbar shadow-lg backdrop-blur-xl" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-ue-blue to-ue-teal flex items-center justify-center text-white font-bold text-xl shadow-neon">
            RS
          </div>
          <span className="text-xl font-bold">
            <span className="bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">Rasmi</span>
            <span className="text-foreground">Sahoo</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(item => (
            <a 
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium text-sm tracking-wide transition-all duration-200 relative nav-link",
                activeSection === item.href.substring(1)
                  ? "text-ue-teal"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-ue-teal transition-all duration-300", 
                activeSection === item.href.substring(1) ? "w-full" : ""
              )}></span>
            </a>
          ))}
          
          {/* Resume Button */}
          <a 
            href="#" 
            className="ml-2 bg-gradient-to-r from-ue-blue to-ue-teal text-white px-4 py-2 rounded-md font-medium shadow-neon hover:shadow-neon-hover transition-all duration-300"
            download
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Theme Toggle (visible on desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-navbar py-4 border-t border-white/10">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center",
                  activeSection === item.href.substring(1)
                    ? "bg-muted text-ue-teal"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2 w-1.5 h-1.5 rounded-full bg-ue-teal opacity-70"></span>
                {item.name}
              </a>
            ))}
            
            {/* Resume Button (Mobile) */}
            <a 
              href="#" 
              className="py-2 px-4 bg-gradient-to-r from-ue-blue to-ue-teal text-white rounded-md font-medium shadow-md"
              download
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
