
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ue-darkest py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-ue-blue to-ue-teal bg-clip-text text-transparent">
              GameDev<span className="text-ue-teal">Portfolio</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Creating immersive game experiences with Unreal Engine 5
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
            <div className="flex gap-4 mt-3 justify-center md:justify-end">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
