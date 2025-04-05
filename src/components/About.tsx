
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, FileText, User, Code, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const About: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full border-8 border-blue-300 dark:border-blue-700 top-10 left-10 animate-spin-slow"></div>
        <div className="absolute w-32 h-32 rounded-full border-4 border-purple-300 dark:border-purple-700 bottom-20 right-20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
        <div className="absolute w-16 h-16 rounded-md rotate-45 border-4 border-indigo-300 dark:border-indigo-700 top-1/3 right-1/4 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full animate-fade-in-up relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-3">
                    <User className="h-5 w-5 text-portfolio-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Who am I?
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    I'm <span className="font-semibold text-portfolio-blue dark:text-blue-400">Yash Shinde</span>, a passionate Full Stack Developer specializing in MERN stack development. 
                    Currently pursuing my Master's in Computer Applications at MIT World Peace University, I combine 
                    academic knowledge with practical development experience to create efficient and user-friendly web applications.
                  </p>
                  
                  <div className="relative pl-4 border-l-2 border-blue-300 dark:border-blue-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      My journey in web development began during my Bachelor's in Computer Applications, where I developed 
                      a strong foundation in programming concepts and web technologies. I'm particularly interested in 
                      building scalable applications that solve real-world problems.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-start">
                      <Code className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Technical Expertise</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Specialized in MERN stack with strong problem-solving skills and attention to detail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-start">
                      <BookOpen className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Continuous Learning</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Always exploring new technologies and methodologies to enhance my skill set.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    When I'm not coding, I'm actively involved in university activities, serving as a Core Team Member 
                    at the Career Development Centre. I enjoy collaborating with others and continuously learning new 
                    technologies to enhance my skills.
                  </p>
                </div>
                
                {!isMobile && (
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">My tech stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "Tailwind CSS"].map((tech, i) => (
                        <span key={tech} className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:order-first">
            <Card className="h-full animate-fade-in-up animation-delay-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-6">
                <div className="relative w-full pb-[100%] mb-6">
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800">
                    <img
                      src="https://via.placeholder.com/400x400.png?text=Yash+Shinde"
                      alt="Yash Shinde"
                      className="object-cover w-full h-full animate-pulse-glow"
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold">
                      Yash Shinde
                    </div>
                  </div>
                  {!isMobile && (
                    <>
                      <div className="absolute top-[10%] right-[5%] w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-10 animate-float">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
                      </div>
                      <div className="absolute bottom-[15%] left-[5%] w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-10 animate-float animation-delay-2000">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-6 h-6" alt="Node.js" />
                      </div>
                    </>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Personal Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                    <MapPin className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Pune, Maharashtra, India</p>
                    </div>
                  </li>
                  <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                    <Mail className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
                      <a 
                        href="mailto:yashshinde.dev@gmail.com" 
                        className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                      >
                        yashshinde.dev@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                    <Phone className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Phone</p>
                      <a 
                        href="tel:+919404107465" 
                        className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                      >
                        +91-940-410-7465
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                    <FileText className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Resume</p>
                      <a 
                        href="/Yash_Shinde_Resume.pdf" 
                        download
                        className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                      >
                        Download Resume
                      </a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Connect with me</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors group"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="mailto:yashshinde.dev@gmail.com"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors group"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="tel:+919404107465"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors group"
                      aria-label="Phone"
                    >
                      <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
