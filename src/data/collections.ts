import { Collection } from '@/types';

export const collections: Collection[] = [
  {
    id: '1',
    title: 'Best Free AI Tools in 2026',
    slug: 'best-free-ai-tools',
    description: 'Discover the best free AI tools that offer powerful features without any cost. Perfect for beginners and budget-conscious users.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tools: ['chatgpt', 'claude', 'gemini', 'stable-diffusion', 'codeium', 'canva-ai', 'semantic-scholar', 'research-rabbit', 'khroma', 'fontjoy'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-07-01',
    dateUpdated: '2026-04-15',
    featured: true,
    tags: ['free', 'beginner', 'essential'],
  },
  {
    id: '2',
    title: 'Essential AI Tools for Developers',
    slug: 'ai-tools-for-developers',
    description: 'A curated collection of AI coding assistants and development tools that every developer should know about.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tools: ['github-copilot', 'cursor', 'tabnine', 'codeium', 'replit-ai', 'codewhisperer', 'cody', 'pieces', 'chatgpt', 'claude'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-08-01',
    dateUpdated: '2026-04-15',
    featured: true,
    tags: ['developers', 'coding', 'programming'],
  },
  {
    id: '3',
    title: 'AI Tools for Content Creators',
    slug: 'ai-tools-for-content-creators',
    description: 'The ultimate toolkit for content creators, from writing and video to images and voice.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tools: ['chatgpt', 'midjourney', 'runway', 'elevenlabs', 'descript', 'jasper', 'canva-ai', 'opus-clip', 'grammarly', 'notion-ai'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-09-01',
    dateUpdated: '2026-04-15',
    featured: true,
    tags: ['content', 'creators', 'youtube', 'social-media'],
  },
  {
    id: '4',
    title: 'AI Tools for Startups',
    slug: 'ai-tools-for-startups',
    description: 'Essential AI tools to help startups move fast, automate workflows, and scale efficiently.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    tools: ['chatgpt', 'notion-ai', 'zapier-ai', 'copy-ai', 'figma-ai', 'otter-ai', 'clickup-ai', 'jasper', 'motion', 'fireflies'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-10-01',
    dateUpdated: '2026-04-15',
    featured: true,
    tags: ['startups', 'business', 'productivity'],
  },
  {
    id: '5',
    title: 'Best AI Image Generators',
    slug: 'best-ai-image-generators',
    description: 'Compare the top AI image generators for creating stunning visuals, art, and designs.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tools: ['midjourney', 'dall-e', 'stable-diffusion', 'leonardo-ai', 'adobe-firefly', 'ideogram', 'playground-ai', 'flux-ai', 'canva-ai', 'nightcafe'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-11-01',
    dateUpdated: '2026-04-15',
    featured: true,
    tags: ['images', 'art', 'design', 'generation'],
  },
  {
    id: '6',
    title: 'AI Tools for Researchers',
    slug: 'ai-tools-for-researchers',
    description: 'Academic and research AI tools to help you find papers, analyze documents, and accelerate discovery.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
    tools: ['elicit', 'consensus', 'semantic-scholar', 'connected-papers', 'scite', 'research-rabbit', 'scispace', 'humata', 'chatpdf', 'perplexity'],
    author: 'Best AI Tools Team',
    dateCreated: '2025-12-01',
    dateUpdated: '2026-04-15',
    featured: false,
    tags: ['research', 'academic', 'papers', 'science'],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(col => col.slug === slug);
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter(col => col.featured);
}

export function getAllCollections(): Collection[] {
  return collections;
}
