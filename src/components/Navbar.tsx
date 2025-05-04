
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-2 bg-ue-darkest bg-opacity-90 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">
          GameDev<span className="text-ue-teal">Portfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a 
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium text-sm tracking-wide transition-colors duration-200",
                activeSection === item.href.substring(1)
                  ? "text-ue-teal"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
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
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ue-darkest bg-opacity-95 backdrop-blur-md py-4 border-t border-border">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium py-2 px-4 rounded-md transition-colors duration-200",
                  activeSection === item.href.substring(1)
                    ? "bg-muted text-ue-teal"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
