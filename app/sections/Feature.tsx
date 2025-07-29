// components/Features/FeatureSection.tsx
"use client";

import { motion } from "framer-motion";
import FeatureCard from "../cards/FeatureCard"
import { features } from "../data/featuresData"

export default function FeatureSection() {
  return (
    <section
      id="feature"
      className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute w-96 h-96 bg-indigo-300 dark:bg-indigo-800 blur-[120px] rounded-full top-0 left-0" />
        <div className="absolute w-80 h-80 bg-pink-300 dark:bg-pink-700 blur-[120px] rounded-full bottom-0 right-0" />
      </div>

      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="relative text-center max-w-3xl mx-auto mb-16 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Powerful Features for Marketing Success
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Everything you need to run smarter, faster, and more efficient digital campaigns.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
