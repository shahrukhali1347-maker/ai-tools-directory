import { Metadata } from 'next';
import { Grid3X3 } from 'lucide-react';
import { categories } from '@/data/categories';
import CategoryCard from '@/components/categories/CategoryCard';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateCategoriesListSchema, generateWebPageSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI Tool Categories - Browse by Use Case',
  description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools. Find tools for chatbots, image generation, code assistance, content creation, and more.`,
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'AI Tool Categories - Browse by Use Case',
    description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools including chatbots, image generation, coding, and content creation.`,
    url: '/categories',
    type: 'website',
  },
  twitter: {
    title: 'AI Tool Categories - Browse by Use Case',
    description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools including chatbots, image generation, coding, and content creation.`,
  },
};

export default function CategoriesPage() {
  return (
    <>
      {/* WebPage + Categories listing schema for rich results */}
      <StructuredData data={generateWebPageSchema({
        name: 'AI Tool Categories - Browse by Use Case',
        description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools. Find tools for chatbots, image generation, code assistance, content creation, and more.`,
        url: '/categories',
      })} />
      <StructuredData data={generateCategoriesListSchema(categories.map(c => ({
        name: c.name,
        description: c.description,
        slug: c.slug,
        toolCount: c.toolCount,
      })))} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Categories', href: '/categories' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <Grid3X3 className="w-4 h-4" />
                Browse by Use Case
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Tool Categories
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore AI tools organized by use case and industry. Find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
