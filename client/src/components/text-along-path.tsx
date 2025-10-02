"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextAlongPath() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathsRef = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (e) => {
      pathsRef.current.forEach((path, i) => {
        path.setAttribute("startOffset", `${-40 + i * 40 + e * 40}%`);
      });
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const logosY = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div ref={containerRef}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
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
              Curabitur mattis efficitur velit
            </textPath>
          ))}
        </text>
      </svg>
      <Logos y={logosY.get()} />
    </div>
  );
}

function Logos({ y }: { y: number }) {
  return (
    <div className="h-[250px] bg-black overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full bg-black flex justify-center gap-10 items-center p-10"
      >
        {[...Array(5)].map((_, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`img_${i}`}
            className="w-[80px] h-[80px]"
            src={`/medias/${i + 1}.jpg`}
            alt="logo"
          />
        ))}
      </motion.div>
    </div>
  );
}
