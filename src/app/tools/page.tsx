import { Metadata } from 'next';
import { Suspense } from 'react';
import { aiTools } from '@/data/tools';
import { categories } from '@/data/categories';
import ToolGrid from '@/components/tools/ToolGrid';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateToolsListSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';
import ToolsPageClient from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'All AI Tools - Browse 100+ AI Tools | AI Tools Hub',
  description: `Explore our complete directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools. Filter by category, pricing, and features to find the perfect AI solution for your needs.`,
  keywords: ['AI tools', 'artificial intelligence', 'machine learning', 'AI software', 'AI directory'],
  openGraph: {
    title: 'All AI Tools - Browse 100+ AI Tools',
    description: `Explore our complete directory of ${SITE_CONFIG.stats.toolsCount}+ AI tools.`,
    type: 'website',
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
      {/* CollectionPage schema for rich results */}
      <StructuredData data={generateToolsListSchema(aiTools)} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Tools', href: '/tools' }]} />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              AI Tools Directory
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Discover {aiTools.length}+ AI tools across {categories.length} categories
            </p>
          </div>

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
