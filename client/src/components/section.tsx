"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const containerRef = useRef<HTMLDivElement | null>(null);
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
        <div className="flex flex-col justify-end items-end">
        <p className="w-[40vw] text-[2vw] self-end mix-blend-difference text-right">
          Any Chain, Any Token, Any Protocol. 
        </p>
        <p className="w-[40vw] text-[2vw] self-end mix-blend-difference text-right">
        That too without any clicks
        </p>
        </div>
        <p className="text-[5vw] uppercase mix-blend-difference">Overview</p>
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
