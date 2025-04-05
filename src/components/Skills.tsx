
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      name: "Languages",
      skills: ["JavaScript", "Java", "HTML", "CSS"]
    },
    {
      name: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva", "SEO", "JSON", "XML"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
          Here are the technologies and tools I've worked with and am proficient in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.name} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-blue dark:text-blue-400">
                  {category.name}
                </h3>
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
              { name: "MERN Stack", level: 90 },
              { name: "Frontend Development", level: 85 },
              { name: "Backend Development", level: 80 },
              { name: "Database Management", level: 75 },
              { name: "UI/UX Design", level: 70 },
              { name: "Problem Solving", level: 85 }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
