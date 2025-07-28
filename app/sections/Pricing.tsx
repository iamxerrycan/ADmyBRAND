"use client";

import { pricingTiers } from "../data/pricingData";
import { PricingCard } from "../cards/PricingCard";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-black py-24 px-6 md:px-16"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Choose the Right Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Flexible pricing options for individuals, startups, and enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <PricingCard
            key={index}
            title={tier.title}
            price={tier.price}
            features={tier.features}
            highlighted={tier.highlighted}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
