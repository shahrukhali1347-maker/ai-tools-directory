import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, User, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateGuidesListSchema, generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Guides & Tutorials | Best AI Tools',
  description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more. Learn to use AI tools effectively and boost productivity.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: 'AI Guides & Tutorials | Best AI Tools',
    description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more. Learn to use AI tools effectively and boost productivity.',
    url: '/guides',
    type: 'website',
  },
  twitter: {
    title: 'AI Guides & Tutorials | Best AI Tools',
    description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more. Learn to use AI tools effectively and boost productivity.',
  },
};

const guides = [
  {
    id: 1,
    title: 'Getting Started with AI Writing Tools',
    excerpt: 'Learn how to leverage AI writing assistants to create better content faster.',
    category: 'Writing',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    slug: 'getting-started-ai-writing',
  },
  {
    id: 2,
    title: 'AI Image Generation: A Complete Guide',
    excerpt: 'Master the art of creating stunning visuals with AI image generators.',
    category: 'Image',
    readTime: '12 min read',
    author: 'Mike Chen',
    date: 'Jan 12, 2025',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop',
    slug: 'ai-image-generation-guide',
  },
  {
    id: 3,
    title: 'How to Use AI for Code Development',
    excerpt: 'Boost your coding productivity with AI-powered development tools.',
    category: 'Development',
    readTime: '10 min read',
    author: 'Alex Rivera',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    slug: 'ai-code-development',
  },
  {
    id: 4,
    title: 'AI Tools for Business Automation',
    excerpt: 'Streamline your business processes with intelligent automation tools.',
    category: 'Business',
    readTime: '15 min read',
    author: 'Emily Watson',
    date: 'Jan 8, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    slug: 'ai-business-automation',
  },
  {
    id: 5,
    title: 'Comparing Top AI Chatbots in 2025',
    excerpt: 'A detailed comparison of the leading AI chatbots and their capabilities.',
    category: 'Chatbots',
    readTime: '11 min read',
    author: 'David Kim',
    date: 'Jan 5, 2025',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    slug: 'comparing-ai-chatbots-2025',
  },
  {
    id: 6,
    title: 'AI Video Editing: Tips & Tricks',
    excerpt: 'Create professional videos effortlessly with AI-powered editing tools.',
    category: 'Video',
    readTime: '9 min read',
    author: 'Lisa Park',
    date: 'Jan 3, 2025',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    slug: 'ai-video-editing-tips',
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* WebPage + Guides listing schema for rich results */}
      <StructuredData data={generateWebPageSchema({
        name: 'AI Guides & Tutorials',
        description: 'Comprehensive guides and tutorials to help you get the most out of AI tools.',
        url: '/guides',
      })} />
      <StructuredData data={generateGuidesListSchema(guides.map(g => ({
        title: g.title,
        excerpt: g.excerpt,
        slug: g.slug,
        author: g.author,
        category: g.category,
      })))} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }]} variant="light" />

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              Learn & Explore
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Guides & Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides to help you master AI tools and boost your productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={`${guide.title} - AI tutorial guide`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                    {guide.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {guide.date}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {guide.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {guide.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <User className="w-3 h-3" />
                    {guide.author}
                  </span>
                  <Link
                    href={`/guides/${guide.slug}`}
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
    </div>
    </>
  );
}
