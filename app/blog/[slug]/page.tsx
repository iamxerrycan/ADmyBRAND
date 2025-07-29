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
    <div className="max-w-3xl mx-auto p-6">
      <Component />
    </div>
  );
}
