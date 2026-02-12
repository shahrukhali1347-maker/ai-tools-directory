import { Metadata } from 'next';
import { categories } from '@/data/categories';
import CategoryCard from '@/components/categories/CategoryCard';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateCategoriesListSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI Tool Categories - Browse by Category',
  description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools. Find tools for chatbots, image generation, code assistance, content creation, and more.`,
  openGraph: {
    title: 'AI Tool Categories - Browse by Category',
    description: `Explore ${SITE_CONFIG.stats.categoriesCount}+ categories of AI tools.`,
  },
};

export default function CategoriesPage() {
  return (
    <>
      {/* Categories listing schema for rich results */}
      <StructuredData data={generateCategoriesListSchema(categories.map(c => ({
        name: c.name,
        description: c.description,
        slug: c.slug,
        toolCount: c.toolCount,
      })))} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Categories', href: '/categories' }]} />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Browse by Category
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore AI tools organized by use case and industry
          </p>
        </div>

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
