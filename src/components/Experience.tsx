
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Experience() {
  const [isInView, setIsInView] = useState(false);

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

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      year: "202 - Present",
      title: "Lead Developer",
      company: "Artistry Digital",
      description: "Leading development teams and managing complex web projects for enterprise clients."
    },
    {
      year: "2017 - 2020",
      title: "Full Stack Web Developer",
      company: "Tech Solutions, Inc.",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB."
    },
    {
      year: "2015 - 2017",
      title: "UI Designer",
      company: "Creative Lab",
      description: "Created user interfaces and improved user experience for mobile and web applications."
    },
    {
      year: "2012 - 2015",
      title: "Junior Graphics Designer",
      company: "Visuals Studio",
      description: "Designed marketing materials and brand assets for various clients."
    }
  ];

  const education = [
    {
      year: "2016 - 2017",
      title: "Programming Course",
      institution: "TechEd Academy",
      description: "Advanced programming techniques and modern framework implementations."
    },
    {
      year: "2012 - 2016",
      title: "Graphic Design Course",
      institution: "Art & Design School",
      description: "Comprehensive design fundamentals and digital media production."
    },
    {
      year: "2010 - 2012",
      title: "Web Design Course",
      institution: "University of Art & Tech",
      description: "Web design principles, HTML/CSS/JavaScript, and responsive design techniques."
    },
    {
      year: "2007 - 2010",
      title: "Design & Technology",
      institution: "Creative Arts College",
      description: "Foundation in design principles and technology integration."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div className={cn(
            "transition-all duration-700 transform",
            isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          )}>
            <h2 className="section-title">Мой опыт</h2>
            
            <div className="mt-10 space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute top-0 left-4 w-0.5 h-full bg-primary/20 z-0"></div>
              
              {experiences.map((item, index) => (
                <div 
                  key={index} 
                  className="relative z-10 pl-14"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                    <p className="text-foreground/80 text-sm mt-1">{item.company}</p>
                    <p className="mt-3 text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className={cn(
            "transition-all duration-700 transform",
            isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          )}>
            <h2 className="section-title">Мои проекты</h2>
            
            <div className="mt-10 space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute top-0 left-4 w-0.5 h-full bg-accent/20 z-0"></div>
              
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative z-10 pl-14"
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>
                  
                  <div className="glassmorphism p-6 rounded-xl">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                    <p className="text-foreground/80 text-sm mt-1">{item.institution}</p>
                    <p className="mt-3 text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
