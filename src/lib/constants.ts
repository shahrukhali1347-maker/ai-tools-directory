export const ITEMS_PER_PAGE = 12;

export const CATEGORY_ICONS: Record<string, string> = {
  'chatbots': 'MessageSquare',
  'image-generation': 'Image',
  'content-creation': 'FileText',
  'code-assistance': 'Code',
  'video-generation': 'Video',
  'audio-music': 'Music',
  'productivity': 'Zap',
  'research-analysis': 'Search',
  'design': 'Palette',
  'marketing-seo': 'TrendingUp',
};

export const CATEGORY_COLORS: Record<string, string> = {
  'chatbots': 'bg-blue-500',
  'image-generation': 'bg-purple-500',
  'content-creation': 'bg-green-500',
  'code-assistance': 'bg-yellow-500',
  'video-generation': 'bg-red-500',
  'audio-music': 'bg-pink-500',
  'productivity': 'bg-orange-500',
  'research-analysis': 'bg-cyan-500',
  'design': 'bg-indigo-500',
  'marketing-seo': 'bg-teal-500',
};

export const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop';

export const SOCIAL_SHARE_PLATFORMS = [
  { name: 'Twitter', icon: 'Twitter', baseUrl: 'https://twitter.com/intent/tweet?url=' },
  { name: 'LinkedIn', icon: 'Linkedin', baseUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=' },
  { name: 'Facebook', icon: 'Facebook', baseUrl: 'https://www.facebook.com/sharer/sharer.php?u=' },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};
