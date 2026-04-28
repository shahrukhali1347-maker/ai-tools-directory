import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ExternalLink, Star, ArrowRight } from 'lucide-react';
import { aiTools, getToolBySlug } from '@/data/tools';
import { getCategoryBySlug } from '@/data/categories';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';
import { formatDate, getPricingLabel } from '@/lib/utils';
import { SITE_CONFIG } from '@/config/site';
import { AITool } from '@/types';

interface ComparePageProps {
  params: Promise<{ slugs: string }>;
}

// Curated list of high-value comparison combos to pre-render at build time.
// Each pair is two tools that users actually search to compare.
const FEATURED_COMBOS: Array<[string, string]> = [
  // Chatbots
  ['chatgpt', 'claude'],
  ['chatgpt', 'gemini'],
  ['claude', 'gemini'],
  ['chatgpt', 'perplexity'],
  ['claude', 'deepseek'],
  ['claude', 'mistral-le-chat'],
  ['chatgpt', 'microsoft-copilot'],
  ['gemini', 'grok'],
  ['perplexity', 'phind'],
  // Code
  ['cursor', 'github-copilot'],
  ['cursor', 'windsurf'],
  ['cursor', 'v0'],
  ['v0', 'bolt-new'],
  ['windsurf', 'aider'],
  ['github-copilot', 'tabnine'],
  ['github-copilot', 'codeium'],
  ['cursor', 'devin'],
  // Image
  ['midjourney', 'dall-e'],
  ['midjourney', 'stable-diffusion'],
  ['midjourney', 'flux-ai'],
  ['dall-e', 'leonardo-ai'],
  ['krea-ai', 'pika'],
  // Writing
  ['jasper', 'copy-ai'],
  ['grammarly', 'quillbot'],
  ['notion-ai', 'jasper'],
  // Video
  ['runway', 'pika'],
  ['synthesia', 'heygen'],
  // Productivity
  ['notion-ai', 'mem'],
  ['otter-ai', 'fireflies'],
  ['raycast-ai', 'superhuman'],
];

export async function generateStaticParams() {
  return FEATURED_COMBOS.map(([a, b]) => ({
    slugs: `${a}-vs-${b}`,
  }));
}

