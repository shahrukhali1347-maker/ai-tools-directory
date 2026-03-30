import { Metadata } from 'next';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'About AI Tools Hub — Our Mission & Story',
  description: `AI Tools Hub helps you discover, compare, and choose from 2100+ AI tools across 55+ categories. Learn about our mission and unbiased review process.`,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About AI Tools Hub — Our Mission & Story',
    description: `AI Tools Hub helps individuals and teams discover, compare, and choose from 2000+ AI tools across 50+ categories with honest, unbiased reviews.`,
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About AI Tools Hub — Our Mission & Story',
    description: `AI Tools Hub helps individuals and teams discover, compare, and choose from 2000+ AI tools across 50+ categories with honest, unbiased reviews.`,
  },
};

const features = [
  {
    icon: Sparkles,
    title: 'Comprehensive Directory',
    description: `We curate and maintain a directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools across ${SITE_CONFIG.stats.categoriesCount}+ categories.`,
  },
  {
    icon: Target,
    title: 'Unbiased Reviews',
    description: 'Our reviews are honest, detailed, and designed to help you make informed decisions.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'User reviews and ratings help surface the best tools for specific use cases.',
  },
  {
    icon: Zap,
    title: 'Always Updated',
    description: 'We continuously add new tools and update existing entries to keep information current.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Organization + WebPage schema for rich results */}
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebPageSchema({
        name: 'About AI Tools Hub — Our Mission & Story',
        description: 'AI Tools Hub helps individuals and teams discover, compare, and choose from 2000+ AI tools across 50+ categories.',
        url: '/about',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted guide to discovering, comparing, and choosing the best AI tools
            for your needs.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            The AI landscape is evolving rapidly, with new tools launching every day.
            Our mission is to help individuals, teams, and businesses navigate this
            exciting but overwhelming space.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We believe everyone should have access to the transformative power of AI.
            By providing comprehensive, unbiased information about AI tools, we help
            you find the perfect solutions for your unique needs and budget.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a tool to share?
          </h2>
          <p className="text-white/80 mb-6">
            Help others discover great AI tools by submitting your favorite tools to our directory.
          </p>
          <a
            href="/submit"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Submit a Tool
          </a>
        </div>
        </div>
      </div>
    </>
  );
}
