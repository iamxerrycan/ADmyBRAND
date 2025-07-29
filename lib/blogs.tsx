import {BlogPost} from "@/app/types/blog";

export const blogPosts : BlogPost[] = [
  {
    slug: "ai-campaigns-beginner-guide",
    title: "Beginner’s Guide to Launching AI-Powered Campaigns",
    component: () => import("@/app/blog/posts/ai-campaigns-beginner-guide"),
  },
  {
    slug: "brandx-roi-case-study",
    title: "How BrandX Boosted ROI by 250% Using ADmyBRAND AI",
    component: () => import("@/app/blog/posts/brandx-roi-case-study"),
  },
  {
    slug: "ai-marketing-trends-2025",
    title: "5 AI Marketing Trends to Watch in 2025",
    component: () => import("@/app/blog/posts/ai-marketing-trends-2025"),
  },
];
