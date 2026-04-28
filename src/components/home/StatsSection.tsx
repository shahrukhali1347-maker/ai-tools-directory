'use client';

import { Sparkles, RefreshCw, Layers, Zap } from 'lucide-react';
import { aiTools } from '@/data/tools';
import { categories } from '@/data/categories';

const verifiedCount = aiTools.filter((t) => t.verified).length;
const featuredCount = aiTools.filter((t) => t.featured).length;

const stats = [
  {
    icon: Sparkles,
    value: aiTools.length.toString() + '+',
    label: 'AI Tools',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Layers,
    value: categories.length.toString(),
    label: 'Categories',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: Zap,
    value: featuredCount.toString(),
    label: 'Editor’s Picks',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    shadowColor: 'shadow-yellow-500/20',
  },
  {
    icon: RefreshCw,
    value: verifiedCount.toString(),
    label: 'Verified',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    shadowColor: 'shadow-green-500/20',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/30 to-blue-200/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Curated. Verified. Updated.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Every tool reviewed by our editors before listing
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl ${stat.shadowColor} border border-gray-100 dark:border-gray-700 hover:scale-105 transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value with counter effect */}
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
