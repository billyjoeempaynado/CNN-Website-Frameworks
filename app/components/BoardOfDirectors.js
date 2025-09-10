"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BoardOfDirectors() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const people = [
    { name: "Georgie Cabo Cheng", role: "Nominee / Chairman", image: "/assets/President.jpg" },
    { name: "Malcolm Ng", role: "Director", image: "/assets/Malcolm_Ng_Gray.PNG" },
    { name: "Gianna Cabocheng", role: "Director", image: "/assets/Gianna_CaboCheng_Gray.PNG" },
    { name: "Ben Chua Javellana", role: "Independent Director", image: "/assets/Ben_Chua_Gray.PNG" },
    { name: "Stephanie Tan", role: "Independent Director", image: "/assets/Stephanie_Tan_Gray.PNG" },
    { name: "Janet Cabocheng", role: "Corporate Secretary", image: "/assets/Janet_CaboCheng_Gray.PNG" },
    { name: "Bongi Ng", role: "Treasurer", image: "/assets/Bongie_Ng_Gray.PNG" },
    { name: "May Magistrado", role: "Associated Person", image: "/assets/May-Magistrado.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
        >
          Board of Directors and Officers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {people.map((p, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center cursor-pointer group"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={140}
                height={140}
                className="rounded-full mx-auto object-cover border-4 border-gray-200 dark:border-gray-700 
                           transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {p.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
