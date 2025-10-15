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

const mobileContent = [
  {
    title: "Complete Transaction Privacy",
    description: "Unwallet implements ERC-5564 stealth addresses to ensure your on-chain activity remains unlinkable and confidential. Every transaction creates a unique, one-time address that protects your financial privacy while maintaining full compatibility with existing wallet infrastructure.",
  },
  {
    title: "Passive Income Made Simple",
    description: "Your funds work for you automatically. Unwallet's modular architecture includes intelligent yield optimization modules that deploy your assets across the best DeFi protocols without any manual intervention.",
  },
  {
    title: "Built for Autonomous Agents",
    description: "Unwallet is the first agent-first wallet SDK, designed from the ground up for AI agents to transact on-chain. With ERC-7579 and ERC-4337 smart account infrastructure, agents can execute complex operations with minimal gas overhead.",
  },
  {
    title: "Privacy-First Commerce",
    description: "Accept crypto payments while protecting your customers' financial data. Unwallet's stealth address technology ensures every transaction is unlinkable, giving your customers the privacy they deserve without sacrificing functionality.",
  },
  {
    title: "Instant, Feeless Settlement",
    description: "The X402 protocol brings HTTP-native payments to the blockchain. Payments settle in seconds with zero fees, enabling micropayments and streaming money applications that were previously impossible.",
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
      className="h-[85vh] sticky top-60 flex items-center justify-start pl-20"
    >
      <motion.div
        style={{
          scale,
          top: `-25%`,
          zIndex: projects.length - i,
          transformOrigin: "top center",
        }}
        className="relative w-[30vw] rounded-none p-0 h-[700px]"
      >
        <motion.div
          style={{ rotate }}
          className="w-full h-full bg-foreground flex flex-col justify-between p-12"
        >
          {/* Top section */}
          <div className="flex items-start justify-between">
            <span className="text-[120px] font-light leading-none text-muted-foreground font-mono">
              {number}
            </span>
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
      {/* Desktop Version - Hidden on Mobile */}
      <div className="hidden md:block">
        <div
          ref={imageContainerRef}
          className="relative flex items-center justify-center h-[600vh]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          {/* Background Image */}
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

          {/* Overlay layout: left sticky cards, right normal content */}
          <div className="absolute inset-0 z-10 w-full h-full">
            <div className="flex w-full h-full">
              {/* Left column - cards (sticky inside each card) */}
              <main ref={containerRef} className="w-[60vw] mt-[50vh] pb-[40vh]">
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

              {/* Right column - normal scrolling content (non-sticky) */}
              <aside className="w-[40vw] pt-[50vh] pb-[40vh] pr-20">
                <div className="space-y-0">
                  <section
                    className="h-[85vh] flex items-start justify-start"
                    style={{ paddingTop: "12.5vh" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-tight">
                        Complete Transaction Privacy
                      </h3>
                      <p className="text-sm leading-7 opacity-80">
                        Unwallet implements ERC-5564 stealth addresses to ensure
                        your on-chain activity remains unlinkable and
                        confidential. Every transaction creates a unique, one-time
                        address that protects your financial privacy while
                        maintaining full compatibility with existing wallet
                        infrastructure.
                      </p>
                      <p className="text-sm leading-7 opacity-80">
                        Private keys are constructed and managed locally, never
                        leaving your device. We use Eigen Compute only for
                        verifiable stealth address generation, ensuring
                        trust-minimized privacy without compromising security.
                      </p>
                    </div>
                  </section>

                  <section
                    className="h-[85vh] flex items-start justify-start"
                    style={{ paddingTop: "12.5vh" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-tight">
                        Passive Income Made Simple
                      </h3>
                      <p className="text-sm leading-7 opacity-80">
                        Your funds work for you automatically. Unwallet&apos;s modular
                        architecture includes intelligent yield optimization
                        modules that deploy your assets across the best DeFi
                        protocols without any manual intervention.
                      </p>
                      <p className="text-sm leading-7 opacity-80">
                        Set it and forget it. Our automated savings and
                        revenue-sharing modules ensure your idle assets generate
                        returns while you focus on what matters. All yield
                        strategies are customizable and fully transparent.
                      </p>
                    </div>
                  </section>

                  <section
                    className="h-[85vh] flex items-start justify-start"
                    style={{ paddingTop: "12.5vh" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-tight">
                        Built for Autonomous Agents
                      </h3>
                      <p className="text-sm leading-7 opacity-80">
                        Unwallet is the first agent-first wallet SDK, designed
                        from the ground up for AI agents to transact on-chain.
                        With ERC-7579 and ERC-4337 smart account infrastructure,
                        agents can execute complex operations with minimal gas
                        overhead.
                      </p>
                      <p className="text-sm leading-7 opacity-80">
                        Support for X402 and ERC-8004 standards enables
                        HTTP-native payments and programmable agentic operations.
                        Agents can batch transactions, manage multi-chain
                        deployments, and interact with any DeFi protocol
                        seamlessly.
                      </p>
                    </div>
                  </section>

                  <section
                    className="h-[85vh] flex items-start justify-start"
                    style={{ paddingTop: "12.5vh" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-tight">
                        Privacy-First Commerce
                      </h3>
                      <p className="text-sm leading-7 opacity-80">
                        Accept crypto payments while protecting your customers&apos;
                        financial data. Unwallet&apos;s stealth address technology
                        ensures every transaction is unlinkable, giving your
                        customers the privacy they deserve without sacrificing
                        functionality.
                      </p>
                      <p className="text-sm leading-7 opacity-80">
                        Integrate seamlessly with existing payment flows. Our
                        modular SDK provides 30+ customizable modules for token
                        swapping, cross-chain settlements, and automated revenue
                        management—all while maintaining complete transaction
                        privacy.
                      </p>
                    </div>
                  </section>

                  <section
                    className="h-[85vh] flex items-start justify-start"
                    style={{ paddingTop: "12.5vh" }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light tracking-tight">
                        Instant, Feeless Settlement
                      </h3>
                      <p className="text-sm leading-7 opacity-80">
                        The X402 protocol brings HTTP-native payments to the
                        blockchain. Payments settle in seconds with zero fees,
                        enabling micropayments and streaming money applications
                        that were previously impossible.
                      </p>
                      <p className="text-sm leading-7 opacity-80">
                        True chain and token abstraction means agents can store
                        funds on any chain and spend them on another. Swap between
                        any tokens seamlessly, with gas abstraction handled by
                        hosted paymasters across all major chains.
                      </p>
                    </div>
                  </section>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Simple Content */}
      <div className="block md:hidden px-6 py-12 space-y-12">
        {mobileContent.map((content, i) => (
          <div key={i} className="space-y-4">
            <span className="text-4xl font-light leading-none text-muted-foreground font-mono">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="text-3xl font-light leading-tight tracking-tight">
              {content.title}
            </h2>
            <p className="text-base leading-relaxed opacity-80">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}