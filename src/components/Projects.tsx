
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  id: number;
  title: string;
  description: string;
  points: string[];
  technologies: string[];
  github: string;
  demo?: string;
  color: string;
}

const Projects: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "SwapKart",
      description: "A peer-to-peer e-commerce platform for buying, selling, and exchanging pre-owned products.",
      points: [
        "Implemented role-based authentication & authorization, improving security by 40% through JWT authentication.",
        "Built a dynamic bidding system for fair price negotiations, increasing user engagement by 60%.",
        "Integrated secure payment gateways and optimized product listings, enhancing transaction success rates by 35%.",
        "Leveraged Redux & Tailwind CSS for state management and responsive UI, reducing page load time by 50%."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS", "JWT"],
      github: "https://github.com/yasssh-shinde/swapkart",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "LearnHub - Learning Management System",
      description: "A scalable LMS platform enhancing student-instructor collaboration.",
      points: [
        "Implemented role-based authentication for students, instructors, and admins, improving data security by 50%.",
        "Designed interactive course modules with quizzes, assignments, and discussion forums, increasing student engagement by 45%.",
        "Integrated real-time feedback & progress tracking, enhancing learning outcomes by 35%.",
        "Optimized frontend with React.js & Tailwind CSS, improving UI responsiveness by 40%."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "WebSockets"],
      github: "https://github.com/yasssh-shinde/learnhub",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "RideShare",
      description: "A ride-sharing platform connecting drivers with passengers for cost-effective travel.",
      points: [
        "Implemented real-time ride booking and fare estimation, improving booking efficiency by 55%.",
        "Integrated Google Maps API for route optimization, reducing average trip duration by 20%.",
        "Developed a rating and review system for drivers and passengers, increasing platform trust by 45%.",
        "Optimized UI/UX using React.js & Tailwind CSS, enhancing user experience and reducing bounce rate by 30%."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Maps API", "Tailwind CSS"],
      github: "https://github.com/yasssh-shinde/rideshare",
      color: "from-green-500 to-green-700"
    }
  ];

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-green-500 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
          Here are some of the key projects I've worked on, showcasing my skills in full-stack development.
        </p>

        {isMobile ? (
          // Mobile view - Carousel
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-1">
                    <ProjectCard project={project} isMobile={isMobile} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              <Button
                variant="outline" 
                size="icon"
                onClick={prevProject}
                className="rounded-full"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2 items-center">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-portfolio-blue w-6" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline" 
                size="icon"
                onClick={nextProject}
                className="rounded-full"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : (
          // Desktop view - Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} isMobile={isMobile} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isMobile: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isMobile }) => {
  return (
    <Card className="project-card h-full flex flex-col animated-border group">
      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink animate-gradient-animation rounded-t-xl"></div>
      
      <CardHeader className="pb-4 relative">
        <div className={`absolute top-1 right-1 w-8 h-8 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-xs font-bold opacity-90`}>
          {project.id}
        </div>
        <CardTitle className="text-xl font-bold gradient-text-multi">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <ul className="space-y-2 mb-4">
          {project.points.map((point, idx) => (
            <li 
              key={idx} 
              className="text-sm text-gray-600 dark:text-gray-400 flex group"
            >
              <span className="text-portfolio-blue dark:text-blue-400 mr-2 transform group-hover:translate-x-1 transition-transform">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="skill-badge"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors group"
        >
          <Github className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
          GitHub
        </a>
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors group"
          >
            <ExternalLink className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
