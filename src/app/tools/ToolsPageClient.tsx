'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { AITool, Category } from '@/types';
import { searchTools } from '@/lib/search';
import { applyFilters } from '@/lib/filters';
import ToolGrid from '@/components/tools/ToolGrid';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

interface ToolsPageClientProps {
  tools: AITool[];
  categories: Category[];
  initialQuery?: string;
  initialCategory?: string;
  initialPricing?: string;
  initialSort?: string;
}

export default function ToolsPageClient({
  tools,
  categories,
  initialQuery = '',
  initialCategory = '',
  initialPricing = '',
  initialSort = 'popular',
}: ToolsPageClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPricing, setSelectedPricing] = useState(initialPricing);
  const [sortBy, setSortBy] = useState(initialSort);
  const [showFilters, setShowFilters] = useState(false);

  const filteredTools = useMemo(() => {
    let result = query ? searchTools(query) : tools;

    result = applyFilters(result, {
      categories: selectedCategory ? [selectedCategory] : undefined,
      pricing: selectedPricing ? [selectedPricing as 'free' | 'freemium' | 'paid'] : undefined,
      sortBy: sortBy as 'popular' | 'newest' | 'rating' | 'name',
    });

    return result;
  }, [tools, query, selectedCategory, selectedPricing, sortBy]);

  const clearFilters = () => {
    setQuery('');
    setSelectedCategory('');
    setSelectedPricing('');
    setSortBy('popular');
  };

  const hasActiveFilters = query || selectedCategory || selectedPricing;

  return (
    <div>
      {/* Search and filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools..."
              className="w-full h-11 pl-11 pr-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium placeholder:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
            />
          </div>

          {/* Desktop filters */}
          <div className="hidden lg:flex items-center gap-4">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              options={[
                { label: 'All Categories', value: '' },
                ...categories.map((c) => ({ label: c.name, value: c.slug })),
              ]}
            />
            <Select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              options={[
                { label: 'All Pricing', value: '' },
                { label: 'Free', value: 'free' },
                { label: 'Freemium', value: 'freemium' },
                { label: 'Paid', value: 'paid' },
              ]}
            />
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                { label: 'Most Popular', value: 'popular' },
                { label: 'Newest', value: 'newest' },
                { label: 'Highest Rated', value: 'rating' },
                { label: 'Name A-Z', value: 'name' },
              ]}
            />
          </div>

          {/* Mobile filter toggle */}
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              options={[
                { label: 'All Categories', value: '' },
                ...categories.map((c) => ({ label: c.name, value: c.slug })),
              ]}
            />
            <Select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              options={[
                { label: 'All Pricing', value: '' },
                { label: 'Free', value: 'free' },
                { label: 'Freemium', value: 'freemium' },
                { label: 'Paid', value: 'paid' },
              ]}
            />
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                { label: 'Most Popular', value: 'popular' },
                { label: 'Newest', value: 'newest' },
                { label: 'Highest Rated', value: 'rating' },
                { label: 'Name A-Z', value: 'name' },
              ]}
            />
          </div>
        )}

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-500 dark:text-gray-400">Active filters:</span>
            {query && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                Search: {query}
                <button onClick={() => setQuery('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                {categories.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPricing && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                {selectedPricing}
                <button onClick={() => setSelectedPricing('')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredTools.length} tools
      </div>

      {/* Tools grid */}
      <ToolGrid
        tools={filteredTools}
        emptyMessage="No tools found matching your criteria. Try adjusting your filters."
      />
    </div>
  );
}
