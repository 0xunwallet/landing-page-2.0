"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
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
    title: "Self-Custody",
    description:
      "You always control your funds. Even if UnWallet infrastructure goes down, access remains yours. Private keys never leave your control — we can't access your funds.",
    link: "https://docs.unwallet.io/",
    number: "01",
  },
  {
    title: "Modular Smart Account Kit",
    description:
      "Build faster with pre-existing modules. Import ready-made modules instead of building from scratch and stack them vertically to extend functionality.",
    link: "https://docs.unwallet.io/",
    number: "02",
  },
  {
    title: "Abstraction",
    description:
      "Focus on your agent, not the chain. Our unified SDK abstracts chains, tokens, and contracts, enabling cross-chain and multi-token operations out of the box.",
    link: "https://docs.unwallet.io/",
    number: "03",
  },
  {
    title: "Gas Sponsorship",
    description:
      "Pay once, use everywhere. Our paymaster covers gas for smart accounts while the facilitator handles x402-based payments cross-chain seamlessly.",
    link: "https://docs.unwallet.io/",
    number: "04",
  },
  {
    title: "Best DEVx",
    description:
      "All of this in under 50 lines of code. Our simple SDK setup enables quick integration, letting you build and deploy agentic wallets in minutes.",
    link: "https://docs.unwallet.io/",
    number: "05",
  },
  {
    title: "Opt-in Privacy",
    description:
      "Confidential by choice. Experience optional transactional privacy with stealth addresses and end-to-end encrypted communication for data sharing.",
    link: "https://docs.unwallet.io/",
    number: "06",
  },
  {
    title: "Verifiable & Secured",
    description:
      "AI inference and compute you can trust. Powered by EigenAI, our verifiable AI inference ensures integrity, security, and accountability in every transaction.",
    link: "https://docs.unwallet.io/",
    number: "07",
  },
  // {
  //   title: "Composability",
  //   description:
  //     "Built for interoperability. Compatible with standards like x402, A2P, and ERC-8004, UnWallet works seamlessly with other modular infrastructures.",
  //   link: "https://docs.unwallet.io/",
  //   number: "08",
  // },
];

const rightSideContent = [
  {
    title: "Self-Custody",
    paragraphs: [
      "You always control your funds. Even if <bold>UnWallet infrastructure</bold> goes down, access remains yours. <mono>Private keys</mono> never leave your control — we can't access your funds.",
      "<italic>Deterministic recovery</italic> ensures <bold>trust-minimized ownership</bold>, giving you complete peace of mind. Your assets are always accessible, no matter what happens to our infrastructure or services."
    ],
  },
  {
    title: "Modular Smart Account Kit",
    paragraphs: [
      "Build faster with <bold>pre-existing modules</bold>. Import ready-made modules instead of building from scratch and stack them vertically to extend functionality seamlessly.",
      "Save <bold>engineering time</bold> and reduce development costs significantly. Our <mono>modular architecture</mono> allows you to compose and customize components based on your specific needs without reinventing the wheel."
    ],
  },
  {
    title: "Abstraction",
    paragraphs: [
      "Focus on your agent, not the chain. Our <bold>unified SDK</bold> abstracts chains, tokens, and contracts, enabling <italic>cross-chain</italic> and multi-token operations out of the box.",
      "Agents can seamlessly transact across all <mono>EVM networks</mono> without worrying about underlying blockchain differences. Your application logic remains clean and focused while we handle the complexity of multi-chain interactions."
    ],
  },
  {
    title: "Gas Sponsorship",
    paragraphs: [
      "Pay once, use everywhere. Our <bold>paymaster</bold> covers gas for smart accounts while the facilitator handles <mono>x402-based payments</mono> cross-chain seamlessly.",
      "Let agents transact across networks without needing native gas on each chain. Our <italic>gas sponsorship infrastructure</italic> ensures efficient and cost-effective transactions, removing barriers to seamless cross-chain operations."
    ],
  },
  {
    title: "Best DEVx",
    paragraphs: [
      "All of this in <mono>under 50 lines of code</mono>. Our simple SDK setup enables quick integration, letting you build and deploy <bold>agentic wallets</bold> in minutes.",
      "Designed for <bold>speed, simplicity, and modular scaling</bold>. Get up and running quickly without sacrificing functionality or flexibility, allowing you to focus on innovation rather than boilerplate code."
    ],
  },
  {
    title: "Opt-in Privacy",
    paragraphs: [
      "Confidential by choice. Experience <italic>optional transactional privacy</italic> with <mono>stealth addresses</mono> and end-to-end encrypted communication for data sharing.",
      "Agents choose their level of <bold>transparency and security</bold> based on their specific requirements. Your data remains confidential while maintaining full compatibility with existing systems and protocols."
    ],
  },
  {
    title: "Verifiable & Secured",
    paragraphs: [
      "AI inference and compute you can trust. Powered by <bold>EigenAI</bold>, our <italic>verifiable AI inference</italic> ensures integrity, security, and accountability in every transaction.",
      "<mono>Stealth addresses</mono> and data are secured by Eigen Compute, providing cryptographic guarantees and transparent verification. Build with confidence knowing your operations are backed by <bold>verifiable, trustless infrastructure</bold>."
    ],
  },
  // {
  //   title: "Composability",
  //   paragraphs: [
  //     "Built for interoperability. Compatible with standards like <mono>x402</mono>, <mono>A2P</mono>, and <mono>ERC-8004</mono>, UnWallet works seamlessly with other <italic>modular infrastructures</italic>.",
  //     "Plug-and-play with existing agentic protocols and integrate with your current tech stack effortlessly. Our commitment to <bold>open standards</bold> means your investment in UnWallet grows more valuable as the ecosystem expands."
  //   ],
  // },
];

