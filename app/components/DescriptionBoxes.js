"use client";

import { motion } from "framer-motion";
import { IoPhonePortraitOutline, IoPeopleOutline, IoAnalyticsOutline } from "react-icons/io5";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DescriptionBoxes() {
  const boxes = [
    {
      icon: <IoPhonePortraitOutline className="text-4xl text-green-600 mb-4 mx-auto" />,
      title: "PSE Online Platform",
      text: "Open an Online Trading account with the trading platform of the Philippine Stock Exchange. Reliable and designed for on-the-go traders.",
    },
    {
      icon: <IoPeopleOutline className="text-4xl text-green-600 mb-4 mx-auto" />,
      title: "Experienced Salesmen",
      text: "Open a Traditional account with our experts. Our salesmen have decades of experience and knowledge in the financial industry.",
    },
    {
      icon: <IoAnalyticsOutline className="text-4xl text-green-600 mb-4 mx-auto" />,
      title: "Fundamental Apiary",
      text: "Pair Technical Reports with fundamental recommendations to have a clear view of the standing of Philippine companies.",
    },
  ];

  return (
    <section className="section-3-description bg-gray-100 py-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {box.icon}
            <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              {box.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{box.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
