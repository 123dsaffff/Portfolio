
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-border relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Gerold.Dev
            </span>
            <p className="text-foreground/70 mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          
          <div className="text-foreground/70 text-center md:text-right">
            <p>© {new Date().getFullYear()} Gerold. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="absolute right-10 -top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
