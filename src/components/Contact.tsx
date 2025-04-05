
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Mouse move effect for card (desktop only)
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isMobile || !cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };
    
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset submitted state after showing success
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-portfolio-blue dark:text-blue-400" />,
      title: "Email",
      content: "yashshinde.dev@gmail.com",
      link: "mailto:yashshinde.dev@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6 text-portfolio-purple dark:text-purple-400" />,
      title: "Phone",
      content: "+91-940-410-7465",
      link: "tel:+919404107465",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MapPin className="h-6 w-6 text-portfolio-indigo dark:text-indigo-400" />,
      title: "Location",
      content: "Pune, Maharashtra, India",
      link: "https://maps.google.com/?q=Pune,Maharashtra,India",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to contact me through the form below or using my contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="animate-fade-in-up overflow-hidden" ref={cardRef}>
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-indigo"></div>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4 animate-bounce-in">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-focus-within:text-portfolio-blue dark:group-focus-within:text-blue-400 transition-colors">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full border-gray-300 dark:border-gray-700 focus:border-portfolio-blue dark:focus:border-blue-400 transition-colors"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-focus-within:text-portfolio-blue dark:group-focus-within:text-blue-400 transition-colors">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@example.com"
                          required
                          className="w-full border-gray-300 dark:border-gray-700 focus:border-portfolio-blue dark:focus:border-blue-400 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6 group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-focus-within:text-portfolio-blue dark:group-focus-within:text-blue-400 transition-colors">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                        className="w-full border-gray-300 dark:border-gray-700 focus:border-portfolio-blue dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                    
                    <div className="mb-6 group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 group-focus-within:text-portfolio-blue dark:group-focus-within:text-blue-400 transition-colors">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        className="min-h-[150px] w-full border-gray-300 dark:border-gray-700 focus:border-portfolio-blue dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto cta-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2 className="animate-spin mr-2 h-4 w-4" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full animate-fade-in-up animation-delay-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-indigo via-portfolio-purple to-portfolio-blue"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.title === "Location" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors group"
                    >
                      <div className={`flex-shrink-0 p-3 rounded-full bg-gradient-to-r ${info.color} text-white transform group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-portfolio-blue dark:group-hover:text-blue-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 transition-colors transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/yasssh-shinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-portfolio-blue hover:text-white dark:hover:bg-blue-600 transition-colors transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* 3D effect decoration */}
                {!isMobile && (
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="relative h-20 w-full overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-80"></div>
                      <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white/20 rounded-full"></div>
                      <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/20 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                        <p className="text-sm tracking-wider">Let's build something amazing!</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
