"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: "/images/1.jpeg", scale: scale4 },
    { src: "/images/2.jpeg", scale: scale5 },
    { src: "/images/3.jpg", scale: scale6 },
    { src: "/images/4.jpg", scale: scale5 },
    { src: "/images/5.jpg", scale: scale6 },
    { src: "/images/6.jpg", scale: scale8 },
    { src: "/images/7.jpeg", scale: scale9 },
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className={
                // base frame
                "relative w-[25vw] h-[25vh] " +
                // nth-child-esque offsets using Tailwind arbitrary selectors via group
                // emulate SCSS nth-of-type rules
                (index === 1
                  ? " -top-[30vh] left-[5vw] w-[35vw] h-[30vh]"
                  : "") +
                (index === 2
                  ? " -top-[10vh] -left-[25vw] w-[20vw] h-[45vh]"
                  : "") +
                (index === 3 ? " left-[27.5vw] w-[25vw] h-[25vh]" : "") +
                (index === 4
                  ? " top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]"
                  : "") +
                (index === 5
                  ? " top-[27.5vh] -left-[22.5vw] w-[30vw] h-[25vh]"
                  : "") +
                (index === 6
                  ? " top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]"
                  : "")
              }
            >
              <Image
                src={src}
                fill
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
