
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export function Works() {
  const [isInView, setIsInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('works');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'web', label: 'Веб' },
    { id: 'app', label: 'Приложения' },
    { id: 'branding', label: 'Брендинг' }
  ];

  const projects = [
    {
      id: 1,
      title: "Футбольный клуб",
      description: "Веб-платформа для клуба 'KOKOC'",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
      category: "web",
      link: "#"
    },
    {
      id: 2,
      title: "Приложение для банка ВТБ",
      description: "Мобильное приложение для обмена криптовалют напрямую между банком и пользователем",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
      category: "app",
      link: "#"
    },
    {
      id: 3,
      title: "Modern Agency Rebrand",
      description: "Complete brand identity redesign for a digital marketing agency.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
      category: "branding",
      link: "#"
    },
    {
      id: 4,
      title: "5html VK Games",
      description: "Раздел с играми от ВК",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80",
      category: "web",
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="works" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Портфолио</h2>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-secondary/50 text-foreground/80 hover:bg-secondary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl glassmorphism transition-all duration-500 transform",
                isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-foreground/70 mt-2">{project.description}</p>
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <div className="mt-4">
                  <span className="tag tag-primary">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn btn-secondary px-6 py-2.5">
            Смотреть все проекты
          </a>
        </div>
      </div>
    </section>
  );
}
