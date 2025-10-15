import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import MagneticButton from "@/components/magnetic-button";
import { BgPreloader } from "@/components/ui/bg-preloader";

const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Unwallet",
  description:
    "Agentic wallets for payments on any chain — built for agents, merchants, and users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${departureMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <MagneticButton />
        <BgPreloader>{children}</BgPreloader>
      </body>
    </html>
  );
}
