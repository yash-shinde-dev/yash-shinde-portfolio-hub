
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin, Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  color: string;
}

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  color: string;
}

const Education: React.FC = () => {
  const isMobile = useIsMobile();
  
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "Master of Computer Applications (M.C.A.)",
      institution: "MIT World Peace University",
      location: "Pune, Maharashtra",
      period: "August 2023 – June 2025",
      gpa: "7.08/10.00",
      color: "from-blue-500 to-portfolio-indigo"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (B.C.A.)",
      institution: "HVPM Degree College Of Physical Education",
      location: "Amravati, Maharashtra",
      period: "June 2020 – July 2023",
      gpa: "8.16/10.00",
      color: "from-portfolio-blue to-blue-400"
    }
  ];

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: "Core Team Member",
      organization: "Career Development Centre, MIT-WPU",
      location: "Pune, Maharashtra",
      period: "August 2024 – Present",
      color: "from-indigo-500 to-portfolio-purple"
    },
    {
      id: 2,
      title: "Stage Committee Member",
      organization: "G20 Interfaith Forum, MIT ADT University",
      location: "Pune, Maharashtra",
      period: "September 2024",
      color: "from-portfolio-purple to-purple-400"
    },
    {
      id: 3,
      title: "Student Council Member",
      organization: "HVPM",
      location: "Amravati, Maharashtra",
      period: "April 2022 – June 2023",
      color: "from-portfolio-indigo to-indigo-400"
    },
    {
      id: 4,
      title: "Class Representative",
      organization: "HVPM",
      location: "Amravati, Maharashtra",
      period: "April 2022 – June 2023",
      color: "from-purple-500 to-portfolio-purple"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30"></div>
        <div className="absolute left-0 top-20 h-[calc(100%-40px)] w-20 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-indigo-500/30"></div>
        <div className="absolute right-0 top-20 h-[calc(100%-40px)] w-20 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-blue-500/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">Education & Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-3">
                <GraduationCap className="h-6 w-6 text-portfolio-blue dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Education
              </h3>
            </div>
            
            <div className="space-y-6 relative">
              {/* Timeline line */}
              {!isMobile && (
                <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              )}
              
              {educationItems.map((item, index) => (
                <TimelineCard 
                  key={item.id} 
                  className={`relative border-l-4 border-l-gradient-to-r ${item.color} animate-fade-in-left`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {!isMobile && (
                    <div className="absolute left-[-30px] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-white dark:border-gray-800 z-10 animate-pulse"></div>
                  )}
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      {item.degree}
                    </h4>
                    <p className="text-lg font-medium text-portfolio-blue dark:text-blue-400 mb-2">
                      {item.institution}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Award className="h-4 w-4 mr-1 text-amber-500" />
                      <span>GPA: {item.gpa}</span>
                    </div>
                  </CardContent>
                </TimelineCard>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-2 mr-3">
                <Briefcase className="h-6 w-6 text-portfolio-purple dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Extracurriculars & Leadership
              </h3>
            </div>
            
            <div className="space-y-6 relative">
              {/* Timeline line */}
              {!isMobile && (
                <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 to-purple-600"></div>
              )}
              
              {experienceItems.map((item, index) => (
                <TimelineCard 
                  key={item.id} 
                  className={`relative border-l-4 border-l-gradient-to-r ${item.color} animate-fade-in-left`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {!isMobile && (
                    <div className="absolute left-[-30px] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-2 border-white dark:border-gray-800 z-10 animate-pulse"></div>
                  )}
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h4>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.organization}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </TimelineCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ children, className, style }) => {
  return (
    <div className={`group ${className}`} style={style}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="h-1 w-full bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-indigo opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {children}
      </Card>
    </div>
  );
};

export default Education;
