import Fuse from 'fuse.js';
import { aiTools } from '@/data/tools';
import { AITool } from '@/types';

const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.3 },
    { name: 'tagline', weight: 0.2 },
    { name: 'description', weight: 0.2 },
    { name: 'tags', weight: 0.15 },
    { name: 'useCases', weight: 0.15 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
};

let fuse: Fuse<AITool> | null = null;

function getFuse() {
  if (!fuse) {
    fuse = new Fuse(aiTools, fuseOptions);
  }
  return fuse;
}

export function searchTools(query: string): AITool[] {
  if (!query.trim()) return aiTools;

  const results = getFuse().search(query);
  return results.map(result => result.item);
}

export function getSearchSuggestions(query: string): string[] {
  const results = searchTools(query).slice(0, 5);
  return results.map(tool => tool.name);
}

export function searchByCategory(categorySlug: string): AITool[] {
  return aiTools.filter(tool =>
    tool.category === categorySlug ||
    tool.subcategories.includes(categorySlug)
  );
}

export function searchByTags(tags: string[]): AITool[] {
  return aiTools.filter(tool =>
    tags.some(tag => tool.tags.includes(tag))
  );
}
