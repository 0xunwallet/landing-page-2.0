"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

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
    description:
      "Built for autonomous agents to transact seamlessly on-chain",
    link: "https://docs.unwallet.io/",
    number: "03",
  },
  {
    title: "For Merchants",
    description:
      "Accept crypto payments privately and protect customer data",
    link: "https://docs.unwallet.io/",
    number: "04",
  },
  {
    title: "x402 Protocol",
    description:
      "HTTP-native payments that settle in seconds with zero fees",
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
      className="h-[100vh] sticky top-40 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `-25%`,
          zIndex: projects.length - i,
          transformOrigin: "top center",
        }}
        className="relative w-[1200px] max-w-[92vw] rounded-none p-0 h-[700px]"
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

export default function CardsParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const targetScales = useMemo(
    () => projects.map((_, i) => 1 - (projects.length - i) * 0.05),
    []
  );

  return (
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
  );
}