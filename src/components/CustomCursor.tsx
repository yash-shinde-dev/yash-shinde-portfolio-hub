
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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
        className={`fixed w-5 h-5 rounded-full pointer-events-none z-50 transition-transform mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          backgroundColor: "white",
        }}
      ></div>
      <div
        className={`fixed rounded-full pointer-events-none z-50 transition-all duration-200 ease-out mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } ${linkHovered ? "bg-white scale-110" : "bg-transparent border-2 border-white"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transitionDuration: "150ms",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
