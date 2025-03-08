
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Profession text animation
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["UX", "UI"];
  
  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  // Stats
  const stats = [
    { value: "14", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "1.5K", label: "Happy Clients" },
    { value: "14", label: "Awards" }
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5 z-0"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/20 to-transparent opacity-30 z-0 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "flex flex-col items-start space-y-6 transition-all duration-700 transform",
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          )}>
            <div className="inline-flex items-center gap-2">
              <div className="h-1 w-6 bg-primary rounded-full"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">I am Gerold</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Designer</span>
              <span className="text-primary block mt-1 relative h-[60px] overflow-hidden">
                {professions.map((profession, index) => (
                  <span key={profession} className={cn(
                    "absolute transition-all duration-500 ease-in-out",
                    index === professionIndex ? "top-0" : "top-16 opacity-0"
                  )}>
                    {profession}
                  </span>
                ))}
              </span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-lg">
              Опытный UX/UI дизайнер с более чем 3-летним стажем работы в создании интуитивно понятных и привлекательных интерфейсов. Обладаю глубокими знаниями в области пользовательского опыта, прототипирования и визуального дизайна. Успешно работал над проектами для различных отраслей
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a 
                href="#contact" 
                className="btn btn-primary px-5 py-2.5 rounded-md group"
              >
                <span>Связаться</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#works" 
                className="btn px-5 py-2.5 border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-colors rounded-md"
              >
                Портфолио
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-700 delay-300 transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative mx-auto max-w-[320px] md:max-w-[380px] aspect-[3/4]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/10 animate-pulse-glow"></div>
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-md animate-pulse-glow opacity-70"></div>
              
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
                <img 
                  src="/lovable-uploads/60e26338-f52a-43c1-9242-01ac3951c27c.png" 
                  alt="Gerold" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 md:mt-24 transition-all duration-700 delay-500 transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</h3>
              <p className="text-sm text-foreground/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
