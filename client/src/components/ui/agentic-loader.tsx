"use client";

import { motion } from "framer-motion";
import { TextShimmerWave } from "./shimerwave";

export function AgenticLoader() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex items-center justify-center relative">
      {/* Bright glowing white background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl font-light text-gray-900 tracking-tight"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            Hang on
          </motion.h1>

          <TextShimmerWave className="font-mono text-sm" duration={1}>
            we&apos;re cooking this site
          </TextShimmerWave>
        </motion.div>
      </motion.div>
    </div>
  );
}
