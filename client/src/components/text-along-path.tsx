"use client";

import { useEffect, useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi";

export default function TextAlongPath() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathsRef = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (e) => {
      pathsRef.current.forEach((path, i) => {
        if (path) {
          path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
        }
      });
    });

    return () => {
      unsubscribe?.();
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef}>
      {/* <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ fill: "red" }}>
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => {
                if (ref) pathsRef.current[i] = ref;
              }}
              startOffset={`${i * 40}%`}
              href="#curve"
            >
              Private crypto with auto yield
            </textPath>
          ))}
        </text>
      </svg> */}
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return (
    <div className="h-[250px] bg-black overflow-hidden relative">
      <motion.div
        style={{ y }}
        className="h-full bg-black flex justify-center gap-10 items-center p-10"
      >
        <Image
          width={80}
          height={80}
          key={`Unwallet Logo`}
          className="w-[80px] h-[80px]"
          src={`/unwallet-dark-logo.svg`}
          alt={`Unwallet Logo`}
        />
        <p className="text-white text-6xl font-bold font-mono">Unwallet</p>
      </motion.div>
      <Link
        href="https://x.com/rheolly"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 text-white font-mono hover:opacity-80 transition-all flex items-center gap-2"
      >
        <FaXTwitter className="text-white text-2xl md:text-xl" />
        <span className="hidden md:inline text-xl">@rheolly</span>
      </Link>
      <Link
        href="https://docs.unwallet.io"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 text-white font-mono hover:opacity-80 transition-all flex items-center gap-2"
      >
        <HiDocumentText className="text-white text-2xl md:text-xl" />
        <span className="hidden md:inline text-xl">docs.unwallet.io</span>
      </Link>
    </div>
  );
};
