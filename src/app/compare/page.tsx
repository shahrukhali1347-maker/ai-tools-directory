import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GitCompare } from 'lucide-react';
import { getToolBySlug } from '@/data/tools';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Compare AI Tools — Side-by-Side Comparisons | Best AI Tools',
  description: 'Compare popular AI tools side-by-side: pricing, features, platforms, and our editorial verdict on which to pick. ChatGPT vs Claude, Cursor vs v0, Midjourney vs DALL-E, and 30+ more.',
  alternates: { canonical: '/compare' },
  openGraph: {
    title: 'Compare AI Tools — Side-by-Side Comparisons | Best AI Tools',
    description: 'Compare popular AI tools side-by-side: pricing, features, platforms, and our editorial verdict.',
    url: '/compare',
    type: 'website',
  },
  twitter: {
    title: 'Compare AI Tools — Side-by-Side Comparisons | Best AI Tools',
    description: 'Compare popular AI tools side-by-side.',
  },
};

const COMBOS_BY_CATEGORY: Record<string, Array<[string, string]>> = {
  Chatbots: [
    ['chatgpt', 'claude'],
    ['chatgpt', 'gemini'],
    ['claude', 'gemini'],
    ['chatgpt', 'perplexity'],
    ['claude', 'deepseek'],
    ['claude', 'mistral-le-chat'],
    ['chatgpt', 'microsoft-copilot'],
    ['gemini', 'grok'],
    ['perplexity', 'phind'],
  ],
  'Code Assistance': [
    ['cursor', 'github-copilot'],
    ['cursor', 'windsurf'],
    ['cursor', 'v0'],
    ['v0', 'bolt-new'],
    ['windsurf', 'aider'],
    ['github-copilot', 'tabnine'],
    ['github-copilot', 'codeium'],
    ['cursor', 'devin'],
  ],
  'Image Generation': [
    ['midjourney', 'dall-e'],
    ['midjourney', 'stable-diffusion'],
    ['midjourney', 'flux-ai'],
    ['dall-e', 'leonardo-ai'],
    ['krea-ai', 'pika'],
  ],
  'Writing & Content': [
    ['jasper', 'copy-ai'],
    ['grammarly', 'quillbot'],
    ['notion-ai', 'jasper'],
  ],
  Video: [
    ['runway', 'pika'],
    ['synthesia', 'heygen'],
  ],
  Productivity: [
    ['notion-ai', 'mem'],
    ['otter-ai', 'fireflies'],
    ['raycast-ai', 'superhuman'],
  ],
};

export default function CompareIndexPage() {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'Compare AI Tools — Side-by-Side Comparisons',
        description: 'Compare popular AI tools side-by-side.',
        url: '/compare',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Compare', href: '/compare' }]} variant="light" />
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <GitCompare className="w-4 h-4" />
                Side-by-side comparisons
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Compare AI Tools
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pricing, features, platforms, and our editor&apos;s verdict on which tool to pick.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {Object.entries(COMBOS_BY_CATEGORY).map(([categoryName, combos]) => (
            <div key={categoryName} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {categoryName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {combos.map(([a, b]) => {
                  const ta = getToolBySlug(a);
                  const tb = getToolBySlug(b);
                  if (!ta || !tb) return null;
                  return (
                    <Link
                      key={`${a}-${b}`}
                      href={`/compare/${a}-vs-${b}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all group"
                    >
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {ta.name} <span className="text-gray-400">vs</span> {tb.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
