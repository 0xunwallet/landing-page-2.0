import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-white flex items-center justify-center px-20">
      <div className="w-[90vw] max-w-[90vw] h-[75vh] grid grid-cols-4 gap-3">
        {/* Large card - top left */}
        <div
          className={`col-span-2 row-span-2 bg-black border border-black p-12 flex flex-col justify-between transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <div>
            <h1 className="text-7xl font-light text-white leading-none mb-4">
              Multi
              <br />
              Chain
            </h1>
            <p className="text-white text-lg opacity-80 mt-4">
              Any chain, any token, any protocol
            </p>
          </div>
          <div className="flex justify-end">
            <div className="text-white text-sm font-mono opacity-50">001</div>
          </div>
        </div>

        {/* Tall card - top right */}
        <div
          className={`row-span-2 bg-white border border-black p-8 flex flex-col justify-between transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-4">
              Supported Chains
            </p>
            <div className="space-y-4">
              {chains.map((chain, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={chain.logo}
                      alt={chain.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{chain.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-400">+ More coming</p>
          </div>
        </div>

        {/* Small card - top right corner */}
        <div
          className={`bg-white border h-full min-h-full row-span-2 border-black p-6 flex items-center justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <svg
            className="w-12 h-12"
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
        </div>

        {/* Wide card - middle left */}
        <div
          className={`col-span-2 bg-white border border-black p-8 flex items-center justify-between transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-4">
              Supported Tokens
            </p>
            <div className="flex gap-4">
              {tokens.map((token, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src={token.logo}
                      alt={token.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{token.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-400">+ ERC-20s</p>
          </div>
        </div>

        {/* Medium card - middle right */}
        <div
          className={`col-span-2 bg-neutral-50 border border-black p-8 flex flex-col justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-4">
              Supported Protocols
            </p>
            <div className="flex gap-6">
              {protocols.map((protocol, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={protocol.logo}
                      alt={protocol.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{protocol.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small accent card - bottom left */}
        <div
          className={`bg-black border border-black flex items-center justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <svg
            className="w-8 h-8 text-white"
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
          className={`col-span-2 bg-white border border-black p-8 flex items-center justify-center transition-all duration-1000 glow-effect ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-3xl font-light text-center leading-relaxed">
            Universal <span className="font-mono">Compatibility</span>
          </p>
        </div>

        {/* Small card - bottom right */}
        <div
          className={`bg-neutral-900 border border-black p-6 flex items-center justify-center transition-all duration-1000 glow-effect ${
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
