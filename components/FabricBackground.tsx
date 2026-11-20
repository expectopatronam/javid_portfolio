"use client";

import { useEffect, useRef } from "react";

interface FabricBackgroundProps {
  color?: string;
}

interface Point {
  x: number;
  y: number;
  ox: number; // original rest X
  oy: number; // original rest Y
  vx: number;
  vy: number;
  mass: number;
}

export default function FabricBackground({ color = "#6366f1" }: FabricBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);

  // Keep color ref up to date
  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with velocity
    const mouse = {
      x: -1000,
      y: -1000,
      px: -1000,
      py: -1000,
      vx: 0,
      vy: 0,
      speed: 0,
      down: false,
    };

    // Responsive fabric mesh configuration
    let cols = Math.floor(Math.max(16, Math.min(42, width / 45)));
    let rows = Math.floor(Math.max(12, Math.min(30, height / 45)));
    let points: Point[][] = [];

    const initFabric = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.floor(Math.max(16, Math.min(42, width / 45)));
      rows = Math.floor(Math.max(12, Math.min(30, height / 45)));

      const spacingX = width / (cols - 1);
      const spacingY = height / (rows - 1);

      points = [];
      for (let r = 0; r < rows; r++) {
        const row: Point[] = [];
        for (let c = 0; c < cols; c++) {
          const x = c * spacingX;
          const y = r * spacingY;
          row.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            mass: 1.0,
          });
        }
        points.push(row);
      }
    };

    initFabric();

    const handleResize = () => {
      initFabric();
    };

    const handlePointerMove = (e: MouseEvent) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = (mouse.x - mouse.px) * 0.45;
      mouse.vy = (mouse.y - mouse.py) * 0.45;
      mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
    };

    const handlePointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.speed = 0;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    // Physics parameters for silk/fabric drape
    const damping = 0.915; // Air resistance / velocity decay
    const springK = 0.045; // Tension to return to rest position
    const neighborK = 0.06; // Structural tension between cloth threads
    const mouseRadius = 140; // Influence radius of cursor
    const maxDisplace = 55;

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Decaying mouse velocity
      mouse.vx *= 0.88;
      mouse.vy *= 0.88;
      mouse.speed *= 0.88;

      // 1. Physics update step
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];

          // Edge pins: borders stay mostly anchored to keep fabric framed
          const isEdge = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
          const pinFactor = isEdge ? 0.2 : 1.0;

          // Subtle ambient cloth wave (gentle wind/breathing)
          const ambientWaveX = Math.sin(time + r * 0.35 + c * 0.25) * 1.8;
          const ambientWaveY = Math.cos(time * 0.8 + c * 0.3) * 1.5;

          // Restitution force to original position
          const dxToOrigin = p.ox + ambientWaveX - p.x;
          const dyToOrigin = p.oy + ambientWaveY - p.y;
          p.vx += dxToOrigin * springK * pinFactor;
          p.vy += dyToOrigin * springK * pinFactor;

          // Spring forces to 4 orthogonal neighbors (warp & weft threads)
          if (c > 0) {
            const left = points[r][c - 1];
            p.vx += (left.x - p.x) * neighborK * 0.5 * pinFactor;
            p.vy += (left.y - p.y) * neighborK * 0.5 * pinFactor;
          }
          if (c < cols - 1) {
            const right = points[r][c + 1];
            p.vx += (right.x - p.x) * neighborK * 0.5 * pinFactor;
            p.vy += (right.y - p.y) * neighborK * 0.5 * pinFactor;
          }
          if (r > 0) {
            const up = points[r - 1][c];
            p.vx += (up.x - p.x) * neighborK * 0.5 * pinFactor;
            p.vy += (up.y - p.y) * neighborK * 0.5 * pinFactor;
          }
          if (r < rows - 1) {
            const down = points[r + 1][c];
            p.vx += (down.x - p.x) * neighborK * 0.5 * pinFactor;
            p.vy += (down.y - p.y) * neighborK * 0.5 * pinFactor;
          }

          // Mouse interaction (elastic push & drape ripple)
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (dist < mouseRadius && dist > 0.001) {
            const factor = Math.pow(1 - dist / mouseRadius, 1.8);
            // Push away along normal plus pull with mouse velocity
            const nx = mdx / dist;
            const ny = mdy / dist;
            const pushMagnitude = Math.min(maxDisplace, 42 * factor);

            p.vx += (nx * pushMagnitude + mouse.vx * 1.6 * factor) * pinFactor;
            p.vy += (ny * pushMagnitude + mouse.vy * 1.6 * factor) * pinFactor;
          }

          // Apply damping and integrate position
          p.vx *= damping;
          p.vy *= damping;
          p.x += p.vx;
          p.y += p.vy;
        }
      }

      // 2. Render Fabric Layer
      const currentColor = colorRef.current;
      ctx.lineWidth = 1.0;

      // Draw Weft (Horizontal threads of fabric)
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.moveTo(points[r][0].x, points[r][0].y);

        for (let c = 1; c < cols; c++) {
          const prev = points[r][c - 1];
          const curr = points[r][c];
          // Smooth spline curve between vertices
          const mx = (prev.x + curr.x) / 2;
          const my = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
        }
        ctx.lineTo(points[r][cols - 1].x, points[r][cols - 1].y);

        // Calculate average row displacement for dynamic cloth sheen
        let rowDisplacement = 0;
        for (let c = 0; c < cols; c += 2) {
          const p = points[r][c];
          rowDisplacement += Math.abs(p.vx) + Math.abs(p.vy);
        }
        const sheen = Math.min(0.24, 0.045 + (rowDisplacement / cols) * 0.08);

        ctx.strokeStyle = currentColor;
        ctx.globalAlpha = sheen;
        ctx.stroke();
      }

      // Draw Warp (Vertical threads of fabric)
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(points[0][c].x, points[0][c].y);

        for (let r = 1; r < rows; r++) {
          const prev = points[r - 1][c];
          const curr = points[r][c];
          const mx = (prev.x + curr.x) / 2;
          const my = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
        }
        ctx.lineTo(points[rows - 1][c].x, points[rows - 1][c].y);

        let colDisplacement = 0;
        for (let r = 0; r < rows; r += 2) {
          const p = points[r][c];
          colDisplacement += Math.abs(p.vx) + Math.abs(p.vy);
        }
        const sheen = Math.min(0.24, 0.045 + (colDisplacement / rows) * 0.08);

        ctx.strokeStyle = currentColor;
        ctx.globalAlpha = sheen;
        ctx.stroke();
      }

      // Draw subtle fabric weave intersection nodes that light up when touched
      ctx.globalAlpha = 1.0;
      for (let r = 1; r < rows - 1; r += 2) {
        for (let c = 1; c < cols - 1; c += 2) {
          const p = points[r][c];
          const vel = Math.abs(p.vx) + Math.abs(p.vy);

          if (vel > 0.35) {
            const glowAlpha = Math.min(0.55, (vel - 0.35) * 0.18);
            ctx.fillStyle = currentColor;
            ctx.globalAlpha = glowAlpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-15 w-full h-full pointer-events-none transition-opacity duration-1000"
    />
  );
}
