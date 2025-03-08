
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Skills() {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 90 },
    { name: "UI/UX", percentage: 80 },
    { name: "WordPress", percentage: 75 }
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent opacity-30 z-0 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Скиллы</h2>
        </div>



        
          {['Figma', 'Photoshop', 'VS Code', 'Git', 'Node.js', 'Tailwind CSS'].map((tool, index) => (
            <div 
              key={tool} 
              className="glassmorphism px-5 py-3 rounded-full text-sm font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
