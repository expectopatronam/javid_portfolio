"use client";

import { useEffect, useState, useRef } from "react";

interface CodingCursorProps {
  color?: string;
}

export default function CodingCursor({ color = "#6366f1" }: CodingCursorProps) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer") !== null;
        setIsHovering(isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);

    // Smooth lerp loop for the trailing code follower
    const loop = () => {
      const lerp = 0.22;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      setPos({
        x: Math.round(currentPos.current.x * 10) / 10,
        y: Math.round(currentPos.current.y * 10) / 10,
      });

      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none transition-opacity duration-300"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        willChange: "transform",
      }}
    >
      {/* 1. Trailing Coding Glyph Badge */}
      <div
        className={`relative -top-2 -left-2 flex items-center justify-center transition-all duration-200 ease-out font-mono font-black ${
          isClicking
            ? "scale-75"
            : isHovering
            ? "scale-125"
            : "scale-100"
        }`}
      >
        {/* Soft Radial Backlight Glow */}
        <div
          className="absolute -inset-2 rounded-full blur-md opacity-40 transition-all duration-300"
          style={{ backgroundColor: color }}
        />

        {/* Coding symbol capsule */}
        <div
          className={`px-2 py-0.5 rounded-full border shadow-lg backdrop-blur-md flex items-center gap-1 transition-all duration-200 ${
            isHovering
              ? "bg-background/95 border-accent text-accent shadow-accent/30"
              : "bg-background/80 border-border text-foreground/80 shadow-xs"
          }`}
          style={{
            borderColor: isHovering ? color : undefined,
            color: isHovering ? color : undefined,
          }}
        >
          {isHovering ? (
            <span className="text-[11px] tracking-tight font-extrabold flex items-center">
              &lt;<span className="text-emerald-500">/</span>&gt;
            </span>
          ) : (
            <span className="text-[10px] tracking-widest font-extrabold opacity-90 flex items-center gap-0.5">
              <span>{`{`}</span>
              <span className="inline-block w-1.5 h-2.5 bg-accent/80 animate-pulse rounded-xs" style={{ backgroundColor: color }} />
              <span>{`}`}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
