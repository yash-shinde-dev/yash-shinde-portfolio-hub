
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For scroll progress
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Scroll Progress Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-portfolio-purple to-portfolio-pink w-full transition-all duration-300 absolute top-0 left-0" style={{ transform: `translateX(-${100 - scrollProgress}%)` }}></div>
      
      <div className={`transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer flex items-center group"
            onClick={closeMenu}
          >
            <div className="relative mr-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md flex items-center justify-center text-white overflow-hidden group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-5 h-5" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <span className="gradient-text-multi">Yash Shinde</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link cursor-pointer"
                activeClass="active-nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-2 rounded-full transition-transform hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[57px] right-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-3 text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                activeClass="text-blue-600 dark:text-blue-400"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
            <div className="flex justify-center space-x-6">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
