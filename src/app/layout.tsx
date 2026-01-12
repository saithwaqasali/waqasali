import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Saith Waqas ali",
  description: "SSE & TL | Full-Stack Engineer (React.js, Next.js, Vue.js, Node.js, NestJS) | Web3 (Web3.js, Ethers.js, RainbowKit) | 3D & Motion (Three.js, GSAP, WebGPU) | AWS Certified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
