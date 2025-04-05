
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <Button
        variant="default"
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl bg-gradient-to-r from-portfolio-blue to-portfolio-indigo hover:from-portfolio-indigo hover:to-portfolio-blue text-white h-12 w-12 relative overflow-hidden group"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity"></span>
        <ChevronUp className="h-6 w-6 group-hover:animate-bounce" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
