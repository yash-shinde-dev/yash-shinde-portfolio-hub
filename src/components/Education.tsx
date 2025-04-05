
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "Master of Computer Applications (M.C.A.)",
      institution: "MIT World Peace University",
      location: "Pune, Maharashtra",
      period: "August 2023 – June 2025",
      gpa: "7.08/10.00"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (B.C.A.)",
      institution: "HVPM Degree College Of Physical Education",
      location: "Amravati, Maharashtra",
      period: "June 2020 – July 2023",
      gpa: "8.16/10.00"
    }
  ];

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: "Core Team Member",
      organization: "Career Development Centre, MIT-WPU",
      location: "Pune, Maharashtra",
      period: "August 2024 – Present"
    },
    {
      id: 2,
      title: "Stage Committee Member",
      organization: "G20 Interfaith Forum, MIT ADT University",
      location: "Pune, Maharashtra",
      period: "September 2024"
    },
    {
      id: 3,
      title: "Student Council Member",
      organization: "HVPM",
      location: "Amravati, Maharashtra",
      period: "April 2022 – June 2023"
    },
    {
      id: 4,
      title: "Class Representative",
      organization: "HVPM",
      location: "Amravati, Maharashtra",
      period: "April 2022 – June 2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-portfolio-blue dark:text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="relative border-l-4 border-l-portfolio-blue dark:border-l-blue-600 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
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
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <Award className="h-6 w-6 mr-2 text-portfolio-blue dark:text-blue-400" />
              Extracurriculars & Leadership
            </h3>
            
            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="relative border-l-4 border-l-indigo-500 dark:border-l-indigo-600 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
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
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
