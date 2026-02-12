import Link from 'next/link';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { getFeaturedTools } from '@/data/tools';
import ToolCard from '@/components/tools/ToolCard';

export default function FeaturedTools() {
  const featuredTools = getFeaturedTools().slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg shadow-orange-500/20">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Editor&apos;s Choice
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Featured Tools
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
              Hand-picked tools recommended by our team
            </p>
          </div>
          <Link
            href="/tools?featured=true"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/tools?featured=true"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg shadow-purple-500/25"
          >
            <Sparkles className="w-4 h-4" />
            View all featured tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
