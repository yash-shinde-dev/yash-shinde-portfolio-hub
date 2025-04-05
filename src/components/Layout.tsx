
import React, { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CustomCursor from "./CustomCursor";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTouchDetect } from "@/hooks/use-touch-detect";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  useTouchDetect();
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isMobile && <CustomCursor />}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
