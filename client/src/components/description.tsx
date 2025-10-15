import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Globe } from "./ui/globe";

export default function Description() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chains = [
    { name: "Ethereum", logo: "/chains/ethereum.png" },
    { name: "Polygon", logo: "/chains/polygon.png" },
    { name: "Base", logo: "/chains/base-chain.png" },
  ];

  const tokens = [
    { name: "USDC", logo: "/tokens/usdc.png" },
    { name: "USDT", logo: "/tokens/usdt.png" },
    { name: "DAI", logo: "/tokens/dai.png" },
  ];

  const protocols = [
    { name: "Aave", logo: "/protocols/aave.png" },
    { name: "Morpho", logo: "/protocols/morpho.png" },
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
              Secured by <span className="font-mono">Eigen</span> Compute and <span className="font-mono">Eigen</span> AI
            </p>
          </div>

          {/* Globe centered at bottom-right corner */}
          <div
            className="absolute w-[600px] md:w-[800px] h-[200px] md:h-[300px] opacity-30"
            style={{
              right: "15%",
              bottom: "25%",
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

        {/* Tall card - top right */}
        <div
          className={`row-span-2 bg-white border border-black p-4 md:p-8 flex flex-col justify-between transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3 md:mb-4">
              Supported Chains
            </p>
            <div className="space-y-3 md:space-y-4">
              {chains.map((chain, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 relative">
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
            </div>
          </div>
          <div className="text-right mt-3 md:mt-0">
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
          <svg
            className="w-8 h-8 md:w-12 md:h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <p className="text-xs uppercase tracking-wider text-neutral-400 mt-3 md:mt-4 text-center">
            Supported Protocol
          </p>
        </div>

        {/* Wide card - middle left */}
        <div
          className={`col-span-2 bg-white border border-black p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-">
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3 md:mb-4">
              Supported Tokens
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {tokens.map((token, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
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
          <div className="text-right w-full md:w-auto">
            <p className="text-xs text-neutral-400 w-full">+ ERC-20s</p>
          </div>
        </div>

        {/* Medium card - middle right */}
        <div
          className={`col-span-2 bg-neutral-50 border border-black p-4 md:p-8 flex flex-col justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3 md:mb-4">
              Supported Protocols
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {protocols.map((protocol, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 relative">
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
          <p className="text-white text-xs mt-2 opacity-70">agent &lt;&gt; agent visual image</p>
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
            Universal <span className="font-mono">Compatibility</span>
          </p>
        </div>

        {/* Small card - bottom right */}
        <div
          className={`col-span-2 md:col-span-1  bg-neutral-900 border border-black p-4 md:p-6 flex flex-col items-center justify-center min-h-[80px] md:min-h-0 transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-white text-xs font-mono text-center">
            <div>MULTI</div>
            <div className="mt-1 opacity-50">CHAIN</div>
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