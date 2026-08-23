"use client";

import { useState, useRef, useEffect } from "react";

interface SnapAvatarProps {
  color?: string;
}

export default function SnapAvatar({ color = "#6366f1" }: SnapAvatarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize values (-1 to 1) and scale rotation angles (max 18 degrees)
    const rotateX = -(y / (box.height / 2)) * 18;
    const rotateY = (x / (box.width / 2)) * 18;

    // Shift inner layer for depth parallax (max 8px translation)
    const translateX = (x / (box.width / 2)) * 8;
    const translateY = (y / (box.height / 2)) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setTranslate({ x: translateX, y: translateY });
  };

  const handleMouseLeave = () => {
    // Reset smoothly to center
    setRotate({ x: 0, y: 0 });
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-44 h-44 md:w-48 md:h-48 rounded-full cursor-pointer select-none group"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 1. Interactive outer neon glow frame (scales up on hover) */}
      <div
        className="absolute -inset-1 rounded-full opacity-60 blur-md group-hover:opacity-85 group-hover:blur-lg transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          transform: "translateZ(-20px)", // Float behind the image
        }}
      />

      {/* 2. Base container window */}
      <div
        className="w-full h-full rounded-full border-2 border-background bg-card shadow-lg overflow-hidden relative flex items-center justify-center"
        style={{
          transform: "translateZ(10px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic gradient background behind avatar */}
        <div
          className="absolute inset-0 opacity-15 dark:opacity-25 transition-all duration-500"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          }}
        />

        {/* 3. High-Quality Snapchat avatar with translated parallax depth */}
        <img
          src="/javid-avatar.png"
          alt="Javid Akeel Custom Avatar"
          className="w-[108%] h-[108%] object-cover object-center max-w-none transition-all duration-150 ease-out select-none pointer-events-none"
          style={{
            transform: `scale(1.08) translate3d(${-translate.x}px, ${-translate.y}px, 20px)`,
          }}
        />
      </div>
    </div>
  );
}
