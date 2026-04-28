import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { getRecentTools } from '@/data/tools';
import ToolCard from '@/components/tools/ToolCard';

export default function RecentlyAdded() {
  const recentTools = getRecentTools(8);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Recently Added
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-lg">
                The newest tools to hit the directory
              </p>
            </div>
          </div>
          <Link
            href="/tools?sort=newest"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 group"
          >
            View all new
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentTools.map((tool) => (
            <div key={tool.id} className="transform transition-all duration-300 hover:-translate-y-2">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/tools?sort=newest"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium shadow-lg shadow-emerald-500/25"
          >
            View all new
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
