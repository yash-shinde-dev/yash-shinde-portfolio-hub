
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Who am I?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm Yash Shinde, a passionate Full Stack Developer specializing in MERN stack development. 
                  Currently pursuing my Master's in Computer Applications at MIT World Peace University, I combine 
                  academic knowledge with practical development experience to create efficient and user-friendly web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My journey in web development began during my Bachelor's in Computer Applications, where I developed 
                  a strong foundation in programming concepts and web technologies. I'm particularly interested in 
                  building scalable applications that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  When I'm not coding, I'm actively involved in university activities, serving as a Core Team Member 
                  at the Career Development Centre. I enjoy collaborating with others and continuously learning new 
                  technologies to enhance my skills.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full animate-fade-in-up animation-delay-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Personal Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Pune, Maharashtra, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5" />
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
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-portfolio-blue dark:text-blue-400 mr-3 mt-0.5" />
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
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:yashshinde.dev@gmail.com"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="tel:+919404107465"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 p-2 rounded-full transition-colors"
                      aria-label="Phone"
                    >
                      <Phone className="h-5 w-5" />
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
