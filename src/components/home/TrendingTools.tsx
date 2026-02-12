import Link from 'next/link';
import { ArrowRight, TrendingUp, Flame, Zap } from 'lucide-react';
import { getTrendingTools } from '@/data/tools';
import ToolCard from '@/components/tools/ToolCard';

export default function TrendingTools() {
  const trendingTools = getTrendingTools().slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Flame className="w-3 h-3 text-orange-700" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Trending Now
                </h2>
                <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-lg">
                Most popular tools this week
              </p>
            </div>
          </div>
          <Link
            href="/tools?sort=popular"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tools grid with ranking badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTools.map((tool, index) => (
            <div
              key={tool.id}
              className="relative transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Ranking badge */}
              <div className="absolute -top-3 -left-3 z-10 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/30 border-4 border-white dark:border-gray-900">
                {index + 1}
              </div>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/tools?sort=popular"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium shadow-lg shadow-orange-500/25"
          >
            View all trending
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
