"use client";

import { useState } from "react";
import Image from "next/image";

type Partner = {
  name: string;
  logoSrc: string;
};

const PARTNERS: Partner[] = [
  { name: "Ethereum Foundation", logoSrc: "/chains/ethereum.png" },
  { name: "Arbitrum Foundation", logoSrc: "/chains/arbitrum.png" },
  { name: "Uniswap", logoSrc: "/protocols/uniswap.png" },
  { name: "Aave", logoSrc: "/protocols/aave.png" },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 pb-20">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-medium">
            Trusted Partners
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {PARTNERS.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white h-60 md:h-72 flex flex-col items-center justify-center group cursor-pointer relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex flex-col items-center gap-4 transition-transform duration-300"
                style={{
                  transform:
                    hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                }}
              >
                {/* Logo */}
                <div className="relative h-16 w-24">
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-medium text-gray-900 tracking-wide">
                  {partner.name}
                </p>
              </div>

              {/* Subtle background on hover */}
              <div
                className="absolute inset-0 bg-gray-50 transition-opacity duration-300 -z-10"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