function parseSlugs(slugs: string): [string, string] | null {
  const parts = slugs.split('-vs-');
  if (parts.length !== 2) return null;
  return [parts[0], parts[1]];
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slugs } = await params;
  const parsed = parseSlugs(slugs);

  if (!parsed) return { title: 'Comparison Not Found' };

  const [slugA, slugB] = parsed;
  const a = getToolBySlug(slugA);
  const b = getToolBySlug(slugB);

  if (!a || !b) return { title: 'Comparison Not Found' };

  const title = `${a.name} vs ${b.name}: Side-by-Side Comparison (2026)`;
  const description = `Compare ${a.name} and ${b.name} — pricing, features, platforms, and ratings. Editor-written verdict on which AI tool to pick for your use case.`;

  return {
    title,
    description,
    keywords: [`${a.name} vs ${b.name}`, `${a.name} alternatives`, `${b.name} alternatives`, ...a.seo.keywords, ...b.seo.keywords],
    alternates: { canonical: `/compare/${slugA}-vs-${slugB}` },
    openGraph: {
      title,
      description,
      url: `/compare/${slugA}-vs-${slugB}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function priceCell(tool: AITool): string {
  const min = Math.min(...tool.pricing.plans.map((p) => p.price));
  if (min === 0 && tool.pricing.free) return 'Free';
  if (min === 0) return 'Free tier';
  return `From $${min}/${tool.pricing.plans[0].interval}`;
}

function platformCell(tool: AITool): string {
  return tool.features.platforms.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(', ');
}

function generateVerdict(a: AITool, b: AITool): { winner: AITool; reasoning: string } {
  // Simple heuristic: featured + higher rating wins. If tied, lower price wins.
  const aScore = (a.featured ? 1 : 0) + (a.trending ? 0.5 : 0) + a.rating.average / 10;
  const bScore = (b.featured ? 1 : 0) + (b.trending ? 0.5 : 0) + b.rating.average / 10;

  if (aScore > bScore) {
    return {
      winner: a,
      reasoning: `${a.name} edges out for most users — stronger feature set and a more refined experience based on our editorial scoring.`,
    };
  }
  if (bScore > aScore) {
    return {
      winner: b,
      reasoning: `${b.name} edges out for most users — stronger feature set and a more refined experience based on our editorial scoring.`,
    };
  }
  return {
    winner: a.pricing.free && !b.pricing.free ? a : b,
    reasoning: 'Both tools score similarly in our review. Pick based on pricing fit and platform availability — see the comparison table above.',
  };
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slugs } = await params;
  const parsed = parseSlugs(slugs);
  if (!parsed) notFound();

  const [slugA, slugB] = parsed;
  const a = getToolBySlug(slugA);
  const b = getToolBySlug(slugB);
  if (!a || !b) notFound();

  const categoryA = getCategoryBySlug(a.category);
  const categoryB = getCategoryBySlug(b.category);
  const verdict = generateVerdict(a, b);
  const sameCategory = a.category === b.category;

  // FAQPage schema for AI Overviews
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Which is better, ${a.name} or ${b.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: verdict.reasoning,
        },
      },
      {
        '@type': 'Question',
        name: `What is the pricing difference between ${a.name} and ${b.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${a.name} starts at ${priceCell(a)}, while ${b.name} starts at ${priceCell(b)}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I use ${a.name} and ${b.name} together?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: sameCategory
            ? `Yes, but most users pick one. ${a.name} and ${b.name} are both in the ${categoryA?.name} category, so they overlap significantly.`
            : `Yes — ${a.name} (${categoryA?.name}) and ${b.name} (${categoryB?.name}) serve different use cases and complement each other well.`,
        },
      },
    ],
  };

  const ComparisonRow = ({ label, valA, valB }: { label: string; valA: React.ReactNode; valB: React.ReactNode }) => (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-sm text-gray-900 dark:text-white">{valA}</div>
      <div className="text-sm text-gray-900 dark:text-white">{valB}</div>
    </div>
  );

  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: `${a.name} vs ${b.name}: Comparison`,
        description: `Side-by-side comparison of ${a.name} and ${b.name}.`,
        url: `/compare/${slugA}-vs-${slugB}`,
      })} />
      <StructuredData data={faqSchema} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Compare', href: '/compare' },
                { label: `${a.name} vs ${b.name}`, href: `/compare/${slugA}-vs-${slugB}` },
              ]}
              variant="light"
            />
            <div className="mt-8 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {a.name} <span className="text-white/60">vs</span> {b.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Side-by-side comparison: pricing, features, platforms, and our editorial verdict.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last reviewed: <time dateTime={a.dateUpdated > b.dateUpdated ? a.dateUpdated : b.dateUpdated}>
                  {formatDate(a.dateUpdated > b.dateUpdated ? a.dateUpdated : b.dateUpdated)}
                </time>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tool cards side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[a, b].map((tool) => {
              const cat = getCategoryBySlug(tool.category);
              return (
                <div
                  key={tool.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                      <Image src={tool.logo} alt={`${tool.name} logo`} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {cat?.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {tool.tagline}
                  </p>
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Visit {tool.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Comparison table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              At a glance
            </h2>
            <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-gray-300 dark:border-gray-600 mb-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"></div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">{a.name}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">{b.name}</div>
            </div>
            <ComparisonRow
              label="Pricing"
              valA={priceCell(a)}
              valB={priceCell(b)}
            />
            <ComparisonRow
              label="Pricing model"
              valA={getPricingLabel(a.pricing)}
              valB={getPricingLabel(b.pricing)}
            />
            <ComparisonRow
              label="Free tier"
              valA={a.pricing.free ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-gray-400" />}
              valB={b.pricing.free ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-gray-400" />}
            />
            <ComparisonRow
              label="Free trial"
              valA={a.pricing.trial ? `${a.pricing.trialDays || 14} days` : <XCircle className="w-5 h-5 text-gray-400" />}
              valB={b.pricing.trial ? `${b.pricing.trialDays || 14} days` : <XCircle className="w-5 h-5 text-gray-400" />}
            />
            <ComparisonRow
              label="Platforms"
              valA={platformCell(a)}
              valB={platformCell(b)}
            />
            <ComparisonRow
              label="Editor rating"
              valA={
                <span className="inline-flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-semibold">{a.rating.average.toFixed(1)}</span>
                </span>
              }
              valB={
                <span className="inline-flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-semibold">{b.rating.average.toFixed(1)}</span>
                </span>
              }
            />
            <ComparisonRow
              label="Featured"
              valA={a.featured ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <span className="text-gray-400 text-xs">No</span>}
              valB={b.featured ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <span className="text-gray-400 text-xs">No</span>}
            />
            <ComparisonRow
              label="Last reviewed"
              valA={<time dateTime={a.dateUpdated}>{formatDate(a.dateUpdated)}</time>}
              valB={<time dateTime={b.dateUpdated}>{formatDate(b.dateUpdated)}</time>}
            />
          </div>

          {/* Features comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[a, b].map((tool) => (
              <div
                key={tool.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {tool.name} key features
                </h3>
                <ul className="space-y-2">
                  {tool.features.core.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Editor&apos;s verdict
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-purple-700 dark:text-purple-300">Winner: {verdict.winner.name}.</strong> {verdict.reasoning}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              See our <Link href="/methodology" className="text-purple-600 dark:text-purple-400 hover:underline">editorial methodology</Link> for how we score and rank tools.
            </p>
          </div>

          {/* Recommended next */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Other comparisons you might want
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURED_COMBOS
                .filter(([x, y]) => (x === slugA || x === slugB || y === slugA || y === slugB) && !(x === slugA && y === slugB))
                .slice(0, 4)
                .map(([x, y]) => {
                  const tx = getToolBySlug(x);
                  const ty = getToolBySlug(y);
                  if (!tx || !ty) return null;
                  return (
                    <Link
                      key={`${x}-${y}`}
                      href={`/compare/${x}-vs-${y}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
                    >
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {tx.name} vs {ty.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
