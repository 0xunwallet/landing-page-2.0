"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TypingText from "@/components/ui/typing-text";

export default function Section() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-end gap-4">
          <p className="md:w-[30vw] md:text-[4vw] text-6xl self-end mix-blend-difference text-right font-mono">
            Agent First
          </p>
          <p className="w-[40vw] text-[1.5vw] self-end mix-blend-difference text-right">
            Wallet that abstract the blockchain stack so you can focus on
            building agents
          </p>
        </div>
        <TypingTextBasic isVisible={isInView} />
      </div>
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
  );
}

const names = [
  "aixbt",
  "a16z",
  "chaingpt",
  "ella",
  "freysa",
  "mia",
  "vader",
  "simmi",
];

function TypingTextBasic({ isVisible }: { isVisible: boolean }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Reset the typing animation when component becomes visible
    setKey((prev) => prev + 1);
  }, [isVisible]);

  return (
    <div className="text-[5vw] mix-blend-difference">
      {isVisible && (
        <>
          <TypingText
            key={key}
            text={names}
            className="inline"
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={2000}
            loop={true}
          />
          <span className="inline">.wall8.eth</span>
        </>
      )}
    </div>
  );
}
