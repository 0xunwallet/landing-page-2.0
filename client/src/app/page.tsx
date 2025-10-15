"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import TextAlongPath from "@/components/text-along-path";
import CardsParallax from "@/components/cards-parallax";
import ZoomParallax from "@/components/zoom-parallax";
import Partners from "@/components/partners";

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
      <Section />
      <Description />
      <CardsParallax />
      <Partners />
      <TextAlongPath />
      {/* <div className="h-screen"></div> */}
    </main>
  );
}
