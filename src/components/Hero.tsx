
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send, Download } from "lucide-react";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const roles = ["Full Stack Developer", "MERN Stack Developer", "MCA Student", "UI Designer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typeSpeed = 50;
      } else {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typeSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next role
      }
      
      setTimeout(type, typeSpeed);
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animation"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animation animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animation animation-delay-4000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animation animation-delay-6000"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-[15%] w-16 h-16 border-2 border-blue-400 dark:border-blue-500 rounded-md rotate-45 opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-[10%] w-10 h-10 border-2 border-indigo-400 dark:border-indigo-500 rounded-full opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute top-40 right-[20%] w-8 h-8 bg-yellow-400 dark:bg-yellow-500 opacity-30 rounded-md rotating-element"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in-up">
            <div className="flex items-center mb-4">
              <span className="inline-block mr-3 text-lg md:text-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-1 rounded-full animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                Hello, World!
              </span>
              <span className="animate-wave inline-block origin-bottom-right">👋</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm <span className="gradient-text-multi">Yash Shinde</span>
            </h1>
            
            <div className="flex items-center h-12 mb-6">
              <span className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mr-2">
                I'm a
              </span>
              <span
                ref={typewriterRef}
                className="text-xl md:text-2xl font-bold text-portfolio-blue dark:text-blue-400"
              ></span>
              <span className="animate-cursor-blink text-xl md:text-2xl font-bold text-portfolio-blue dark:text-blue-400">
                |
              </span>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              A passionate developer with expertise in MERN stack, focused on creating
              efficient and user-friendly web applications. Currently pursuing MCA at MIT World Peace University.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Yash_Shinde_Resume.pdf" download className="no-underline group">
                <Button variant="default" size="lg" className="cta-button group-hover:scale-105">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                  Download Resume
                </Button>
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="no-underline group"
              >
                <Button variant="outline" size="lg" className="rounded-full text-base border-2 group-hover:bg-portfolio-blue/10 transition-all duration-300">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Contact Me
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="https://github.com/yasssh-shinde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yasssh-shinde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                href="mailto:yashshinde.dev@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-bounce-in">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-portfolio-purple to-portfolio-pink animate-gradient-animation"></div>
              <img
                src="https://via.placeholder.com/400x400.png?text=Yash+Shinde"
                alt="Yash Shinde"
                className="absolute inset-1 rounded-full object-cover w-[calc(100%-8px)] h-[calc(100%-8px)] animate-pulse-glow"
              />
              
              {/* Decorative orbital rings */}
              <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-blue-200 dark:border-blue-700 opacity-50 animate-spin-slow"></div>
              <div className="absolute inset-[-30px] rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-700 opacity-30 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Tech icons orbiting */}
              {!isMobile && (
                <>
                  <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
                  </div>
                  <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float animation-delay-2000">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-8 h-8" alt="Node.js" />
                  </div>
                  <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float animation-delay-4000">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8" alt="MongoDB" />
                  </div>
                  <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float animation-delay-6000">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 group-hover:text-portfolio-blue dark:group-hover:text-blue-400 transition-colors">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-portfolio-blue dark:group-hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
