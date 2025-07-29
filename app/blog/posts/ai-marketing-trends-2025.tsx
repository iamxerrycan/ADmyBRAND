// app/blog/ai-marketing-trends-2025/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export default function BlogPost() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          5 AI Marketing Trends to Watch in 2025
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Discover how artificial intelligence is reshaping the digital marketing landscape in 2025.
        </p>

        <article className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-2">1. Hyper-Personalized Content</h2>
            <p>
              AI is enabling brands to deliver highly tailored content in real time, increasing engagement and conversions.
              From email campaigns to landing pages, machine learning helps analyze user behavior and adapt messaging accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2. Predictive Analytics for Campaigns</h2>
            <p>
              Marketers now use AI to forecast customer behavior and campaign success, enabling data-driven decision-making and resource allocation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3. AI-Generated Ad Copy & Creatives</h2>
            <p>
              Tools like GPT-4 and DALL·E allow marketers to create ad copy, visuals, and videos at scale, saving time and costs while enhancing creativity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4. Conversational AI in Customer Engagement</h2>
            <p>
              Chatbots and voice assistants powered by AI are improving customer service and lead generation, creating personalized and interactive experiences 24/7.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5. Automated A/B Testing</h2>
            <p>
              AI automates the process of A/B testing different versions of marketing elements, rapidly determining which version performs better with less manual effort.
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