const FormatText = ({ text }: { text: string }) => {
  const parts = text.split(/(<bold>.*?<\/bold>|<italic>.*?<\/italic>|<mono>.*?<\/mono>)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith("<bold>")) {
      return <strong key={i} className="font-semibold">{part.replace(/<\/?bold>/g, "")}</strong>;
    }
    if (part.startsWith("<italic>")) {
      return <em key={i} className="italic">{part.replace(/<\/?italic>/g, "")}</em>;
    }
    if (part.startsWith("<mono>")) {
      return <code key={i} className="font-mono text-xs bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded">{part.replace(/<\/?mono>/g, "")}</code>;
    }
    return <span key={i}>{part}</span>;
  });
};

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
  progress: MotionValue<number>;
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
          className="w-[110%] h-full bg-foreground flex flex-col justify-between p-12"
        >
          {/* Top section */}
          <div className="flex items-start justify-between">
            <span className="text-[clamp(60px,12vw,120px)] font-light leading-none text-muted-foreground font-mono">
              {number}
            </span>
          </div>

          {/* Bottom section */}
          <div className="w-full">
            <h2 className="text-[clamp(28px,6vw,56px)] font-light leading-tight mb-4 tracking-tight text-muted break-words font-mono">
              {title}
            </h2>
            {/* <p className="text-[clamp(11px,1.2vw,16px)] text-muted font-light leading-relaxed max-w-[90%]">
              {description}
            </p> */}
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

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(imageScrollProgress, [0, 1], ["-10%", "10%"]);

  const targetScales = useMemo(
    () => projects.map((_, i) => Math.max(0.6, 1 - (projects.length - i) * 0.04)),
    []
  );

  return (
    <div className="relative">
      {/* Desktop Version - Hidden on Mobile */}
      <div className="hidden md:block">
        <div
          ref={imageContainerRef}
          className="relative flex items-center justify-center h-[690vh]"
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
                    range={[i * 0.12, 1]}
                    targetScale={targetScales[i]}
                  />
                ))}
              </main>

              {/* Right column - normal scrolling content (non-sticky) */}
              <aside className="w-[40vw] pt-[50vh] pb-[40vh] pr-20">
                <div className="space-y-0">
                  {rightSideContent.map((content, idx) => (
                    <section
                      key={idx}
                      className="h-[85vh] flex items-start justify-start"
                      style={{ paddingTop: "12.5vh" }}
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-light tracking-tight font-mono">
                          {content.title}
                        </h3>
                        {content.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="text-base leading-7 opacity-80">
                            <FormatText text={para} />
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Simple Content */}
      <div className="block md:hidden px-6 py-12 space-y-12">
        {rightSideContent.map((content, i) => (
          <div key={i} className="space-y-4">
            <span className="text-4xl font-light leading-none text-slate-500 font-mono">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="text-3xl font-light leading-tight tracking-tight">
              {content.title}
            </h2>
            {content.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="text-base leading-relaxed opacity-80">
                <FormatText text={para} />
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}