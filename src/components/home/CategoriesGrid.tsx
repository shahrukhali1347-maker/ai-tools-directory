'use client';

import Link from 'next/link';
import { ArrowRight, Bot, Wand2, PenTool, Terminal, Film, Mic2, Sparkles, BookOpen, Layers, BarChart3 } from 'lucide-react';
import { categories } from '@/data/categories';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare: Bot,
  Image: Wand2,
  FileText: PenTool,
  Code: Terminal,
  Video: Film,
  Music: Mic2,
  Zap: Sparkles,
  Search: BookOpen,
  Palette: Layers,
  TrendingUp: BarChart3,
};

const gradientMap: Record<string, string> = {
  'bg-blue-500': 'from-cyan-400 to-blue-600',
  'bg-purple-500': 'from-purple-400 to-fuchsia-600',
  'bg-green-500': 'from-emerald-400 to-green-600',
  'bg-yellow-500': 'from-amber-400 to-orange-600',
  'bg-red-500': 'from-rose-400 to-red-600',
  'bg-pink-500': 'from-pink-400 to-rose-600',
  'bg-orange-500': 'from-orange-400 to-red-500',
  'bg-cyan-500': 'from-teal-400 to-cyan-600',
  'bg-indigo-500': 'from-indigo-400 to-purple-600',
  'bg-teal-500': 'from-emerald-400 to-teal-600',
};

const subtitleMap: Record<string, string> = {
  'Chatbots & Assistants': '& Conversational AI',
  'Image Generation': '',
  'Content Creation': '& Writing',
  'Code Assistance': '',
  'Video Generation': '& Editing',
  'Audio & Music': '& Music',
  'Productivity': '& Automation',
  'Research & Analysis': '& Analysis',
  'Design & Creative': '& UI/UX',
  'Marketing & SEO': '& SEO',
};

export default function CategoriesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Explore 10 Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Browse by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Category
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover AI tools organized by use case. Find the perfect solution for your specific needs.
          </p>
        </div>

        {/* Categories grid - Larger cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Sparkles;
            const gradient = gradientMap[category.color] || 'from-gray-400 to-gray-600';
            const subtitle = subtitleMap[category.name] || '';
            const mainName = category.name.split(' & ')[0];

            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8
                  border border-gray-100 dark:border-gray-700
                  shadow-sm hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:border-transparent
                  overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white mb-5
                      shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-500 ease-out`}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                  </div>

                  {/* Category name */}
                  <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {mainName}
                  </h3>

                  {/* Subtitle */}
                  {subtitle && (
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {subtitle}
                    </p>
                  )}
                </div>

                {/* Decorative dot */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`} />
              </Link>
            );
          })}
        </div>

        {/* View all button */}
        <div className="mt-14 text-center">
          <Link
            href="/categories"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white rounded-2xl font-bold text-lg
              shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40
              hover:scale-105 active:scale-100
              transition-all duration-300"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
