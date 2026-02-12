import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, ArrowRight, Sparkles, Zap, Brain, Rocket, Target, Users } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateCollectionsListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Tool Collections - Curated Lists',
  description: 'Explore curated collections of AI tools for specific use cases, industries, and workflows.',
};

const collections = [
  {
    id: 1,
    title: 'Best AI Tools for Startups',
    description: 'Essential AI tools to help startups scale faster with limited resources.',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
    toolCount: 15,
    slug: 'startups',
  },
  {
    id: 2,
    title: 'AI Writing Assistants',
    description: 'Top tools for content creation, copywriting, and editing.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    toolCount: 20,
    slug: 'writing-assistants',
  },
  {
    id: 3,
    title: 'AI for Developers',
    description: 'Code generation, debugging, and development productivity tools.',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    toolCount: 18,
    slug: 'developers',
  },
  {
    id: 4,
    title: 'AI Marketing Stack',
    description: 'Complete marketing toolkit powered by artificial intelligence.',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
    toolCount: 22,
    slug: 'marketing',
  },
  {
    id: 5,
    title: 'AI for Teams',
    description: 'Collaboration and productivity tools for modern teams.',
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
    toolCount: 12,
    slug: 'teams',
  },
  {
    id: 6,
    title: 'AI Research Tools',
    description: 'Tools for academic research, data analysis, and insights.',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    toolCount: 16,
    slug: 'research',
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* CollectionPage schema for rich results */}
      <StructuredData data={generateCollectionsListSchema(collections.map(c => ({
        title: c.title,
        description: c.description,
        slug: c.slug,
        toolCount: c.toolCount,
      })))} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Collections', href: '/collections' }]} />

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
              <Layers className="w-4 h-4" />
              Curated Collections
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Tool Collections
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked collections of AI tools organized by use case, industry, and workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => {
            const Icon = collection.icon;
            return (
              <Link
                key={collection.id}
                href={`/tools?collection=${collection.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${collection.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {collection.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {collection.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {collection.toolCount} tools
                  </span>
                  <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
