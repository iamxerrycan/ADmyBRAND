"use client";

import { useState } from "react";
import { FaqCard } from "../cards/FaqCard";
import { faqs } from "../data/FaqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black py-24 px-4 sm:px-6 lg:px-8"
>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">FAQs</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Common questions about our product and services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <FaqCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
