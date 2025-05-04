
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ue-darkest py-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-ue-blue via-ue-teal to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-ue-blue to-ue-teal flex items-center justify-center text-white font-bold text-sm">
                RS
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">Rasmi</span>
                <span className="text-foreground">Sahoo</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Unreal Engine 5 Developer specializing in multiplayer systems and gameplay mechanics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold mb-3 text-ue-teal">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="text-muted-foreground hover:text-ue-teal transition-colors">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-ue-teal transition-colors">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-ue-teal transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-ue-teal transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold mb-3 text-ue-blue">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/rasmis1235/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-ue-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li><a href="#" className="text-muted-foreground hover:text-ue-blue transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ue-blue transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ue-blue transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Rasmi Ranjan Sahoo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Unreal Engine® is a trademark or registered trademark of Epic Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
