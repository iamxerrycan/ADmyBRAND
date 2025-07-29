import { blogPosts } from '@/lib/blogs';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-10 text-red-500">404 - Blog not found</div>;
  }

  const Component = (await post.component()).default;

  return (
    <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black py-24 px-4 sm:px-6 lg:px-8"
>
      <Component />
    </div>
  );
}
