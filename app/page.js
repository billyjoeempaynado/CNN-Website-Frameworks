"use client";

import Hero from "./components/Hero";
import DescriptionBoxes from "./components/DescriptionBoxes";
import TradingPlatform from "./components/TradingPlatform";

export default function Home() {
  return (
    <main>
      <Hero />
      <DescriptionBoxes />
      <TradingPlatform />
    </main>
  );
}
