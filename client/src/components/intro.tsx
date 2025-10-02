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

  return (
    <div className="h-screen overflow-hidden">
      <motion.div ref={containerRef} style={{ y }} className="relative h-full">
        <Image
          src={"/images/2.svg"}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
