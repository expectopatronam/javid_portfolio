"use client";

import { useEffect, useRef } from "react";

interface ThreeBackgroundProps {
  color?: string;
}

// Floating code symbols that drift upward like gentle digital rain
const CODE_SYMBOLS = [
  "{}", "</>", "=>", "( )", "[ ]", "//", "&&", "||",
  "fn", "if", "0x", "<<", ">>", "::", "++", "!=",
  "/*", "*/", "??", "...", "$_", "#!", "@", "~/",
];

interface FloatingSymbol {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  maxOpacity: number;
  size: number;
  drift: number;
  driftSpeed: number;
  phase: number;
}

export default function ThreeBackground({ color = "#6366f1" }: ThreeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  const animFrameRef = useRef<number>(0);

  // Update color ref without re-mounting the canvas
  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sizing
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create symbol pool
    const symbolCount = 35;
    const symbols: FloatingSymbol[] = [];

    const spawnSymbol = (randomY = true): FloatingSymbol => {
      const text = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
      return {
        text,
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + 20,
        speed: 0.15 + Math.random() * 0.35, // Very slow upward drift
        opacity: 0,
        maxOpacity: 0.04 + Math.random() * 0.06, // Extremely subtle (4-10%)
        size: 10 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 0.3, // Gentle horizontal sway
        driftSpeed: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < symbolCount; i++) {
      symbols.push(spawnSymbol(true));
    }

    // Animation loop
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now() / 1000;

      for (let i = 0; i < symbols.length; i++) {
        const s = symbols[i];

        // Move upward
        s.y -= s.speed;

        // Gentle horizontal sine sway
        const swayX = Math.sin(now * s.driftSpeed + s.phase) * 15;

        // Fade in at bottom, fade out at top
        const distFromBottom = canvas.height - s.y;
        const distFromTop = s.y;
        const fadeZone = canvas.height * 0.2;

        if (distFromBottom < fadeZone) {
          s.opacity = (distFromBottom / fadeZone) * s.maxOpacity;
        } else if (distFromTop < fadeZone) {
          s.opacity = (distFromTop / fadeZone) * s.maxOpacity;
        } else {
          s.opacity = s.maxOpacity;
        }

        // Recycle if off-screen
        if (s.y < -30) {
          Object.assign(s, spawnSymbol(false));
        }

        // Draw
        ctx.save();
        ctx.globalAlpha = Math.max(0, s.opacity);
        ctx.fillStyle = colorRef.current;
        ctx.font = `${s.size}px "Geist Mono", ui-monospace, monospace`;
        ctx.textAlign = "center";
        ctx.fillText(s.text, s.x + swayX + s.drift, s.y);
        ctx.restore();
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-20 w-full h-full pointer-events-none"
    />
  );
}
