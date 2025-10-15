"use client";
import imagePromise from 'image-promise';
import { useEffect, useState } from 'react';
import { AgenticLoader } from './agentic-loader';

export function BgPreloader({ children }: { children: React.ReactNode }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const elementsWithBg = document.querySelectorAll<HTMLElement>("[data-bg-image]");
    const urls = Array.from(elementsWithBg)
      .map((el) => el.getAttribute("data-bg-image"))
      .filter((url) => url !== null) as string[];

    if (urls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    Promise.all(urls.map(url => imagePromise(url)))
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return <AgenticLoader />;
  }

  return <>{children}</>;
}