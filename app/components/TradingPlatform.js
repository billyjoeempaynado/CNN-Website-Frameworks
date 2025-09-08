"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TradingPlatform() {
  return (
    <section className="trading-platform py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Trading Platform
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Desktop Text */}
          <motion.div
            className="text-center md:text-left flex flex-col items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Web Desktop Platform
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
              CNNTrade is powered by PSETradex technology. It is the perfect
              solution for active traders. CNNTrade platform is in direct
              connection with the Philippine Stock Exchange servers to deliver
              real-time quotes and faster executions.
            </p>
          </motion.div>

          {/* Desktop Image with Circle Background */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-60 h-60 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 shadow-lg">
              <Image
                src="/assets/DESKTOP.png"
                width={200}
                height={200}
                alt="Desktop trading platform"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Mobile Image with Circle Background */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-60 h-60 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 shadow-lg">
              <Image
                src="/assets/phone.png"
                width={150}
                height={150}
                alt="Mobile trading app"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Mobile Text */}
          <motion.div
            className="text-center md:text-left flex flex-col items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Mobile Trading
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
              For Filipinos on-the-go. Our Mobile Trader has been designed to
              look, feel, and function like our CNNTrade platform, while offering
              the convenience of access from any smartphone or tablet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
