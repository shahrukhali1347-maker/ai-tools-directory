'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Sparkles, Layers, GitCompare, ArrowRight } from 'lucide-react';
import { aiTools } from '@/data/tools';
import { categories } from '@/data/categories';

type SearchResult =
  | { type: 'tool'; id: string; name: string; tagline: string; slug: string }
  | { type: 'category'; id: string; name: string; description: string; slug: string }
  | { type: 'page'; id: string; name: string; description: string; href: string };

const STATIC_PAGES: SearchResult[] = [
  { type: 'page', id: 'compare', name: 'Compare AI Tools', description: 'Side-by-side comparisons', href: '/compare' },
  { type: 'page', id: 'collections', name: 'Collections', description: 'Curated tool stacks', href: '/collections' },
  { type: 'page', id: 'methodology', name: 'How We Review', description: 'Our editorial methodology', href: '/methodology' },
  { type: 'page', id: 'submit', name: 'Submit a Tool', description: 'Suggest a tool for our directory', href: '/submit' },
  { type: 'page', id: 'about', name: 'About', description: 'Mission and team', href: '/about' },
];

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Open / close keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      // "/" to open (when not focused on an input)
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setOpen(true);
        return;
      }
      // Escape to close
      if (e.key === 'Escape' && open) {
        e.preventDefault();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setActiveIndex(0);
    }
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default: top featured tools + key pages
      const featured: SearchResult[] = aiTools
        .filter((t) => t.featured)
        .slice(0, 5)
        .map((t) => ({ type: 'tool', id: t.id, name: t.name, tagline: t.tagline, slug: t.slug }));
      return [...STATIC_PAGES.slice(0, 3), ...featured];
    }

    const toolMatches: SearchResult[] = aiTools
      .filter((t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .slice(0, 8)
      .map((t) => ({ type: 'tool', id: t.id, name: t.name, tagline: t.tagline, slug: t.slug }));

    const categoryMatches: SearchResult[] = categories
      .filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
      .slice(0, 3)
      .map((c) => ({ type: 'category', id: c.id, name: c.name, description: c.description, slug: c.slug }));

    const pageMatches: SearchResult[] = STATIC_PAGES.filter(
      (p) => p.name.toLowerCase().includes(q) || ('description' in p && p.description.toLowerCase().includes(q))
    );

    return [...toolMatches, ...categoryMatches, ...pageMatches].slice(0, 12);
  }, [query]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (r: SearchResult) => {
    setOpen(false);
    if (r.type === 'tool') router.push(`/tools/${r.slug}`);
    else if (r.type === 'category') router.push(`/categories/${r.slug}`);
    else router.push(r.href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[activeIndex];
      if (r) handleSelect(r);
    }
  };

  if (!open) return null;

  const getIcon = (r: SearchResult) => {
    if (r.type === 'tool') return <Sparkles className="w-4 h-4 text-purple-500" />;
    if (r.type === 'category') return <Layers className="w-4 h-4 text-blue-500" />;
    if (r.id === 'compare') return <GitCompare className="w-4 h-4 text-emerald-500" />;
    return <Search className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 bg-black/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search tools, categories, or pages..."
            className="flex-1 bg-transparent outline-none text-base text-gray-900 dark:text-white placeholder:text-gray-400"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No results for &quot;{query}&quot;</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Try a different search or browse <button onClick={() => { setOpen(false); router.push('/tools'); }} className="text-purple-600 dark:text-purple-400 hover:underline">all tools</button>
              </p>
            </div>
          ) : (
            <>
              {!query && (
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Quick links &amp; featured tools
                </div>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.id}`}
                  onClick={() => handleSelect(r)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeIndex === i
                      ? 'bg-purple-50 dark:bg-purple-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    {getIcon(r)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {r.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {r.type === 'tool' ? r.tagline : r.type === 'category' ? r.description : r.description}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider flex-shrink-0">
                    {r.type}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </button>
              ))}
            </>
          )}
        </div>

        {/* Footer hints */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 font-mono">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 font-mono">↵</kbd>
              open
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 font-mono">esc</kbd>
              close
            </span>
          </div>
          <span>Best AI Tools</span>
        </div>
      </div>
    </div>
  );
}
