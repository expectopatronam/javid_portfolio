"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeBackgroundProps {
  color?: string;
}

export default function ThreeBackground({ color = "#6366f1" }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);

  // Dynamic color updating effect
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(color);
    }
  }, [color]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Track active DOM container
    const container = containerRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // 3. Renderer setup with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Create particles (Constellation)
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random coordinates in a 3D sphere/box
      positions[i] = (Math.random() - 0.5) * 60; // X
      positions[i + 1] = (Math.random() - 0.5) * 60; // Y
      positions[i + 2] = (Math.random() - 0.5) * 40; // Z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom circle particle texture using canvas
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Material setup (accent color glow)
    const material = new THREE.PointsMaterial({
      size: 0.8,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color(color),
    });

    // Store reference to update dynamically
    materialRef.current = material;

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 5. Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse positions relative to screen center (-1 to 1)
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Responsive resize listener
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth easing (interpolation) for mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate particle cloud gently
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      // Apply mouse movement parallax depth to scene
      scene.rotation.y = targetX * 0.3;
      scene.rotation.x = -targetY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Strict Cleanup Routine on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Free GPU memory resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      materialRef.current = null;

      // Safely remove canvas from container
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-40 dark:opacity-60"
    />
  );
}
