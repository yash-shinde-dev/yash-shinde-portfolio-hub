
import React, { useEffect, useState, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      const mousePosX = clientX;
      const mousePosY = clientY;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.top = `${mousePosY}px`;
        cursorDotRef.current.style.left = `${mousePosX}px`;
      }
      
      if (cursorRingRef.current) {
        // Add a slight delay to the ring for a smoother trailing effect
        setTimeout(() => {
          if (cursorRingRef.current) {
            cursorRingRef.current.style.top = `${mousePosY}px`;
            cursorRingRef.current.style.left = `${mousePosX}px`;
          }
        }, 50);
      }
      
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A" || 
          (e.target as HTMLElement).tagName === "BUTTON" ||
          (e.target as HTMLElement).closest("a") ||
          (e.target as HTMLElement).closest("button") ||
          (e.target as HTMLElement).classList.contains("cursor-pointer")) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleLinkHoverStart);
    document.addEventListener("mouseout", handleLinkHoverEnd);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleLinkHoverStart);
      document.removeEventListener("mouseout", handleLinkHoverEnd);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const cursorSize = linkHovered ? 40 : 20;
  const cursorScale = clicked ? 0.8 : 1;

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`fixed w-5 h-5 rounded-full pointer-events-none z-50 transition-opacity mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : ""}`}
        style={{
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          backgroundColor: "white",
          transition: "opacity 0.3s ease, transform 0.2s ease",
          willChange: "transform, opacity"
        }}
      ></div>
      <div
        ref={cursorRingRef}
        className={`fixed rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } ${linkHovered ? "bg-white scale-110" : "bg-transparent border-2 border-white"}`}
        style={{
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transition: "width 0.3s ease, height 0.3s ease, transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease",
          willChange: "transform, width, height, background-color, opacity"
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
