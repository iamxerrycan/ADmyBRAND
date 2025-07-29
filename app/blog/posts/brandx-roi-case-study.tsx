// app/blog/brandx-roi-case-study/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export default function BrandXCaseStudy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          How BrandX Increased ROI by 250% Using AI-Powered Marketing
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Discover how BrandX leveraged data, automation, and AI to transform its digital marketing strategy and drive massive growth.
        </p>

        <article className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-2">📊 Background</h2>
            <p>
              BrandX, a mid-sized eCommerce business, struggled to convert its traffic into loyal customers. Despite high ad spend, they weren’t seeing a strong return on investment (ROI).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🚀 The Challenge</h2>
            <p>
              Their main issues included low email open rates, high bounce rates on landing pages, and lack of personalization in their marketing strategy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🤖 The AI-Powered Solution</h2>
            <p>
              Partnering with ADmyBRAND, BrandX adopted an AI-powered marketing platform that offered:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Smart segmentation for customer profiles</li>
              <li>Predictive content recommendation</li>
              <li>Dynamic landing page generation</li>
              <li>Automated email personalization using GPT-based tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">📈 Results</h2>
            <p>
              Within 3 months of implementing the solution, BrandX saw:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>📬 70% increase in email open rates</li>
              <li>💰 250% increase in ROI</li>
              <li>🔁 3x improvement in customer retention</li>
              <li>📉 40% decrease in bounce rate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">💡 Takeaways</h2>
            <p>
              This case proves that AI doesn’t just automate—it accelerates. With the right strategy and tools, businesses like BrandX can scale rapidly while lowering marketing costs.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <Button onClick={() => router.back()} className="text-indigo-600 hover:underline bg-transparent p-0">
            ← Back to Insights
          </Button>
        </div>
      </div>
    </div>
  );
}
