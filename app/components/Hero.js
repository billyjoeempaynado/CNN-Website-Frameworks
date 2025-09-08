"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
          <section className="mt-10 section-hero bg-gray-100 dark:bg-gray-900">
        <div className="hero grid md:grid-cols-2 gap-12 items-center container mx-auto px-6">
          {/* Text */}
          <motion.div
            className="hero-content-box text-center md:text-left flex flex-col items-center md:items-start"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-primary text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              CNN Securities
            </h1>
            <p className="hero-description text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-lg">
              Provides you with exclusive services to help you build and grow
              your wealth with the assistance of seasoned stock brokers who can
              provide insights and guidance to manage your investment portfolio.
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/forms"
                id="apply-now"
                className="btn btn--full bg-green-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-500 transition"
              >
                Open Account
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hero-img-box flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/Hero_image.png"
              width={500}
              height={400}
              alt="Hero illustration"
              className="hero-img rounded-lg"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}
