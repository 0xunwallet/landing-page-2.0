"use client";
import { useEffect, useState } from "react";
import { AgenticLoader } from "./agentic-loader";

export function BgPreloader({ children }: { children: React.ReactNode }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const elementsWithBg =
        document.querySelectorAll<HTMLElement>("[data-bg-image]");
      const urls = Array.from(elementsWithBg)
        .map((el) => el.getAttribute("data-bg-image"))
        .filter((url) => url !== null) as string[];

      if (urls.length === 0) {
        // If there are no background images to preload, consider content ready.
        setImagesLoaded(true);
        return;
      }

      let loadedCount = 0;

      const handleLoad = () => {
        loadedCount += 1;
        if (loadedCount === urls.length) {
          setImagesLoaded(true);
        }
      };

      urls.forEach((url) => {
        const img = new Image();
        img.onload = handleLoad;
        img.onerror = handleLoad;
        img.src = url;
      });
    };

    preloadImages();
  }, []);

  if (!imagesLoaded) {
    return <AgenticLoader />;
  }

  return <>{children}</>;
}
