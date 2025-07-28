'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted: boolean;
  index: number;
}

export const PricingCard = ({
  title,
  price,
  features,
  highlighted,
  index,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative p-8 rounded-3xl border shadow-xl overflow-hidden transition-transform hover:scale-105 duration-300
        ${
          highlighted
            ? 'bg-white/70 dark:bg-white/10 backdrop-blur-md border-indigo-500 dark:border-indigo-400 shadow-indigo-500/30'
            : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
        }`}
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">
        {price}
        {price !== 'Custom' && (
          <span className="text-base font-medium text-gray-500 dark:text-gray-400">
            {' '}
            /mo
          </span>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 text-lg font-semibold rounded-xl transition-all duration-300
          ${
            highlighted
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
      >
        {price === 'Custom' ? 'Contact Us' : 'Get Started'}
      </button>
    </motion.div>
  );
};
