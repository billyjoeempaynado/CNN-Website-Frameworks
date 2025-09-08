"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 pt-24">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Downloadable Forms
        </h1>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="max-w-2xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Thank you for your interest in CNN Securities.
          <br />
          Please follow the steps below to complete your application:
        </p>

        <ol className="space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <span className="text-green-600 dark:text-green-400 font-bold mr-2">
              ✔
            </span>
            Download the application form below.
          </li>
          <li>
            <span className="text-green-600 dark:text-green-400 font-bold mr-2">
              ✔
            </span>
            Fill up all the required fields.
          </li>
          <li>
            <span className="text-green-600 dark:text-green-400 font-bold mr-2">
              ✔
            </span>
            Email the completed form with two valid IDs to{" "}
            <a
              href="mailto:info@cnnsecurities.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@cnnsecurities.com
            </a>
          </li>
        </ol>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Individual Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Individual Application
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Fill out this form if you are applying as an individual investor.
          </p>
          <Link
            href="/assets/Individual_Caif.pdf"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download Individual Form
          </Link>
        </motion.div>

        {/* Corporate Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Corporate Application
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Use this form if you are registering under a corporation or
            business.
          </p>
          <Link
            href="/assets/Corporate_Caif.pdf"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download Corporate Form
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
