import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-black mb-8 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold text-black mb-6 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold text-black mb-4 leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg text-gray-800 leading-relaxed mb-6">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-lg leading-relaxed">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-6 py-2 mb-6 italic text-gray-700">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} block p-6`}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="rounded-lg overflow-x-auto mb-6 bg-[#0d1117]">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-black">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-800">
      {children}
    </em>
  ),
  hr: () => (
    <hr className="border-gray-300 my-8" />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const slug = (await params).slug;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | Jose Sanchez`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Writing
          </Link>
        </div>

        <article>
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl font-bold text-black leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none text-gray-800">
            <MDXRemote 
              source={post.content} 
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                }
              }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}