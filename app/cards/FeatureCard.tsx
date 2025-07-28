// components/Features/FeatureCard.tsx
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
};

export default function FeatureCard({ icon: Icon, title, desc, index }: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transform-gpu hover:translate-y-[-4px] transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative p-4 rounded-full bg-indigo-100 dark:bg-indigo-900 group-hover:scale-105 transition-transform">
          <div className="absolute inset-0 blur-md rounded-full bg-indigo-400/30 dark:bg-indigo-600/30 group-hover:scale-110" />
          <Icon className="relative w-7 h-7 text-indigo-600 dark:text-indigo-300 z-10" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
