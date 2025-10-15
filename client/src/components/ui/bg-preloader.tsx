"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AgenticLoader } from "@/components/ui/agentic-loader";

type BgPreloaderProps = {
  children: ReactNode;
};

export function BgPreloader({ children }: BgPreloaderProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const elementsWithBg =
      document.querySelectorAll<HTMLElement>("[data-bg-image]");
    let loadedCount = 0;
    const totalImages = elementsWithBg.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    const imageElements: HTMLImageElement[] = [];
    elementsWithBg.forEach((element) => {
      const bgUrl = element.getAttribute("data-bg-image");
      if (!bgUrl) {
        handleImageLoad();
        return;
      }
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // consider errored images as loaded to avoid blocking UI
      img.src = bgUrl;
      imageElements.push(img);
    });

    return () => {
      // Best-effort cleanup
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  if (!imagesLoaded) {
  // if (true) {
    return <AgenticLoader />;
  }

  return <>{children}</>;
}
