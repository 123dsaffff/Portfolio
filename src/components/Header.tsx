
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Кем являюсь', href: '#services' },
    { name: 'Портфолио', href: '#works' },
    { name: 'Опыт', href: '#experience' },
    { name: 'Контакты', href: '#contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Gerold.Dev
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a href="#contact" className="hidden md:inline-flex btn btn-primary px-4 py-2">
          Hire Me
        </a>
        
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 md:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="container h-full flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary px-6 py-2 mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
}
