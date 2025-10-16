"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Partner = {
  name: string;
  logoSrc: string;
  websiteLink: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Eigen Layer",
    logoSrc: "/images/eigen-layer.svg",
    websiteLink: "https://app.eigenlayer.xyz/",
  },
  {
    name: "Ethereum Foundation",
    logoSrc: "/images/ethereum-foundation.svg",
    websiteLink: "https://ethereum.foundation/",
  },
  {
    name: "Bond Credit",
    logoSrc: "/images/bond.credit.png",
    websiteLink: "https://bond.credit/",
  },
  {
    name: "Arbitrum Foundation",
    logoSrc: "/chains/arbitrum.png",
    websiteLink: "https://arbitrum.io/",
  },
  {
    name: "ZyFAI",
    logoSrc: "/images/zyfai.png",
    websiteLink: "https://www.zyf.ai/",
  },

  //   { name: "Aave", logoSrc: "/protocols/aave.png" },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 pb-20">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="text-2xl uppercase tracking-[0.2em] mb-4 font-medium text-center">
            Trusted Partners
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {PARTNERS.map((partner, index) => {
            const isColSpan2Needed =
              partner.name === "Bond Credit" ||
              partner.name === "ZyFAI" ||
              partner.name === "Ethereum Foundation";
            const isDarkBgNeeded =
              partner.name === "Eigen Layer" || partner.name === "ZyFAI";
            return (
              <Link
                href={partner.websiteLink}
                target="_blank"
                key={partner.name}
                className={`${
                  isDarkBgNeeded
                    ? "bg-black text-white"
                    : "bg-white text-gray-900 "
                } h-60 md:h-72 flex flex-col items-center justify-center group cursor-pointer col-span-2 md:col-span-1 relative ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center gap-4 transition-transform duration-300">
                  {/* Logo */}
                  <div
                    className={`relative h-16 w-28 ${
                      isColSpan2Needed ? "h-64 w-64" : ""
                    }`}
                  >
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  {!isColSpan2Needed && (
                    <p className="text-sm font-medium tracking-wide">
                      {partner.name}
                    </p>
                  )}
                </div>

                {/* Subtle background on hover */}
                <div
                  className="absolute inset-0 bg-gray-50 transition-opacity duration-300 -z-10"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
