'use client';

import { Sparkles } from 'lucide-react';
import SearchBar from '@/components/search/SearchBar';
import { SITE_CONFIG } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 lg:py-32">
      {/* Background decorations - contained with overflow hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent" />
        </div>

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium mb-8 group hover:bg-white/20 transition-all duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Discover {SITE_CONFIG.stats.toolsCount}+ AI tools</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>

          {/* Main Heading with animated gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Find the Perfect{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient-shift bg-[length:200%_auto]">
                AI Tool
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 animate-pulse" />
            </span>
            <br />
            <span className="text-gray-300">for Your Needs</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our curated collection of {SITE_CONFIG.stats.categoriesCount}+ categories.
            <span className="block mt-2 text-gray-400">
              Compare features, read reviews, and find the perfect solution for your workflow.
            </span>
          </p>

          {/* Enhanced Search Bar Container */}
          <div className="max-w-2xl mx-auto mb-10 relative z-50">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-2 border border-white/20">
              <SearchBar />
            </div>
          </div>

          {/* Popular searches with enhanced styling */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-gray-400 font-medium">Popular:</span>
            {['ChatGPT', 'Midjourney', 'GitHub Copilot', 'Claude'].map((term, index) => (
              <a
                key={term}
                href={`/tools?q=${encodeURIComponent(term)}`}
                className="group relative px-4 py-2 bg-white rounded-full font-medium shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors">{term}</span>
              </a>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '100+', label: 'AI Tools' },
              { value: '10+', label: 'Categories' },
              { value: '50K+', label: 'Users' },
              { value: '4.8', label: 'Avg Rating' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-gray-50 dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
}
