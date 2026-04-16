'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Sparkles, Zap } from 'lucide-react';
import { NAV_LINKS } from '@/config/site';
import ThemeToggle from '@/components/ThemeToggle';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Best AI Tools
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium -mt-0.5">
                Discover the best AI tools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-lg hover:text-gray-900 dark:hover:text-white transition-all group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center" />
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <Link
              href="/tools"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 group"
            >
              <Search className="w-4 h-4 group-hover:text-purple-500 transition-colors" />
              <span className="group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">Search tools...</span>
              <kbd className="hidden lg:inline-flex items-center px-2 py-0.5 text-xs bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 shadow-sm">
                /
              </kbd>
            </Link>

            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/tools"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Explore
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
