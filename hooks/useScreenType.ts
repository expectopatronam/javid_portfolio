"use client";

import { useEffect, useState } from "react";

export interface ScreenInfo {
  device: "mobile" | "tablet" | "ipad" | "laptop" | "desktop";
  aspect: "4-3" | "16-10" | "16-9";
  width: number;
  height: number;
}

export function useScreenType(): ScreenInfo {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo>({
    device: "desktop",
    aspect: "16-9",
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ratio = w / h;

      // 1. Determine Device Category
      let device: ScreenInfo["device"] = "mobile";
      if (w >= 1440) {
        device = "desktop";
      } else if (w >= 1024) {
        device = "laptop";
      } else if (w >= 768) {
        device = "ipad";
      } else if (w >= 600) {
        device = "tablet";
      }

      // 2. Determine Aspect Ratio Category
      let aspect: ScreenInfo["aspect"] = "16-9";
      if (ratio < 1.4) {
        aspect = "4-3"; // e.g. 1024x768 (iPad classic)
      } else if (ratio < 1.6) {
        aspect = "16-10"; // e.g. MacBooks, 1920x1200 monitors
      } else {
        aspect = "16-9"; // e.g. 1920x1080 standard widescreen
      }

      setScreenInfo({ device, aspect, width: w, height: h });

      // 3. Inject CSS Classifiers to HTML Element
      const root = document.documentElement;
      
      // Clean previous screen type classes
      root.classList.remove(
        "screen-mobile",
        "screen-tablet",
        "screen-ipad",
        "screen-laptop",
        "screen-desktop",
        "ratio-4-3",
        "ratio-16-10",
        "ratio-16-9"
      );

      // Add active classifiers
      root.classList.add(`screen-${device}`);
      root.classList.add(`ratio-${aspect}`);
    };

    // Initialize immediately client-side
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenInfo;
}
