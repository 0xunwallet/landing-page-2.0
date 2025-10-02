"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import ZoomParallax from "@/components/zoom-parallax";
import TextAlongPath from "@/components/text-along-path";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Description />
      <ZoomParallax />
      <TextAlongPath />
    </main>
  );
}
