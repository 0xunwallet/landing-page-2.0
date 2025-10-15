"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-20vh"]);

  return (
    <div className="h-screen overflow-hidden relative">
      <motion.div ref={containerRef} style={{ y }} className="relative h-full">
        <Image
          src={"/images/2.png"}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
          draggable={false}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Bottom centered minimal text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute bottom-20 left-0 right-0 flex justify-center pb-16 md:pb-20 lg:pb-24"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-light text-white leading-[0.85] tracking-tight"
            >
              {/* <span className="drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]">
                Agentic
              </span> */}
              <p className="font-mono text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                Agentic Wallets
              </p>
              <p className="w-full text-center">
                Wallets that can do anything, and everything.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
