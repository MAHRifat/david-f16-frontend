import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageGlow } from "@/components/layout/page-glow";
import { ConditionalLayout } from "@/components/layout/conditional-layout";
import { BackgroundGrid } from "@/components/layout/background-grid";
import { LightEffect } from "@/components/layout/light-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CapitalizeNow - Discover Polar Trends",
  description: "Real trends spotted by real people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <PageGlow />
        <BackgroundGrid />
        <LightEffect />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
