
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Yash Shinde</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer | MCA Student
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/yasssh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yasssh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:yashshinde.dev@gmail.com"
              className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919404107465"
              className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Yash Shinde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
