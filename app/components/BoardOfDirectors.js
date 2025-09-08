"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BoardOfDirectors() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section-board py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100"
        >
          Board of Directors
        </motion.h2>

        {/* CEO */}
        <motion.div
          className="flex justify-center mb-10"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center">
            <Image
              src="/assets/President.jpg"
              alt="CEO"
              width={160}
              height={160}
              className="rounded-full object-cover mx-auto shadow-md"
            />
            <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Georgie Cabo Cheng
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Director</p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-center">
          {[
            { name: "Maria Santos", role: "Chief Financial Officer" },
            { name: "Jose Ramirez", role: "Chief Operating Officer" },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/blank profile.jpg"
                alt={person.name}
                width={160}
                height={160}
                className="rounded-full object-cover mx-auto shadow-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {person.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{person.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Ana Cruz", role: "Corporate Secretary" },
            { name: "Pedro Lopez", role: "Independent Director" },
            { name: "Sofia Reyes", role: "Board Member" },
          ].map((person, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/blank profile.jpg"
                alt={person.name}
                width={160}
                height={160}
                className="rounded-full object-cover mx-auto shadow-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {person.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
