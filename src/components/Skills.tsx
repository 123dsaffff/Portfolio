
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
 @@ -43,7 +36,71 @@
           <h2 className="section-title mx-auto">Скиллы</h2>
         </div>
 
 
         
         <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
           {skills.map((skill, index) => (
             <div 
               key={index} 
               className={cn(
                 "text-center transition-all duration-700 transform",
                 isInView 
                   ? "translate-y-0 opacity-100" 
                   : "translate-y-8 opacity-0"
               )}
               style={{ transitionDelay: `${index * 100}ms` }}
             >
               <div className="relative w-32 h-32 mx-auto">
                 {/* Background circle */}
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                   <circle
                     cx="50"
                     cy="50"
                     r="45"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="8"
                     className="text-secondary/50"
                   />
                   
                   {/* Progress circle */}
                   <circle
                     cx="50"
                     cy="50"
                     r="45"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="8"
                     strokeDasharray={`${2 * Math.PI * 45}`}
                     strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.percentage / 100)}`}
                     strokeLinecap="round"
                     className={cn(
                       "text-primary transition-all duration-1000 ease-out",
                       isInView ? "opacity-100" : "opacity-0"
                     )}
                     style={{
                       transformOrigin: "center",
                       transform: "rotate(-90deg)",
                       transition: `stroke-dashoffset 1.5s ease ${index * 0.1}s`
                     }}
                   />
                 </svg>
                 
                 {/* Percentage text */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-2xl font-bold">{skill.percentage}%</span>
                 </div>
               </div>
               
               <h3 className="text-lg font-bold mt-4">{skill.name}</h3>
             </div>
           ))}
         </div>
         
         {/* Tools and technologies */}
         <div className={cn(
           "mt-20 flex flex-wrap justify-center gap-8 transition-all duration-700 transform",
           isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
         )} style={{ transitionDelay: "600ms" }}>
 
 
           {['Figma', 'Photoshop', 'VS Code', 'Git', 'Node.js', 'Tailwind CSS'].map((tool, index) => (
