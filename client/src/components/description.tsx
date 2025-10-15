import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Globe } from "./ui/globe";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatedList } from "./ui/animated-list";

export default function Description() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chains = [
    {
      name: "Ethereum",
      logo: "/chains/ethereum.png",
    },
    {
      name: "Arbitrum",
      logo: "/chains/arbitrum.png",
    },
    {
      name: "Base",
      logo: "/chains/base-chain.png",
    },
    {
      name: "Polygon",
      logo: "/chains/polygon.png",
    },
    {
      name: "Optimism",
      logo: "/chains/op.png",
    },
  ];

  const tokens = [
    { name: "USDC", logo: "/tokens/usdc.png" },
    { name: "USDT", logo: "/tokens/usdt.png" },
    { name: "DAI", logo: "/tokens/dai.png" },
    { name: "PAYPAL USD", logo: "/tokens/paypal.png" },
    { name: "GHO", logo: "/tokens/gho.png" },
    { name: "EURC", logo: "/tokens/eurc.png" },
  ];

  const protocols = [
    { name: "Aave", logo: "/protocols/aave.png" },
    { name: "Morpho", logo: "/protocols/morpho.png" },
    { name: "1inch", logo: "/protocols/1inch.png" },
    { name: "Across", logo: "/protocols/across.svg" },
    { name: "Avail", logo: "/protocols/Avail.avif" },
    { name: "Uniswap", logo: "/protocols/uniswap.png" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-20 py-8 md:py-0">
      <div className="w-full md:w-[90vw] md:max-w-[90vw] md:h-[75vh] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-auto md:auto-rows-fr">
        {/* Large card - top left with Globe */}
        <div
          className={`col-span-2 row-span-2 bg-black border border-black p-6 md:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          {/* Text Content with z-index */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-light text-white leading-none mb-2 md:mb-4 tracking-wider">
              Verifiable
            </h1>
            <p className="text-white text-sm md:text-lg opacity-80 mt-2 md:mt-4">
              Secured by <span className="font-mono">Eigen</span> Compute
              <br /> and <span className="font-mono">Eigen</span> AI
            </p>
          </div>

          {/* Globe centered at bottom-right corner */}
          <div
            className="absolute w-[600px] md:w-[800px] h-[200px] md:h-[300px] opacity-30"
            style={{
              right: "20%",
              bottom: "40%",
              transform: "translate(50%, 50%)",
            }}
          >
            <Globe />
          </div>

          {/* Counter with z-index */}
          <div className="flex justify-end mt-4 md:mt-0 relative z-10">
            <div className="text-white text-xs md:text-sm font-mono opacity-50">
              001
            </div>
          </div>
        </div>

        {/* Tall card - top right with AnimatedList */}
        <div
          className={`row-span-2 bg-white border border-black p-4 md:p-8 flex flex-col justify-between transition-all duration-1000 glow-effect overflow-hidden ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex-1 overflow-hidden">
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3 md:mb-4">
              Supported Chains
            </p>
            <div className="overflow-hidden h-full">
              <AnimatedList delay={800} className="gap-2">
                {chains.map((chain, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 md:gap-3 py-1"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                      <Image
                        src={chain.logo}
                        alt={chain.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium">
                      {chain.name}
                    </span>
                  </div>
                ))}
              </AnimatedList>
            </div>
          </div>
          <div className="text-right mt-3 md:mt-0 flex-shrink-0">
            <p className="text-xs text-neutral-400">+ More coming</p>
          </div>
        </div>

        {/* Small card - top right corner */}
        <div
          className={`bg-white border h-full min-h-[120px] md:min-h-full row-span-2 border-black p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 overflow-hidden flex items-center justify-center">
            <DotLottieReact
              src="/animations/eye.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <p className="text-xs uppercase tracking-wider text-neutral-400 mt-3 md:mt-4 text-center">
            Opt-in Privacy
          </p>
        </div>

        {/* Wide card - middle left with Marquee (Left to Right) */}
        <div
          className={`col-span-2 bg-white border border-black p-4 md:p-8 flex flex-col justify-between gap-3 md:gap-4 transition-all duration-1000 glow-effect overflow-hidden ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Supported Tokens
          </p>

          <div className="relative overflow-hidden flex items-center min-h-[50px] md:min-h-[60px]">
            <div className="marquee-container absolute inset-0 flex items-center">
              <div className="marquee-content flex items-center">
                {[...tokens, ...tokens, ...tokens].map((token, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 mx-4 md:mx-6 whitespace-nowrap"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                      <Image
                        src={token.logo}
                        alt={token.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium">
                      {token.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-neutral-400">+ ERC-20s</p>
          </div>
        </div>

        {/* Medium card - middle right with Marquee (Right to Left) */}
        <div
          className={`col-span-2 bg-neutral-50 border border-black p-4 md:p-8 flex flex-col justify-between gap-3 md:gap-4 transition-all duration-1000 glow-effect overflow-hidden ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Supported Protocols
          </p>

          <div className="relative overflow-hidden flex items-center min-h-[50px] md:min-h-[60px]">
            <div className="marquee-container-reverse absolute inset-0 flex items-center">
              <div className="marquee-content-reverse flex items-center">
                {[
                  ...protocols,
                  ...protocols,
                  ...protocols,
                  ...protocols,
                  ...protocols,
                  ...protocols,
                ].map((protocol, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 md:gap-3 mx-4 md:mx-6 whitespace-nowrap"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                      <Image
                        src={protocol.logo}
                        alt={protocol.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium">
                      {protocol.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-neutral-400">+ More coming</p>
          </div>
        </div>

        {/* Small accent card - bottom left */}
        <div
          className={`bg-black border col-span-2 md:col-span-1 border-black flex flex-col items-center justify-center min-h-[80px] md:min-h-0 transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Wide card - bottom */}
        <div
          className={`col-span-2 bg-white border border-black p-4 md:p-8 flex flex-col items-center justify-center min-h-[80px] md:min-h-0 transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
            Modular Smart Account SDK
          </p>
          <p className="text-xl md:text-3xl font-light text-center leading-relaxed">
            <span className="font-mono">Composable</span>
          </p>
        </div>

        {/* Small card - bottom right */}
        <div
          className={`col-span-2 md:col-span-1 bg-neutral-900 border border-black p-4 md:p-6 flex flex-col items-start justify-center min-h-[80px] md:min-h-0 transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-white font-mono w-full">
            <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-3">
              Supports
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
                <span className="text-sm md:text-base font-medium">x402</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
                <span className="text-sm md:text-base font-medium">AP2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.9),
            0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5),
            0 0 50px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.2),
            0 0 120px rgba(255, 255, 255, 0.15),
            0 0 160px rgba(255, 255, 255, 0.1),
            0 0 200px rgba(255, 255, 255, 0.08),
            0 0 250px rgba(255, 255, 255, 0.05),
            0 0 300px rgba(255, 255, 255, 0.03);
        }

        .marquee-container {
          width: 100%;
          height: 100%;
        }

        .marquee-content {
          display: flex;
          height: 100%;
          animation: marquee 20s linear infinite;
        }

        .marquee-container-reverse {
          width: 100%;
          height: 100%;
        }

        .marquee-content-reverse {
          display: flex;
          height: 100%;
          animation: marquee-reverse 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-container-reverse:hover .marquee-content-reverse {
          animation-play-state: paused;
        }

        @keyframes expand {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes growUp {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}
