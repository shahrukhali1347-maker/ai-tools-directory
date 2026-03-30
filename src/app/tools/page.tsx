import { Metadata } from 'next';
import { Suspense } from 'react';
import { Compass } from 'lucide-react';
import { aiTools } from '@/data/tools';
import { categories } from '@/data/categories';
import ToolGrid from '@/components/tools/ToolGrid';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateToolsListSchema, generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';
import ToolsPageClient from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'AI Tools Directory - Browse 2000+ Tools',
  description: `Explore our complete directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools. Filter by category, pricing, and features to find the perfect AI solution for your needs.`,
  keywords: ['AI tools', 'artificial intelligence', 'machine learning', 'AI software', 'AI directory'],
  alternates: {
    canonical: '/tools',
  },
  openGraph: {
    title: 'AI Tools Directory - Browse 2000+ Tools',
    description: `Explore our directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools. Filter by category, pricing, and features to find the perfect AI solution.`,
    url: '/tools',
    type: 'website',
  },
  twitter: {
    title: 'AI Tools Directory - Browse 2000+ Tools',
    description: `Explore our directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools. Filter by category, pricing, and features to find the perfect AI solution.`,
  },
};

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; pricing?: string; sort?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      {/* WebPage + CollectionPage schema for rich results */}
      <StructuredData data={generateWebPageSchema({
        name: 'AI Tools Directory - Browse 2000+ Tools',
        description: `Explore our complete directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools. Filter by category, pricing, and features to find the perfect AI solution for your needs.`,
        url: '/tools',
      })} />
      <StructuredData data={generateToolsListSchema(aiTools)} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <Compass className="w-4 h-4" />
                Explore {aiTools.length}+ Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Tools Directory
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover {aiTools.length}+ AI tools across {categories.length} categories. Filter by pricing, platform, and rating.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<ToolGrid tools={[]} isLoading={true} />}>
            <ToolsPageClient
              tools={aiTools}
              categories={categories}
              initialQuery={params.q}
              initialCategory={params.category}
              initialPricing={params.pricing}
              initialSort={params.sort}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
