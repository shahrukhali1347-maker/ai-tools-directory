import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToolsByCategory } from '@/data/tools';
import ToolGrid from '@/components/tools/ToolGrid';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateCategorySchema } from '@/lib/schema';
import { MessageSquare, Image as ImageIcon, FileText, Code, Video, Music, Zap, Search, Palette, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-10 h-10" />,
  Image: <ImageIcon className="w-10 h-10" />,
  FileText: <FileText className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  Video: <Video className="w-10 h-10" />,
  Music: <Music className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Search: <Search className="w-10 h-10" />,
  Palette: <Palette className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
};

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: category.seo.metaTitle || `${category.name} - AI Tools`,
    description: category.seo.metaDescription || category.description,
    keywords: category.seo.keywords,
    openGraph: {
      title: category.seo.metaTitle || `${category.name} - AI Tools`,
      description: category.seo.metaDescription || category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category.slug);

  return (
    <>
      <StructuredData data={generateCategorySchema(category, tools)} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero section */}
        <div
          className="relative bg-cover bg-center py-16"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Categories', href: '/categories' },
                { label: category.name, href: `/categories/${category.slug}` },
              ]}
            />

            <div className="flex items-center gap-4 mt-4">
              <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center text-white`}>
                {iconMap[category.icon] || <Zap className="w-10 h-10" />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {category.name}
                </h1>
                <p className="text-lg text-gray-200 mt-1">
                  {tools.length} tools available
                </p>
              </div>
            </div>

            <p className="text-gray-300 mt-4 max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Tools grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ToolGrid
            tools={tools}
            emptyMessage={`No tools found in ${category.name} category.`}
          />
        </div>
      </div>
    </>
  );
}
