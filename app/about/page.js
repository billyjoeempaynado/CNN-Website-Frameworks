"use client";

import Image from "next/image";
import BoardOfDirectors from "../components/BoardOfDirectors";
import TraderSection from "../components/TraderSection";


export default function AboutPage() {
  return (
    <main className="bg-gray-100 pt-20">
      {/* About Us Header */}
      <section className="section-about bg-gray-100 dark:bg-gray-900 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 ">About Us</h1>
        </div>
      </section>
        <BoardOfDirectors />
        <TraderSection />
    </main>
  );
}