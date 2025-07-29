"use client";

import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const BlogSection = () => {
  const posts = [
     {
      title: "5 AI Marketing Trends to Watch in 2025",
      excerpt:
        "Explore the latest developments in AI that are transforming digital marketing campaigns across industries.",
      tag: "AI",
      link: "/blog/ai-marketing-trends-2025",
    },
    {
      title: "Case Study: How BrandX Increased ROI by 300%",
      excerpt:
        "Learn how BrandX used ADmyBRAND's platform to automate campaigns and optimize performance.",
      tag: "Case Study",
      link: "/blog/brandx-roi-case-study",
    },
    {
      title: "A Beginner’s Guide to AI-Powered Campaigns",
      excerpt:
        "Start your AI marketing journey with this step-by-step guide for small businesses and startups.",
      tag: "Guide",
      link: "/blog/ai-campaigns-beginner-guide",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Insights & Resources
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, idx) => (
          <Card key={idx} className="bg-white dark:bg-gray-800 shadow-lg p-6">
            <CardContent className="p-0">
              <Badge className="mb-3">{post.tag}</Badge>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Button variant="link" className="p-0 text-indigo-600">
                <a href={post.link}>Read more →</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
