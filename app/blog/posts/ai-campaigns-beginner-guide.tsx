// app/blog/ai-campaigns-beginner-guide/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export default function AICampaignGuide() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Beginner’s Guide to Launching AI-Powered Marketing Campaigns
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Learn how to kickstart your first AI-driven marketing campaign—from planning to execution—with this step-by-step beginner guide.
        </p>

        <article className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-2">📍 Why Use AI in Marketing?</h2>
            <p>
              AI helps marketers save time, target audiences better, and improve ROI. With AI, even beginners can run smarter campaigns that personalize messaging, automate tasks, and track success with precision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">🧠 Step 1: Understand Your Goals</h2>
            <p>
              Begin by defining your campaign goals clearly. Are you trying to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Generate more leads?</li>
              <li>Increase website traffic?</li>
              <li>Improve customer retention?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">📊 Step 2: Gather and Segment Your Data</h2>
            <p>
              AI thrives on data. Start by collecting and segmenting data based on demographics, user behavior, and purchase history. Tools like ADmyBRAND automate this process using intelligent segmentation models.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">✍️ Step 3: Generate Personalized Content</h2>
            <p>
              Use GPT-based tools to generate email copy, ad headlines, or even entire landing pages. Personalized content has higher engagement and conversion rates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">⚙️ Step 4: Automate and Launch</h2>
            <p>
              Set up campaign triggers, drip emails, or social media posts using AI-driven automation tools. Schedule launch timings based on when your audience is most active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">📈 Step 5: Monitor & Optimize</h2>
            <p>
              AI dashboards offer real-time performance metrics. Monitor click-through rates (CTR), conversions, and engagement. Use this data to continuously improve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">✅ Final Thoughts</h2>
            <p>
              Launching your first AI campaign doesn’t require a team of engineers. With the right tools and this beginner roadmap, you can automate, personalize, and scale your marketing like a pro.
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
