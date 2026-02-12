import { Guide } from '@/types';

export const guides: Guide[] = [
  {
    id: '1',
    title: 'How to Use ChatGPT Effectively',
    slug: 'how-to-use-chatgpt',
    description: 'A comprehensive guide to getting the most out of ChatGPT, from writing better prompts to advanced features.',
    content: 'ChatGPT has revolutionized how we interact with AI. This guide will help you master the art of prompt engineering and unlock ChatGPTs full potential.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'chatbots',
    tools: ['chatgpt'],
    difficulty: 'beginner',
    duration: 15,
    steps: [
      {
        number: 1,
        title: 'Understanding ChatGPT Basics',
        content: 'ChatGPT is a large language model that responds to natural language prompts. Start by visiting chat.openai.com and creating a free account.',
      },
      {
        number: 2,
        title: 'Writing Effective Prompts',
        content: 'Be specific in your requests. Instead of "write about dogs," try "write a 300-word article about the health benefits of owning a golden retriever, targeting first-time dog owners."',
      },
      {
        number: 3,
        title: 'Using System Prompts',
        content: 'Set context at the beginning of your conversation. For example: "You are a professional copywriter specializing in tech startups. Help me write marketing copy."',
      },
      {
        number: 4,
        title: 'Iterating and Refining',
        content: 'Don\'t accept the first response. Ask ChatGPT to "make it shorter," "add more examples," or "rewrite in a more casual tone" to refine the output.',
      },
      {
        number: 5,
        title: 'Advanced Features',
        content: 'Explore GPT-4 features like web browsing, DALL-E integration, and code interpreter for enhanced capabilities. Upgrade to ChatGPT Plus for access.',
      },
    ],
    datePublished: '2024-01-15',
    dateUpdated: '2025-01-29',
    author: 'AI Tools Hub Team',
    views: 125000,
  },
  {
    id: '2',
    title: 'Getting Started with Midjourney',
    slug: 'getting-started-with-midjourney',
    description: 'Learn how to create stunning AI-generated images with Midjourney, from joining Discord to mastering prompts.',
    content: 'Midjourney is one of the most popular AI image generators. This guide walks you through everything you need to start creating beautiful AI art.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    category: 'image-generation',
    tools: ['midjourney'],
    difficulty: 'beginner',
    duration: 20,
    steps: [
      {
        number: 1,
        title: 'Join the Midjourney Discord',
        content: 'Go to midjourney.com and click "Join the Beta." You\'ll need a Discord account. Join the Midjourney server to access the AI.',
      },
      {
        number: 2,
        title: 'Subscribe to a Plan',
        content: 'Midjourney requires a subscription. Basic ($10/month) includes ~200 generations. Standard ($30/month) offers unlimited generations.',
      },
      {
        number: 3,
        title: 'Writing Your First Prompt',
        content: 'In any #newbies channel, type /imagine followed by your description. Example: /imagine a serene Japanese garden at sunset, watercolor style',
      },
      {
        number: 4,
        title: 'Understanding Parameters',
        content: 'Add parameters to control output: --ar 16:9 (aspect ratio), --v 6 (version), --style raw (less stylized). Example: /imagine portrait of a wizard --ar 2:3 --v 6',
      },
      {
        number: 5,
        title: 'Upscaling and Variations',
        content: 'After generation, use U1-U4 buttons to upscale images and V1-V4 for variations. The upscaled image is your final, high-resolution output.',
      },
    ],
    datePublished: '2024-02-01',
    dateUpdated: '2025-01-29',
    author: 'AI Tools Hub Team',
    views: 89000,
  },
  {
    id: '3',
    title: 'GitHub Copilot Setup Guide',
    slug: 'github-copilot-setup-guide',
    description: 'Complete guide to setting up and using GitHub Copilot in VS Code for AI-powered code completion.',
    content: 'GitHub Copilot is an AI pair programmer that helps you write code faster. Learn how to set it up and use it effectively in your development workflow.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    category: 'code-assistance',
    tools: ['github-copilot'],
    difficulty: 'beginner',
    duration: 10,
    steps: [
      {
        number: 1,
        title: 'Sign Up for GitHub Copilot',
        content: 'Visit github.com/features/copilot and sign up. Individual plan is $10/month or $100/year. Free for verified students and open source maintainers.',
      },
      {
        number: 2,
        title: 'Install VS Code Extension',
        content: 'Open VS Code, go to Extensions (Ctrl+Shift+X), search for "GitHub Copilot" and install. Sign in with your GitHub account when prompted.',
      },
      {
        number: 3,
        title: 'Using Inline Suggestions',
        content: 'Start typing code and Copilot will show gray suggestions. Press Tab to accept, Esc to dismiss, or Alt+] for next suggestion.',
      },
      {
        number: 4,
        title: 'Using Copilot Chat',
        content: 'Install "GitHub Copilot Chat" extension for conversational AI. Use Ctrl+I to open inline chat or the sidebar for longer discussions.',
      },
      {
        number: 5,
        title: 'Best Practices',
        content: 'Write clear comments to guide Copilot. Break complex tasks into smaller functions. Always review and test generated code before committing.',
      },
    ],
    datePublished: '2024-03-01',
    dateUpdated: '2025-01-29',
    author: 'AI Tools Hub Team',
    views: 67000,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(guide => guide.category === category);
}

export function getAllGuides(): Guide[] {
  return guides;
}

export function getPopularGuides(limit: number = 5): Guide[] {
  return [...guides].sort((a, b) => b.views - a.views).slice(0, limit);
}
