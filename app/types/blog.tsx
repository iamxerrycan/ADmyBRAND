import type { FC } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  component: () => Promise<{ default: FC }>;
};
