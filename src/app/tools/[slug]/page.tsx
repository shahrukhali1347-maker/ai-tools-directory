import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ExternalLink, CheckCircle, TrendingUp, Calendar, Eye, Bookmark, Share2 } from 'lucide-react';
import { aiTools, getToolBySlug, getRelatedTools } from '@/data/tools';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';
import ToolCard from '@/components/tools/ToolCard';
import { generateToolSchema } from '@/lib/schema';
import { formatDate, formatNumber, getPricingLabel } from '@/lib/utils';
import { SITE_CONFIG } from '@/config/site';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: tool.seo.metaTitle || `${tool.name} - ${tool.tagline}`,
    description: tool.seo.metaDescription || tool.description,
    keywords: tool.seo.keywords,
    openGraph: {
      title: tool.seo.metaTitle || `${tool.name} - ${tool.tagline}`,
      description: tool.seo.metaDescription || tool.description,
      images: [tool.seo.ogImage || tool.logo],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.name,
      description: tool.description,
      images: [tool.logo],
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getRelatedTools(tool, 4);
  const pricingLabel = getPricingLabel(tool.pricing);

  return (
    <>
      <StructuredData data={generateToolSchema(tool)} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { label: 'Tools', href: '/tools' },
              { label: category?.name || tool.category, href: `/categories/${tool.category}` },
              { label: tool.name, href: `/tools/${tool.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Logo */}
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                    <Image src={tool.logo} alt={tool.name} fill className="object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {tool.name}
                      </h1>
                      {tool.verified && (
                        <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>
                          Verified
                        </Badge>
                      )}
                      {tool.trending && (
                        <Badge variant="warning" icon={<TrendingUp className="w-3 h-3" />}>
                          Trending
                        </Badge>
                      )}
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {tool.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <Rating
                        value={tool.rating.average}
                        count={tool.rating.count}
                        size="md"
                      />
                      <Badge
                        variant={pricingLabel === 'Free' ? 'success' : pricingLabel === 'Freemium' ? 'info' : 'default'}
                      >
                        {pricingLabel}
                      </Badge>
                      <Link
                        href={`/categories/${tool.category}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {category?.name || tool.category}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <Button variant="outline" size="lg">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  About {tool.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tool.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tool.features.core.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Use Cases
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tool.useCases.map((useCase, index) => (
                    <Badge key={index} variant="default" size="md">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Pricing
                </h2>
                <div className="space-y-4">
                  {tool.pricing.plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        plan.popular
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {plan.name}
                        </span>
                        {plan.popular && (
                          <Badge variant="info" size="sm">Popular</Badge>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.price === 0 ? 'Free' : `$${plan.price}`}
                        {plan.price > 0 && (
                          <span className="text-sm font-normal text-gray-500">/{plan.interval}</span>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {plan.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Statistics
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Monthly Visits
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatNumber(tool.visits)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Bookmark className="w-4 h-4" />
                      Bookmarks
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatNumber(tool.bookmarks)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Added
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatDate(tool.dateAdded)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Available On
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tool.features.platforms.map((platform) => (
                    <Badge key={platform} variant="default" size="md">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tools?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related tools */}
          {relatedTools.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Similar Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedTools.map((relatedTool) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
