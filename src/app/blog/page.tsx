import { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, Clock, ArrowRight, User, Calendar, TrendingUp } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateBlogListSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Tools Blog - News, Reviews & Tutorials',
  description: 'Stay updated with the latest AI news, tool reviews, tutorials, and industry insights. Learn how to use AI tools effectively.',
  keywords: ['AI blog', 'AI news', 'AI tutorials', 'AI tool reviews', 'artificial intelligence'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'AI Tools Blog - News, Reviews & Tutorials',
    description: 'Stay updated with the latest AI news, tool reviews, tutorials, and industry insights.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    title: 'AI Tools Blog - News, Reviews & Tutorials',
    description: 'Stay updated with the latest AI news, tool reviews, tutorials, and industry insights.',
  },
};

const posts = [
  {
    id: 1,
    title: 'The Rise of AI Agents: What You Need to Know in 2025',
    excerpt: 'AI agents are transforming how we work. Learn about the latest developments and how to leverage them.',
    category: 'Trends',
    readTime: '6 min read',
    author: 'Sarah Johnson',
    date: '2025-01-28',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: true,
    slug: 'rise-of-ai-agents-2025',
  },
  {
    id: 2,
    title: 'Claude vs ChatGPT: A Comprehensive Comparison',
    excerpt: 'We compare the two leading AI assistants to help you choose the right one for your needs.',
    category: 'Comparison',
    readTime: '10 min read',
    author: 'Mike Chen',
    date: '2025-01-25',
    image: 'https://images.unsplash.com/photo-1676277791608-ac5a5752a65a?w=600&h=400&fit=crop',
    featured: true,
    slug: 'claude-vs-chatgpt-comparison',
  },
  {
    id: 3,
    title: '10 AI Tools That Will Boost Your Productivity',
    excerpt: 'Discover the AI tools that are helping professionals work smarter, not harder.',
    category: 'Productivity',
    readTime: '8 min read',
    author: 'Emily Watson',
    date: '2025-01-22',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    featured: false,
    slug: '10-ai-productivity-tools',
  },
  {
    id: 4,
    title: 'How to Create Stunning Images with Midjourney v6',
    excerpt: 'A step-by-step guide to mastering Midjourney v6 for professional image generation.',
    category: 'Tutorial',
    readTime: '12 min read',
    author: 'Lisa Park',
    date: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop',
    featured: false,
    slug: 'midjourney-v6-guide',
  },
  {
    id: 5,
    title: 'The Future of AI in Content Creation',
    excerpt: 'Exploring how AI is reshaping content creation and what it means for creators.',
    category: 'Insights',
    readTime: '7 min read',
    author: 'David Kim',
    date: '2025-01-18',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    featured: false,
    slug: 'future-ai-content-creation',
  },
  {
    id: 6,
    title: 'Best Free AI Tools You Should Try Today',
    excerpt: 'You don\'t need a big budget to use AI. Here are the best free tools available.',
    category: 'Lists',
    readTime: '5 min read',
    author: 'Alex Rivera',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    featured: false,
    slug: 'best-free-ai-tools',
  },
];

const featuredPosts = posts.filter(p => p.featured);
const regularPosts = posts.filter(p => !p.featured);

// Format date for display
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      {/* WebPage + Blog schema for rich results */}
      <StructuredData data={generateWebPageSchema({
        name: 'AI Tools Blog - News, Reviews & Tutorials',
        description: 'Stay updated with the latest AI news, tool reviews, tutorials, and industry insights. Learn how to use AI tools effectively.',
        url: '/blog',
      })} />
      <StructuredData data={generateBlogListSchema(posts.map(p => ({
        title: p.title,
        excerpt: p.excerpt,
        slug: p.slug,
        date: p.date,
      })))} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <Newspaper className="w-4 h-4" />
                Latest Articles
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Tools Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                News, reviews, tutorials, and insights about the world of AI tools.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Posts */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={`${post.title} - Best AI Tools blog article`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium hover:gap-2 transition-all"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Regular Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={`${post.title} - Best AI Tools blog article`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span className="text-purple-600 dark:text-purple-400 font-medium">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
