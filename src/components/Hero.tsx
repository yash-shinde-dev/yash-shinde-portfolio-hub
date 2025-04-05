
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ["Full Stack Developer", "MERN Stack Developer", "MCA Student"];
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
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Yash Shinde</span>
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
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              A passionate developer with expertise in MERN stack, focused on creating
              efficient and user-friendly web applications. Currently pursuing MCA at MIT World Peace University.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Yash_Shinde_Resume.pdf" download className="no-underline">
                <Button variant="default" size="lg" className="rounded-full text-base">
                  Download Resume
                </Button>
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="no-underline"
              >
                <Button variant="outline" size="lg" className="rounded-full text-base">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 animate-bounce-in">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse"></div>
              <img
                src="https://via.placeholder.com/400x400.png?text=Yash+Shinde"
                alt="Yash Shinde"
                className="absolute inset-1 rounded-full object-cover w-[calc(100%-8px)] h-[calc(100%-8px)]"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
