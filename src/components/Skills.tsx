
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  
  // Animate skill bars on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLDivElement;
          const value = target.dataset.value || "0";
          target.style.width = `${value}%`;
          observer.unobserve(target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL"],
      color: "bg-gradient-to-r from-yellow-500 to-yellow-600"
    },
    {
      name: "Languages",
      icon: "📝",
      skills: ["JavaScript", "Java", "HTML", "CSS"],
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      name: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva", "SEO", "JSON", "XML"],
      color: "bg-gradient-to-r from-red-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] border-[40px] border-portfolio-blue rounded-full top-[-250px] left-[-250px]"></div>
        <div className="absolute w-[300px] h-[300px] border-[30px] border-portfolio-purple rounded-full bottom-[-150px] right-[-150px]"></div>
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-20 h-20 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 transform w-16 h-16 bg-green-500/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 transform w-24 h-24 bg-yellow-500/20 rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
          Here are the technologies and tools I've worked with and am proficient in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.name} 
              className="hover:shadow-lg transition-all duration-300 animated-border overflow-hidden animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 w-full ${category.color} group-hover:animate-gradient-animation`}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-portfolio-blue dark:text-blue-400">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
            Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "MERN Stack", level: 90, color: "from-blue-500 to-indigo-600" },
              { name: "Frontend Development", level: 85, color: "from-sky-500 to-cyan-600" },
              { name: "Backend Development", level: 80, color: "from-green-500 to-emerald-600" },
              { name: "Database Management", level: 75, color: "from-yellow-500 to-amber-600" },
              { name: "UI/UX Design", level: 70, color: "from-pink-500 to-rose-600" },
              { name: "Problem Solving", level: 85, color: "from-purple-500 to-violet-600" }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    ref={el => progressRefs.current[index] = el}
                    data-value={skill.level}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full w-0 transition-all duration-1000 ease-out group-hover:animate-pulse`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {!isMobile && (
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
              Tech Stack Visualization
            </h3>
            <div className="relative h-[300px] flex items-center justify-center">
              {/* Central node */}
              <div className="absolute z-20 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg animate-pulse-glow">
                MERN
              </div>
              
              {/* Connecting lines */}
              <div className="absolute w-full h-full">
                {/* Frontend line */}
                <div className="absolute top-1/2 left-1/2 h-[2px] w-[120px] bg-blue-400 dark:bg-blue-600 transform -translate-y-1/2 -translate-x-1/2 rotate-0"></div>
                
                {/* Backend line */}
                <div className="absolute top-1/2 left-1/2 h-[2px] w-[120px] bg-green-400 dark:bg-green-600 transform -translate-y-1/2 -translate-x-1/2 rotate-72"></div>
                
                {/* Database line */}
                <div className="absolute top-1/2 left-1/2 h-[2px] w-[120px] bg-yellow-400 dark:bg-yellow-600 transform -translate-y-1/2 -translate-x-1/2 rotate-144"></div>
                
                {/* Tools line */}
                <div className="absolute top-1/2 left-1/2 h-[2px] w-[120px] bg-purple-400 dark:bg-purple-600 transform -translate-y-1/2 -translate-x-1/2 rotate-216"></div>
                
                {/* Languages line */}
                <div className="absolute top-1/2 left-1/2 h-[2px] w-[120px] bg-pink-400 dark:bg-pink-600 transform -translate-y-1/2 -translate-x-1/2 rotate-288"></div>
              </div>
              
              {/* Orbital nodes */}
              <div className="absolute top-1/2 left-[calc(50%+120px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium animate-float">
                React.js
              </div>
              
              <div className="absolute top-[calc(50%-104px)] left-[calc(50%+40px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium animate-float animation-delay-2000">
                Node.js
              </div>
              
              <div className="absolute top-[calc(50%-104px)] left-[calc(50%-40px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-sm font-medium animate-float animation-delay-4000">
                MongoDB
              </div>
              
              <div className="absolute top-[calc(50%+104px)] left-[calc(50%-40px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium animate-float animation-delay-2000">
                Git
              </div>
              
              <div className="absolute top-[calc(50%+104px)] left-[calc(50%+40px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium animate-float animation-delay-4000">
                JavaScript
              </div>
              
              <div className="absolute top-1/2 left-[calc(50%-120px)] transform -translate-y-1/2 w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium animate-float">
                Express.js
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
