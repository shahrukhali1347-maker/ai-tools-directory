import { AITool, SearchFilters } from '@/types';

export function applyFilters(tools: AITool[], filters: SearchFilters): AITool[] {
  let filtered = [...tools];

  // Category filter
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter(tool =>
      filters.categories!.includes(tool.category) ||
      tool.subcategories.some(sub => filters.categories!.includes(sub))
    );
  }

  // Pricing filter
  if (filters.pricing && filters.pricing.length > 0) {
    filtered = filtered.filter(tool => {
      if (filters.pricing!.includes('free') && tool.pricing.free) return true;
      if (filters.pricing!.includes('freemium') && tool.pricing.model === 'freemium') return true;
      if (filters.pricing!.includes('paid') && !tool.pricing.free && tool.pricing.model !== 'freemium') return true;
      return false;
    });
  }

  // Platform filter
  if (filters.platforms && filters.platforms.length > 0) {
    filtered = filtered.filter(tool =>
      filters.platforms!.some(platform =>
        tool.features.platforms.includes(platform as 'web' | 'ios' | 'android' | 'desktop' | 'api')
      )
    );
  }

  // Rating filter
  if (filters.rating) {
    filtered = filtered.filter(tool => tool.rating.average >= filters.rating!);
  }

  // Sort
  if (filters.sortBy) {
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'popular':
          return b.visits - a.visits;
        case 'newest':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'rating':
          return b.rating.average - a.rating.average;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }

  return filtered;
}

export function getFilterCounts(tools: AITool[]) {
  const counts = {
    pricing: {
      free: 0,
      freemium: 0,
      paid: 0,
    },
    platforms: {
      web: 0,
      ios: 0,
      android: 0,
      desktop: 0,
      api: 0,
    },
    categories: {} as Record<string, number>,
  };

  tools.forEach(tool => {
    // Pricing
    if (tool.pricing.free) counts.pricing.free++;
    else if (tool.pricing.model === 'freemium') counts.pricing.freemium++;
    else counts.pricing.paid++;

    // Platforms
    tool.features.platforms.forEach(platform => {
      counts.platforms[platform]++;
    });

    // Categories
    if (!counts.categories[tool.category]) {
      counts.categories[tool.category] = 0;
    }
    counts.categories[tool.category]++;
  });

  return counts;
}
