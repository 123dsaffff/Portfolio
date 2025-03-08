
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Laptop, Smartphone, PencilRuler, BrainCircuit } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "branding",
      icon: PencilRuler,
      title: "Брендинг дизайн",
      description: "Create cohesive brand identities that resonate with your audience and stand out in the market. From logos to style guides, I build complete brand systems.",
      details: [
        "Logo Design & Identity",
        "Brand Guidelines",
        "Visual Elements",
        "Brand Strategy"
      ]
    },
    {
      id: "web",
      icon: Laptop,
      title: "Web Design",
      description: "Beautiful, responsive websites crafted with clean code and modern design principles. I focus on creating intuitive user experiences across all devices.",
      details: [
        "Responsive Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization"
      ]
    },
    {
      id: "ux",
      icon: BrainCircuit,
      title: "UI/UX Design",
      description: "Design interfaces that users love. I create seamless user experiences through careful research, wireframing, prototyping, and usability testing.",
      details: [
        "User Research",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Interactive Design"
      ]
    },
    {
      id: "app",
      icon: Smartphone,
      title: "App Design",
      description: "Mobile app designs that combine beautiful visuals with smooth functionality. I develop user-centered apps that engage and delight.",
      details: [
        "iOS & Android Design",
        "App Prototyping",
        "UI Component Systems",
        "App Store Assets"
      ]
    }
  ];

  const [activeService, setActiveService] = useState("branding");

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Что создаю</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
Высококачественные услуги, адаптированные к вашим потребностям. Я стремлюсь предоставлять лучшие результаты, которые превосходят ожидания и помогают достичь ваших целей.          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className={cn(
                "glassmorphism p-6 rounded-xl cursor-pointer group transition-all duration-300",
                activeService === service.id 
                  ? "border-primary/30 bg-secondary/50 shadow-lg shadow-primary/5" 
                  : "hover:border-primary/20"
              )}
              onClick={() => setActiveService(service.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                    activeService === service.id
                      ? "bg-primary text-white"
                      : "bg-secondary text-primary"
                  )}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <span className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  activeService === service.id 
                    ? "bg-primary text-white rotate-45" 
                    : "bg-secondary text-primary group-hover:bg-primary/10"
                )}>
                  <ArrowUpRight size={18} />
                </span>
              </div>
              
              <div className={cn(
                "mt-6 grid transition-all duration-300 ease-in-out",
                activeService === service.id 
                  ? "grid-rows-[1fr] opacity-100" 
                  : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <p className="text-foreground/80 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
