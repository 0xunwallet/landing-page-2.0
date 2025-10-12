"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Detect background color at button's position
    const detectBackgroundColor = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Hide button temporarily
      const originalDisplay = ref.current.style.display;
      ref.current.style.display = 'none';
      
      const elementBehind = document.elementFromPoint(centerX, centerY);
      
      ref.current.style.display = originalDisplay;
      
      if (!elementBehind) {
        return;
      }
      
      let element: HTMLElement | null = elementBehind as HTMLElement;
      let bgColor = '';
      let depth = 0;
      const maxDepth = 20;
      
      // Traverse up to find a background color
      while (element && depth < maxDepth) {
        const style = window.getComputedStyle(element);
        const bg = style.backgroundColor;
        
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          bgColor = bg;
          break;
        }
        element = element.parentElement;
        depth++;
      }
      
      if (!bgColor) {
        setIsDark(true);
        return;
      }
      
      // Calculate luminance
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        const newIsDark = luminance < 0.5;
        setIsDark(newIsDark);
      }
    };

    // Initial detection with delay to ensure DOM is ready
    const timer = setTimeout(detectBackgroundColor, 100);
    
    // Update on scroll with throttle
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(detectBackgroundColor, 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectBackgroundColor, { passive: true });
    
    // Also watch for theme changes
    const observer = new MutationObserver(() => {
      setTimeout(detectBackgroundColor, 50);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
      subtree: true,
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class', 'style'],
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectBackgroundColor);
      observer.disconnect();
    };
  }, []);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !mounted) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    const strength = 0.3;
    const maxOffset = 24;
    const nx = Math.max(-maxOffset, Math.min(maxOffset, middleX * strength));
    const ny = Math.max(-maxOffset, Math.min(maxOffset, middleY * strength));
    setPos({ x: nx, y: ny });
  };

  const reset = () => {
    if (mounted) setPos({ x: 0, y: 0 });
  };

  const buttonClasses = isDark
    ? "relative inline-flex items-center justify-center px-6 py-3  bg-black border border-white/20 text-white text-sm font-mono tracking-wider transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
    : "relative inline-flex items-center justify-center px-6 py-3  bg-white border text-black text-sm font-mono tracking-wider transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

  if (!mounted) {
    return (
      <div className="fixed top-10 right-10 z-[9999]">
        <div className="inline-block">
          <a href="https://app.unwallet.io" className={buttonClasses}>
            <span>Launch App</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-10 right-10 z-[9999]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={pos}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="inline-block"
        whileHover={{ scale: 1.05 }}
      >
        <a href="https://app.unwallet.io" className={buttonClasses}>
          <motion.span
            animate={pos}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
              mass: 0.12,
            }}
          >
            Launch App
          </motion.span>
        </a>
      </motion.div>
    </div>
  );
}