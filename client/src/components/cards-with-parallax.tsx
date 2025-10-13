"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  link: string;
  number: string;
};

const projects: Project[] = [
  {
    title: "Private Payments",
    description:
      "Stealth address technology that keeps your transactions confidential",
    link: "https://docs.unwallet.io/",
    number: "01",
  },
  {
    title: "Auto-Yield",
    description:
      "Your funds automatically generate yield without manual intervention",
    link: "https://docs.unwallet.io/",
    number: "02",
  },
  {
    title: "AI Agents",
    description: "Built for autonomous agents to transact seamlessly on-chain",
    link: "https://docs.unwallet.io/",
    number: "03",
  },
  {
    title: "For Merchants",
    description: "Accept crypto payments privately and protect customer data",
    link: "https://docs.unwallet.io/",
    number: "04",
  },
  {
    title: "x402 Protocol",
    description: "HTTP-native payments that settle in seconds with zero fees",
    link: "https://docs.unwallet.io/",
    number: "05",
  },
];

function Card({
  i,
  title,
  description,
  url,
  number,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  url: string;
  number: string;
  progress: import("framer-motion").MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, 0]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] sticky top-40 flex items-center justify-end pr-20"
    >
      <motion.div
        style={{
          scale,
          top: `-25%`,
          zIndex: projects.length - i,
          transformOrigin: "top center",
        }}
        className="relative w-[40vw] rounded-none p-0 h-[700px]"
      >
        <motion.div
          style={{ rotate }}
          className="w-full h-full bg-foreground flex flex-col justify-between p-12 rounded-[2rem]"
        >
          {/* Top section */}
          <div className="flex items-start justify-between">
            <span className="text-[120px] font-light leading-none text-muted-foreground">
              {number}
            </span>
            <a
              href={url}
              target="_blank"
              className="text-sm tracking-wider uppercase transition-opacity hover:opacity-50 text-muted-foreground"
            >
              View
            </a>
          </div>

          {/* Bottom section */}
          <div>
            <h2 className="text-[64px] font-light leading-none mb-4 tracking-tight text-muted">
              {title}
            </h2>
            <p className="text-lg text-muted max-w-[500px] font-light">
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CardsWithParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(imageScrollProgress, [0, 1], ["-10%", "10%"]);

  const targetScales = useMemo(
    () => projects.map((_, i) => 1 - (projects.length - i) * 0.05),
    []
  );

  return (
    <div className="relative">
      {/* Image Parallax Section - No Text Overlay */}
      <div
        ref={imageContainerRef}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image
              src={"/images/1.png"}
              fill
              alt="image"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <main ref={containerRef} className="mt-[50vh] pb-[40vh] relative">
        {projects.map((project, i) => (
          <Card
            key={`p_${i}`}
            i={i}
            title={project.title}
            description={project.description}
            url={project.link}
            number={project.number}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScales[i]}
          />
        ))}
      </main>
    </div>
  );
}

