import { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, ArrowRight, Bell, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Tools Blog - Coming Soon',
  description: 'In-depth AI tool reviews, comparisons, and tutorials are launching soon. Subscribe to be the first to read our editorial coverage.',
  keywords: ['AI blog', 'AI news', 'AI tutorials', 'AI tool reviews', 'artificial intelligence'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'AI Tools Blog - Coming Soon | Best AI Tools',
    description: 'In-depth AI tool reviews and comparisons are launching soon.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    title: 'AI Tools Blog - Coming Soon | Best AI Tools',
    description: 'In-depth AI tool reviews and comparisons are launching soon.',
  },
};

export default function BlogPage() {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'AI Tools Blog - Coming Soon',
        description: 'In-depth AI tool reviews, comparisons, and tutorials are launching soon.',
        url: '/blog',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <Newspaper className="w-4 h-4" />
                Editorial coverage launching soon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Tools Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Long-form reviews, side-by-side comparisons, and the stories behind the AI tools that actually ship.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              We&apos;re working on the first issue
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Rather than rushing thin listicles, we&apos;re building a small set of deeply-researched AI tool reviews — each one tested for at least 20 hours by our editors before publishing. The first batch launches with our newsletter.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8 text-left">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">Real testing</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">No paid placements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">Honest verdicts</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Limitations included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">Side-by-side data</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pricing, features, perf</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">Updated quarterly</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Not a stale archive</p>
                </div>
              </div>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Browse the Tools Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
