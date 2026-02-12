import { AITool } from '@/types';

// Get tool logo - uses Google Favicon API (most reliable) with verified overrides for popular tools
function getToolLogo(name: string, website: string): string {
  // Extract domain from website URL
  const domain = website.replace('https://', '').replace('http://', '').split('/')[0];

  // Only override for tools with verified working high-quality logos
  const verifiedLogos: Record<string, string> = {
    'ChatGPT': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    'DALL-E 3': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    'Codex CLI': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    'Google Gemini': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    'Midjourney': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
    'Notion AI': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    'Canva AI': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    'Figma AI': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    'Zapier AI': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg',
    'Adobe Firefly': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    'Adobe Podcast': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
    'Amazon CodeWhisperer': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'Replit AI': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/200px-New_Replit_Logo.svg.png',
    'GitHub Copilot': 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
  };

  if (verifiedLogos[name]) {
    return verifiedLogos[name];
  }

  // Use Google's favicon service - extremely reliable, works for 99% of websites
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

// Helper function to generate tool data
function createTool(
  id: string,
  name: string,
  slug: string,
  tagline: string,
  description: string,
  category: string,
  subcategories: string[],
  tags: string[],
  website: string,
  pricingModel: 'free' | 'freemium' | 'subscription' | 'one-time' | 'usage-based',
  isFree: boolean,
  startingPrice: number,
  platforms: ('web' | 'ios' | 'android' | 'desktop' | 'api')[],
  rating: number,
  ratingCount: number,
  featured: boolean = false,
  trending: boolean = false
): AITool {
  return {
    id,
    name,
    slug,
    tagline,
    description,
    fullDescription: `${description} ${name} offers powerful features for ${category.replace('-', ' ')} tasks, making it a popular choice among professionals and enthusiasts alike.`,
    logo: getToolLogo(name, website),
    screenshots: [
      `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop`,
      `https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=600&fit=crop`,
    ],
    website,
    category,
    subcategories,
    tags,
    useCases: tags.slice(0, 3).map(tag => `${tag} workflows`),
    pricing: {
      model: pricingModel,
      free: isFree,
      trial: !isFree,
      trialDays: isFree ? undefined : 14,
      plans: [
        {
          name: isFree ? 'Free' : 'Starter',
          price: isFree ? 0 : startingPrice,
          currency: 'USD',
          interval: 'monthly',
          features: ['Basic features', 'Email support', 'Standard usage limits'],
        },
        {
          name: 'Pro',
          price: startingPrice * 2 || 20,
          currency: 'USD',
          interval: 'monthly',
          features: ['All features', 'Priority support', 'Higher limits', 'API access'],
          popular: true,
        },
      ],
    },
    features: {
      core: [`AI-powered ${category.replace('-', ' ')}`, 'Easy to use interface', 'Fast processing', 'High quality output'],
      advanced: ['API integration', 'Custom workflows', 'Team collaboration'],
      integrations: ['Zapier', 'API', 'Webhooks'],
      platforms,
    },
    rating: {
      average: rating,
      count: ratingCount,
      distribution: {
        5: Math.floor(ratingCount * 0.6),
        4: Math.floor(ratingCount * 0.25),
        3: Math.floor(ratingCount * 0.1),
        2: Math.floor(ratingCount * 0.03),
        1: Math.floor(ratingCount * 0.02),
      },
    },
    reviews: [],
    seo: {
      metaTitle: `${name} - ${tagline}`,
      metaDescription: description,
      keywords: [name.toLowerCase(), ...tags, category],
    },
    verified: true,
    featured,
    trending,
    dateAdded: '2024-01-15',
    dateUpdated: '2025-01-29',
    visits: Math.floor(Math.random() * 500000) + 10000,
    bookmarks: Math.floor(Math.random() * 50000) + 1000,
    alternatives: [],
  };
}

export const aiTools: AITool[] = [
  // ==================== CHATBOTS & CONVERSATIONAL AI (10 tools) ====================
  createTool('1', 'ChatGPT', 'chatgpt', 'AI-powered conversational assistant', 'ChatGPT is an advanced AI language model by OpenAI that can engage in natural conversations, answer questions, write code, and assist with various tasks.', 'chatbots', ['conversational-ai', 'text-generation'], ['gpt-4', 'natural-language', 'conversation', 'writing', 'coding'], 'https://chat.openai.com', 'freemium', true, 20, ['web', 'ios', 'android', 'api'], 4.8, 125000, true, true),
  createTool('2', 'Claude', 'claude', 'Helpful, harmless, and honest AI assistant', 'Claude by Anthropic is a next-generation AI assistant designed to be helpful, harmless, and honest. It excels at analysis, writing, coding, and complex reasoning tasks.', 'chatbots', ['conversational-ai', 'text-generation'], ['anthropic', 'ai-assistant', 'analysis', 'writing', 'reasoning'], 'https://claude.ai', 'freemium', true, 20, ['web', 'ios', 'android', 'api'], 4.9, 89000, true, true),
  createTool('3', 'Google Gemini', 'gemini', 'Google\'s most capable AI model', 'Google Gemini is a multimodal AI that can understand and generate text, code, images, and more. Built by Google DeepMind for next-generation AI applications.', 'chatbots', ['conversational-ai', 'multimodal'], ['google', 'multimodal', 'reasoning', 'coding', 'analysis'], 'https://gemini.google.com', 'freemium', true, 20, ['web', 'ios', 'android', 'api'], 4.6, 78000, true, true),
  createTool('4', 'Perplexity AI', 'perplexity', 'AI-powered answer engine', 'Perplexity AI is an answer engine that uses AI to provide accurate, up-to-date answers with cited sources. Perfect for research and fact-checking.', 'chatbots', ['search', 'research'], ['search', 'research', 'citations', 'real-time', 'knowledge'], 'https://perplexity.ai', 'freemium', true, 20, ['web', 'ios', 'android', 'api'], 4.7, 56000, true, true),
  createTool('5', 'Pi', 'pi', 'Your personal AI companion', 'Pi by Inflection AI is designed to be a kind and supportive personal AI companion for conversations, emotional support, and everyday assistance.', 'chatbots', ['conversational-ai', 'personal-assistant'], ['personal', 'emotional', 'companion', 'support', 'conversation'], 'https://pi.ai', 'free', true, 0, ['web', 'ios', 'android'], 4.5, 34000, false, false),
  createTool('6', 'Character.AI', 'character-ai', 'Chat with AI characters', 'Character.AI lets you create and chat with AI characters. From historical figures to fictional characters, explore endless conversations.', 'chatbots', ['entertainment', 'roleplay'], ['characters', 'roleplay', 'entertainment', 'creative', 'chat'], 'https://character.ai', 'freemium', true, 10, ['web', 'ios', 'android'], 4.4, 67000, false, true),
  createTool('7', 'Replika', 'replika', 'AI companion for meaningful conversations', 'Replika is an AI companion designed for emotional support and meaningful conversations. Build a relationship with your personal AI friend.', 'chatbots', ['personal-assistant', 'wellness'], ['companion', 'emotional', 'wellness', 'chat', 'support'], 'https://replika.ai', 'freemium', true, 15, ['web', 'ios', 'android'], 4.3, 45000, false, false),
  createTool('8', 'Poe', 'poe', 'Access multiple AI models in one place', 'Poe by Quora provides access to multiple AI models including GPT-4, Claude, and more in a single platform. Compare and use the best AI for each task.', 'chatbots', ['aggregator', 'multi-model'], ['multi-model', 'gpt-4', 'claude', 'comparison', 'chat'], 'https://poe.com', 'freemium', true, 20, ['web', 'ios', 'android'], 4.5, 38000, false, false),
  createTool('9', 'YouChat', 'youchat', 'AI search assistant by You.com', 'YouChat combines conversational AI with web search to provide accurate, sourced answers. Get AI-powered search results with citations.', 'chatbots', ['search', 'research'], ['search', 'ai-search', 'citations', 'research', 'answers'], 'https://you.com', 'freemium', true, 15, ['web', 'api'], 4.4, 28000, false, false),
  createTool('10', 'Jasper Chat', 'jasper-chat', 'AI chat for marketing teams', 'Jasper Chat is designed specifically for marketing and business teams, helping create content, brainstorm ideas, and improve marketing workflows.', 'chatbots', ['marketing', 'business'], ['marketing', 'business', 'content', 'brainstorm', 'teams'], 'https://jasper.ai', 'subscription', false, 49, ['web', 'api'], 4.5, 32000, false, false),

  // ==================== IMAGE GENERATION (10 tools) ====================
  createTool('11', 'Midjourney', 'midjourney', 'AI-powered image generation', 'Midjourney creates stunning AI-generated images from text descriptions. Known for artistic quality and photorealistic outputs.', 'image-generation', ['ai-art', 'design'], ['image-generation', 'ai-art', 'text-to-image', 'creative', 'design'], 'https://midjourney.com', 'subscription', false, 10, ['web'], 4.9, 98000, true, true),
  createTool('12', 'DALL-E 3', 'dall-e', 'OpenAI\'s image generation model', 'DALL-E 3 by OpenAI generates highly detailed images from text prompts. Integrated with ChatGPT for seamless creative workflows.', 'image-generation', ['ai-art', 'design'], ['openai', 'image-generation', 'text-to-image', 'creative', 'art'], 'https://openai.com/dall-e-3', 'usage-based', false, 20, ['web', 'api'], 4.7, 76000, true, true),
  createTool('13', 'Stable Diffusion', 'stable-diffusion', 'Open-source image generation', 'Stable Diffusion is an open-source AI image generator. Run locally or use cloud versions for high-quality image generation.', 'image-generation', ['ai-art', 'open-source'], ['open-source', 'image-generation', 'local', 'customizable', 'art'], 'https://stability.ai', 'freemium', true, 10, ['web', 'desktop', 'api'], 4.6, 67000, true, true),
  createTool('14', 'Leonardo AI', 'leonardo-ai', 'AI image generation for creators', 'Leonardo AI offers powerful image generation with fine-tuned models for game assets, concept art, and professional creative work.', 'image-generation', ['ai-art', 'game-assets'], ['game-art', 'concept-art', 'image-generation', 'creative', 'professional'], 'https://leonardo.ai', 'freemium', true, 12, ['web', 'api'], 4.7, 54000, false, true),
  createTool('15', 'Adobe Firefly', 'adobe-firefly', 'Adobe\'s generative AI', 'Adobe Firefly brings generative AI to Creative Cloud. Create images, text effects, and more with commercially safe AI.', 'image-generation', ['ai-art', 'design'], ['adobe', 'commercial', 'image-generation', 'design', 'safe'], 'https://firefly.adobe.com', 'freemium', true, 5, ['web', 'desktop'], 4.5, 48000, true, false),
  createTool('16', 'Ideogram', 'ideogram', 'AI image generation with text', 'Ideogram excels at generating images with accurate text rendering. Perfect for logos, posters, and designs requiring text.', 'image-generation', ['ai-art', 'typography'], ['text-in-image', 'typography', 'logos', 'design', 'posters'], 'https://ideogram.ai', 'freemium', true, 8, ['web'], 4.6, 32000, false, true),
  createTool('17', 'Playground AI', 'playground-ai', 'Free AI image generation', 'Playground AI offers free AI image generation with multiple models. Create, edit, and mix images with an intuitive interface.', 'image-generation', ['ai-art', 'editing'], ['free', 'image-generation', 'editing', 'creative', 'community'], 'https://playground.ai', 'freemium', true, 15, ['web'], 4.4, 28000, false, false),
  createTool('18', 'NightCafe', 'nightcafe', 'AI art generator community', 'NightCafe is an AI art generator with a vibrant community. Create art using multiple AI models and share with fellow creators.', 'image-generation', ['ai-art', 'community'], ['community', 'ai-art', 'multiple-models', 'creative', 'social'], 'https://nightcafe.studio', 'freemium', true, 10, ['web', 'ios', 'android'], 4.3, 24000, false, false),
  createTool('19', 'Canva AI', 'canva-ai', 'AI-powered design platform', 'Canva AI integrates generative AI into design workflows. Create images, remove backgrounds, and enhance designs with AI.', 'image-generation', ['design', 'editing'], ['design', 'templates', 'ai-tools', 'editing', 'graphics'], 'https://canva.com', 'freemium', true, 13, ['web', 'ios', 'android', 'desktop'], 4.7, 156000, true, false),
  createTool('20', 'Flux AI', 'flux-ai', 'Next-gen image generation', 'Flux AI by Black Forest Labs offers state-of-the-art image generation with exceptional quality and prompt adherence.', 'image-generation', ['ai-art', 'quality'], ['high-quality', 'image-generation', 'detailed', 'realistic', 'art'], 'https://blackforestlabs.ai', 'usage-based', false, 5, ['web', 'api'], 4.8, 18000, false, true),

  // ==================== CONTENT CREATION & WRITING (10 tools) ====================
  createTool('21', 'Jasper', 'jasper', 'AI content platform for marketing', 'Jasper is an AI content platform that helps marketing teams create on-brand content faster. From blog posts to ads, scale your content.', 'content-creation', ['marketing', 'copywriting'], ['marketing', 'copywriting', 'content', 'brand', 'teams'], 'https://jasper.ai', 'subscription', false, 49, ['web', 'api'], 4.6, 45000, true, false),
  createTool('22', 'Copy.ai', 'copy-ai', 'AI copywriting assistant', 'Copy.ai generates marketing copy, blog posts, and social media content. Speed up your writing with AI-powered templates.', 'content-creation', ['copywriting', 'marketing'], ['copywriting', 'marketing', 'social-media', 'templates', 'content'], 'https://copy.ai', 'freemium', true, 49, ['web', 'api'], 4.5, 38000, true, false),
  createTool('23', 'Writesonic', 'writesonic', 'AI writer for blogs and marketing', 'Writesonic creates SEO-optimized blog posts, landing pages, and marketing content. Built-in AI art and fact-checking features.', 'content-creation', ['blogging', 'seo'], ['blogging', 'seo', 'marketing', 'content', 'articles'], 'https://writesonic.com', 'freemium', true, 20, ['web', 'api'], 4.4, 32000, false, false),
  createTool('24', 'Rytr', 'rytr', 'AI writing assistant', 'Rytr is an affordable AI writing assistant for creating blog posts, emails, and social media content in over 30 languages.', 'content-creation', ['writing', 'multilingual'], ['affordable', 'multilingual', 'writing', 'content', 'emails'], 'https://rytr.me', 'freemium', true, 9, ['web', 'api'], 4.4, 28000, false, false),
  createTool('25', 'Grammarly', 'grammarly', 'AI writing enhancement', 'Grammarly uses AI to improve your writing with grammar, clarity, and tone suggestions. Essential for professional communication.', 'content-creation', ['grammar', 'editing'], ['grammar', 'writing', 'editing', 'clarity', 'professional'], 'https://grammarly.com', 'freemium', true, 12, ['web', 'ios', 'android', 'desktop', 'api'], 4.7, 189000, true, false),
  createTool('26', 'QuillBot', 'quillbot', 'AI paraphrasing tool', 'QuillBot helps rewrite and paraphrase text while maintaining meaning. Includes grammar checker, summarizer, and citation tools.', 'content-creation', ['paraphrasing', 'editing'], ['paraphrasing', 'rewriting', 'summarizer', 'grammar', 'academic'], 'https://quillbot.com', 'freemium', true, 10, ['web', 'desktop'], 4.5, 67000, false, false),
  createTool('27', 'Wordtune', 'wordtune', 'AI writing companion', 'Wordtune rewrites sentences to improve clarity and style. Get alternative phrasings and enhance your writing instantly.', 'content-creation', ['rewriting', 'editing'], ['rewriting', 'clarity', 'style', 'editing', 'suggestions'], 'https://wordtune.com', 'freemium', true, 10, ['web', 'desktop'], 4.4, 34000, false, false),
  createTool('28', 'Anyword', 'anyword', 'AI copywriting with performance prediction', 'Anyword generates marketing copy and predicts performance. Optimize content for conversions with data-driven AI.', 'content-creation', ['copywriting', 'analytics'], ['copywriting', 'performance', 'analytics', 'marketing', 'optimization'], 'https://anyword.com', 'subscription', false, 49, ['web', 'api'], 4.5, 18000, false, false),
  createTool('29', 'Hemingway Editor', 'hemingway', 'Make your writing bold and clear', 'Hemingway Editor highlights complex sentences and common errors. Make your writing clear, bold, and easy to read.', 'content-creation', ['editing', 'clarity'], ['editing', 'clarity', 'readability', 'simple', 'writing'], 'https://hemingwayapp.com', 'one-time', false, 20, ['web', 'desktop'], 4.6, 45000, false, false),
  createTool('30', 'Notion AI', 'notion-ai', 'AI-powered workspace', 'Notion AI enhances your Notion workspace with AI writing, summarization, and brainstorming capabilities.', 'content-creation', ['productivity', 'notes'], ['notion', 'workspace', 'writing', 'summarization', 'organization'], 'https://notion.so', 'subscription', false, 10, ['web', 'ios', 'android', 'desktop'], 4.7, 78000, true, true),

  // ==================== CODE ASSISTANCE (10 tools) ====================
  createTool('31', 'GitHub Copilot', 'github-copilot', 'AI pair programmer', 'GitHub Copilot suggests code and entire functions in real-time. Built on OpenAI Codex for intelligent code completion.', 'code-assistance', ['coding', 'autocomplete'], ['coding', 'autocomplete', 'github', 'ide', 'programming'], 'https://github.com/features/copilot', 'subscription', false, 10, ['desktop', 'api'], 4.8, 145000, true, true),
  createTool('32', 'Cursor', 'cursor', 'AI-first code editor', 'Cursor is an AI-first code editor built for pair programming with AI. Write, edit, and debug code faster with AI assistance.', 'code-assistance', ['ide', 'coding'], ['ide', 'coding', 'ai-editor', 'programming', 'debugging'], 'https://cursor.sh', 'freemium', true, 20, ['desktop'], 4.9, 67000, true, true),
  createTool('33', 'Tabnine', 'tabnine', 'AI code completion', 'Tabnine provides AI code completions that run locally or in the cloud. Privacy-focused with support for all major languages.', 'code-assistance', ['autocomplete', 'privacy'], ['autocomplete', 'privacy', 'local', 'coding', 'completion'], 'https://tabnine.com', 'freemium', true, 12, ['desktop', 'api'], 4.5, 56000, false, false),
  createTool('34', 'Codeium', 'codeium', 'Free AI code completion', 'Codeium offers free AI code completion for individuals. Fast, accurate suggestions across 70+ programming languages.', 'code-assistance', ['autocomplete', 'free'], ['free', 'autocomplete', 'coding', 'fast', 'multilanguage'], 'https://codeium.com', 'freemium', true, 15, ['desktop', 'api'], 4.6, 42000, false, true),
  createTool('35', 'Replit AI', 'replit-ai', 'AI-powered coding environment', 'Replit AI brings code generation and assistance to the browser-based IDE. Code, collaborate, and deploy with AI help.', 'code-assistance', ['ide', 'cloud'], ['browser-ide', 'cloud', 'collaboration', 'coding', 'deployment'], 'https://replit.com', 'freemium', true, 25, ['web', 'ios', 'android'], 4.5, 48000, false, false),
  createTool('36', 'Amazon CodeWhisperer', 'codewhisperer', 'AI coding companion by AWS', 'Amazon CodeWhisperer generates code suggestions trained on Amazon and open-source code. Optimized for AWS services.', 'code-assistance', ['aws', 'autocomplete'], ['aws', 'amazon', 'coding', 'cloud', 'autocomplete'], 'https://aws.amazon.com/codewhisperer', 'freemium', true, 19, ['desktop', 'api'], 4.4, 28000, false, false),
  createTool('37', 'Sourcegraph Cody', 'cody', 'AI coding assistant with codebase context', 'Cody by Sourcegraph understands your entire codebase. Get AI assistance that knows your code, APIs, and conventions.', 'code-assistance', ['codebase', 'context'], ['codebase', 'context-aware', 'enterprise', 'coding', 'search'], 'https://sourcegraph.com/cody', 'freemium', true, 9, ['desktop', 'api'], 4.6, 18000, false, true),
  createTool('38', 'Pieces for Developers', 'pieces', 'AI-powered code snippets', 'Pieces saves, enriches, and reuses code snippets with AI. Intelligent code organization across your development workflow.', 'code-assistance', ['snippets', 'organization'], ['snippets', 'organization', 'workflow', 'coding', 'productivity'], 'https://pieces.app', 'freemium', true, 10, ['desktop'], 4.5, 15000, false, false),
  createTool('39', 'Codex CLI', 'codex-cli', 'AI-powered command line', 'Codex CLI translates natural language to shell commands. Execute complex terminal operations with plain English.', 'code-assistance', ['cli', 'terminal'], ['cli', 'terminal', 'commands', 'shell', 'natural-language'], 'https://github.com/openai/codex-cli', 'free', true, 0, ['desktop'], 4.3, 12000, false, false),
  createTool('40', 'Mutable AI', 'mutable-ai', 'AI-powered code refactoring', 'Mutable AI helps refactor and document code. Transform codebases with AI-assisted improvements and documentation.', 'code-assistance', ['refactoring', 'documentation'], ['refactoring', 'documentation', 'code-quality', 'improvement', 'ai'], 'https://mutable.ai', 'freemium', true, 20, ['desktop', 'api'], 4.4, 8000, false, false),

  // ==================== VIDEO GENERATION & EDITING (10 tools) ====================
  createTool('41', 'Runway', 'runway', 'AI creative suite for video', 'Runway offers AI-powered video generation, editing, and effects. Create stunning videos with Gen-2 and other AI models.', 'video-generation', ['video-editing', 'generation'], ['video-generation', 'editing', 'effects', 'creative', 'gen-2'], 'https://runway.ml', 'freemium', true, 15, ['web', 'api'], 4.7, 67000, true, true),
  createTool('42', 'Synthesia', 'synthesia', 'AI video generation platform', 'Synthesia creates professional videos with AI avatars. Generate training videos, marketing content, and more without cameras.', 'video-generation', ['avatars', 'business'], ['avatars', 'business', 'training', 'marketing', 'professional'], 'https://synthesia.io', 'subscription', false, 30, ['web', 'api'], 4.6, 45000, true, false),
  createTool('43', 'HeyGen', 'heygen', 'AI video creation with avatars', 'HeyGen generates videos with realistic AI avatars and voices. Perfect for marketing, training, and personalized content.', 'video-generation', ['avatars', 'marketing'], ['avatars', 'voices', 'marketing', 'personalization', 'business'], 'https://heygen.com', 'freemium', true, 30, ['web', 'api'], 4.6, 38000, false, true),
  createTool('44', 'Pictory', 'pictory', 'AI video creation from text', 'Pictory transforms blog posts and scripts into engaging videos. Auto-generate videos with stock footage and AI voiceovers.', 'video-generation', ['text-to-video', 'content'], ['text-to-video', 'blog', 'stock-footage', 'voiceover', 'content'], 'https://pictory.ai', 'subscription', false, 23, ['web'], 4.5, 28000, false, false),
  createTool('45', 'InVideo', 'invideo', 'AI video editor', 'InVideo offers AI-powered video editing with templates. Create professional videos in minutes with intelligent assistance.', 'video-generation', ['editing', 'templates'], ['editing', 'templates', 'professional', 'quick', 'marketing'], 'https://invideo.io', 'freemium', true, 25, ['web'], 4.4, 56000, false, false),
  createTool('46', 'Descript', 'descript', 'AI video and podcast editor', 'Descript edits video and audio by editing text. Features include AI voice cloning, filler word removal, and transcription.', 'video-generation', ['editing', 'podcast'], ['editing', 'podcast', 'transcription', 'voice-cloning', 'text-based'], 'https://descript.com', 'freemium', true, 15, ['web', 'desktop'], 4.7, 48000, true, false),
  createTool('47', 'Lumen5', 'lumen5', 'AI video creation for marketing', 'Lumen5 transforms blog content into engaging videos. AI-powered templates and stock footage for content marketing.', 'video-generation', ['marketing', 'content'], ['marketing', 'content', 'blog-to-video', 'templates', 'social'], 'https://lumen5.com', 'freemium', true, 29, ['web'], 4.4, 32000, false, false),
  createTool('48', 'Opus Clip', 'opus-clip', 'AI video clipping', 'Opus Clip uses AI to find the best clips from long videos. Turn podcasts and streams into viral short-form content.', 'video-generation', ['clipping', 'shorts'], ['clipping', 'shorts', 'viral', 'podcast', 'repurposing'], 'https://opus.pro', 'freemium', true, 15, ['web'], 4.6, 24000, false, true),
  createTool('49', 'Kapwing', 'kapwing', 'Online video editor with AI', 'Kapwing is a collaborative video editor with AI features. Auto-subtitles, background removal, and smart editing tools.', 'video-generation', ['editing', 'collaboration'], ['editing', 'collaboration', 'subtitles', 'online', 'tools'], 'https://kapwing.com', 'freemium', true, 24, ['web'], 4.5, 67000, false, false),
  createTool('50', 'FlexClip', 'flexclip', 'Easy AI video maker', 'FlexClip offers simple AI-powered video creation. Templates, stock media, and AI tools for quick video production.', 'video-generation', ['templates', 'easy'], ['easy', 'templates', 'stock-media', 'quick', 'simple'], 'https://flexclip.com', 'freemium', true, 10, ['web'], 4.3, 28000, false, false),

  // ==================== AUDIO & MUSIC (10 tools) ====================
  createTool('51', 'ElevenLabs', 'elevenlabs', 'AI voice generation', 'ElevenLabs creates the most realistic AI voices. Text-to-speech, voice cloning, and dubbing for content creators.', 'audio-music', ['voice', 'tts'], ['voice', 'text-to-speech', 'cloning', 'realistic', 'dubbing'], 'https://elevenlabs.io', 'freemium', true, 5, ['web', 'api'], 4.8, 78000, true, true),
  createTool('52', 'Murf AI', 'murf', 'AI voice generator', 'Murf AI generates studio-quality voiceovers. Choose from 120+ voices in 20+ languages for videos and presentations.', 'audio-music', ['voiceover', 'business'], ['voiceover', 'studio-quality', 'multilingual', 'business', 'professional'], 'https://murf.ai', 'freemium', true, 29, ['web', 'api'], 4.6, 45000, false, false),
  createTool('53', 'Speechify', 'speechify', 'Text-to-speech app', 'Speechify converts text to natural speech. Read articles, documents, and books with AI voices on any device.', 'audio-music', ['tts', 'reading'], ['text-to-speech', 'reading', 'accessibility', 'audiobooks', 'mobile'], 'https://speechify.com', 'freemium', true, 11, ['web', 'ios', 'android', 'desktop'], 4.5, 89000, false, false),
  createTool('54', 'AIVA', 'aiva', 'AI music composer', 'AIVA composes emotional soundtrack music using AI. Create original music for videos, games, and commercial projects.', 'audio-music', ['composition', 'soundtrack'], ['music', 'composition', 'soundtrack', 'emotional', 'royalty-free'], 'https://aiva.ai', 'freemium', true, 15, ['web'], 4.5, 28000, false, false),
  createTool('55', 'Soundraw', 'soundraw', 'AI music generation', 'Soundraw generates royalty-free music with AI. Customize mood, length, and instruments for unique tracks.', 'audio-music', ['music', 'royalty-free'], ['music-generation', 'royalty-free', 'customizable', 'mood', 'instruments'], 'https://soundraw.io', 'subscription', false, 17, ['web'], 4.4, 24000, false, false),
  createTool('56', 'Boomy', 'boomy', 'Create and release AI music', 'Boomy lets anyone create original songs with AI. Generate, customize, and release music to streaming platforms.', 'audio-music', ['music', 'creation'], ['music-creation', 'streaming', 'release', 'original', 'easy'], 'https://boomy.com', 'freemium', true, 10, ['web'], 4.3, 18000, false, false),
  createTool('57', 'Suno', 'suno', 'AI song generator', 'Suno creates complete songs with vocals and music from text prompts. Generate full songs in any style instantly.', 'audio-music', ['songs', 'vocals'], ['songs', 'vocals', 'music', 'generation', 'text-to-song'], 'https://suno.ai', 'freemium', true, 10, ['web'], 4.7, 56000, true, true),
  createTool('58', 'Lalal.ai', 'lalal-ai', 'AI audio separation', 'Lalal.ai separates vocals and instruments from any audio. Extract stems for remixing, karaoke, and production.', 'audio-music', ['separation', 'stems'], ['audio-separation', 'vocals', 'stems', 'remixing', 'karaoke'], 'https://lalal.ai', 'freemium', true, 15, ['web', 'api'], 4.6, 34000, false, false),
  createTool('59', 'Adobe Podcast', 'adobe-podcast', 'AI audio enhancement', 'Adobe Podcast enhances audio recordings with AI. Remove noise, improve clarity, and create studio-quality sound.', 'audio-music', ['enhancement', 'podcast'], ['audio-enhancement', 'noise-removal', 'clarity', 'podcast', 'adobe'], 'https://podcast.adobe.com', 'freemium', true, 0, ['web'], 4.5, 28000, false, false),
  createTool('60', 'Krisp', 'krisp', 'AI noise cancellation', 'Krisp removes background noise and echo from calls. Crystal clear audio for meetings and recordings.', 'audio-music', ['noise-cancellation', 'calls'], ['noise-cancellation', 'meetings', 'calls', 'echo', 'clear-audio'], 'https://krisp.ai', 'freemium', true, 12, ['desktop', 'api'], 4.6, 45000, false, false),

  // ==================== PRODUCTIVITY & AUTOMATION (10 tools) ====================
  createTool('61', 'Otter.ai', 'otter-ai', 'AI meeting transcription', 'Otter.ai transcribes meetings in real-time. Get searchable transcripts, summaries, and action items automatically.', 'productivity', ['transcription', 'meetings'], ['transcription', 'meetings', 'notes', 'summaries', 'collaboration'], 'https://otter.ai', 'freemium', true, 17, ['web', 'ios', 'android'], 4.6, 67000, true, false),
  createTool('62', 'Mem', 'mem', 'AI-powered notes', 'Mem organizes your notes with AI. Automatic organization, smart search, and AI-powered writing assistance.', 'productivity', ['notes', 'organization'], ['notes', 'organization', 'ai-search', 'writing', 'knowledge'], 'https://mem.ai', 'freemium', true, 15, ['web', 'ios', 'desktop'], 4.5, 28000, false, false),
  createTool('63', 'Taskade', 'taskade', 'AI-powered project management', 'Taskade combines project management with AI. Generate tasks, mind maps, and workflows with AI assistance.', 'productivity', ['project-management', 'ai'], ['project-management', 'tasks', 'mind-maps', 'collaboration', 'ai'], 'https://taskade.com', 'freemium', true, 10, ['web', 'ios', 'android', 'desktop'], 4.5, 34000, false, false),
  createTool('64', 'Coda AI', 'coda-ai', 'AI-powered documents', 'Coda AI brings intelligence to your documents. Generate content, analyze data, and automate workflows.', 'productivity', ['documents', 'automation'], ['documents', 'automation', 'analysis', 'workflows', 'collaboration'], 'https://coda.io', 'freemium', true, 12, ['web', 'ios', 'android'], 4.5, 32000, false, false),
  createTool('65', 'ClickUp AI', 'clickup-ai', 'AI for project management', 'ClickUp AI accelerates project management. Generate tasks, summarize content, and automate repetitive work.', 'productivity', ['project-management', 'automation'], ['project-management', 'tasks', 'automation', 'summaries', 'teams'], 'https://clickup.com', 'freemium', true, 7, ['web', 'ios', 'android', 'desktop'], 4.6, 78000, true, false),
  createTool('66', 'Motion', 'motion', 'AI calendar and scheduling', 'Motion uses AI to automatically schedule your tasks and meetings. Intelligent time management for maximum productivity.', 'productivity', ['calendar', 'scheduling'], ['calendar', 'scheduling', 'time-management', 'automatic', 'planning'], 'https://usemotion.com', 'subscription', false, 34, ['web', 'ios', 'desktop'], 4.7, 24000, false, true),
  createTool('67', 'Reclaim.ai', 'reclaim-ai', 'AI scheduling assistant', 'Reclaim.ai intelligently schedules meetings, tasks, and habits. Protect focus time and optimize your calendar.', 'productivity', ['calendar', 'habits'], ['scheduling', 'calendar', 'habits', 'focus-time', 'optimization'], 'https://reclaim.ai', 'freemium', true, 10, ['web'], 4.6, 18000, false, false),
  createTool('68', 'Clockwise', 'clockwise', 'AI calendar optimization', 'Clockwise optimizes team calendars with AI. Find meeting times, protect focus time, and reduce scheduling conflicts.', 'productivity', ['calendar', 'teams'], ['calendar', 'teams', 'optimization', 'focus-time', 'scheduling'], 'https://clockwise.com', 'freemium', true, 7, ['web'], 4.5, 28000, false, false),
  createTool('69', 'Zapier AI', 'zapier-ai', 'AI-powered automation', 'Zapier AI creates automations from natural language. Connect apps and automate workflows with AI assistance.', 'productivity', ['automation', 'integration'], ['automation', 'integration', 'workflows', 'no-code', 'ai'], 'https://zapier.com', 'freemium', true, 20, ['web', 'api'], 4.7, 145000, true, false),
  createTool('70', 'Fireflies.ai', 'fireflies', 'AI meeting assistant', 'Fireflies.ai records, transcribes, and summarizes meetings. Search across meetings and generate action items.', 'productivity', ['meetings', 'transcription'], ['meetings', 'transcription', 'summaries', 'search', 'action-items'], 'https://fireflies.ai', 'freemium', true, 18, ['web', 'ios', 'android'], 4.5, 45000, false, false),

  // ==================== RESEARCH & ANALYSIS (10 tools) ====================
  createTool('71', 'Elicit', 'elicit', 'AI research assistant', 'Elicit uses AI to help with research workflows. Find papers, extract claims, and synthesize information.', 'research-analysis', ['research', 'papers'], ['research', 'papers', 'academic', 'synthesis', 'literature'], 'https://elicit.org', 'freemium', true, 10, ['web'], 4.6, 34000, true, false),
  createTool('72', 'Consensus', 'consensus', 'AI-powered research search', 'Consensus finds and summarizes scientific research. Get evidence-based answers from peer-reviewed papers.', 'research-analysis', ['research', 'science'], ['research', 'science', 'evidence', 'papers', 'summaries'], 'https://consensus.app', 'freemium', true, 10, ['web'], 4.5, 28000, false, true),
  createTool('73', 'Semantic Scholar', 'semantic-scholar', 'AI-powered research tool', 'Semantic Scholar uses AI to help find relevant research. Discover papers, track citations, and explore connections.', 'research-analysis', ['research', 'citations'], ['research', 'citations', 'papers', 'academic', 'discovery'], 'https://semanticscholar.org', 'free', true, 0, ['web', 'api'], 4.7, 89000, false, false),
  createTool('74', 'Connected Papers', 'connected-papers', 'Visual research exploration', 'Connected Papers creates visual graphs of related papers. Explore research connections and find similar work.', 'research-analysis', ['research', 'visualization'], ['research', 'visualization', 'papers', 'connections', 'exploration'], 'https://connectedpapers.com', 'freemium', true, 6, ['web'], 4.5, 45000, false, false),
  createTool('75', 'Iris.ai', 'iris-ai', 'AI for R&D teams', 'Iris.ai provides AI tools for R&D and research teams. Extract insights, analyze documents, and accelerate discovery.', 'research-analysis', ['r&d', 'enterprise'], ['r&d', 'enterprise', 'documents', 'insights', 'analysis'], 'https://iris.ai', 'subscription', false, 100, ['web', 'api'], 4.4, 8000, false, false),
  createTool('76', 'Scite', 'scite', 'Smart citation analysis', 'Scite shows how papers have been cited. Understand if citations support, contrast, or mention the research.', 'research-analysis', ['citations', 'analysis'], ['citations', 'analysis', 'support', 'contrast', 'research'], 'https://scite.ai', 'freemium', true, 20, ['web', 'api'], 4.5, 24000, false, false),
  createTool('77', 'Research Rabbit', 'research-rabbit', 'Research discovery tool', 'Research Rabbit helps discover related papers and authors. Build collections and visualize research landscapes.', 'research-analysis', ['discovery', 'papers'], ['discovery', 'papers', 'collections', 'visualization', 'free'], 'https://researchrabbit.ai', 'free', true, 0, ['web'], 4.6, 32000, false, false),
  createTool('78', 'SciSpace', 'scispace', 'AI research assistant', 'SciSpace explains complex papers, finds related work, and helps write research. Your AI co-pilot for academia.', 'research-analysis', ['papers', 'writing'], ['papers', 'explanation', 'writing', 'academic', 'copilot'], 'https://scispace.com', 'freemium', true, 12, ['web'], 4.5, 28000, false, false),
  createTool('79', 'Humata', 'humata', 'AI for document analysis', 'Humata lets you chat with your documents. Upload PDFs and get instant answers, summaries, and insights.', 'research-analysis', ['documents', 'chat'], ['documents', 'pdf', 'chat', 'summaries', 'insights'], 'https://humata.ai', 'freemium', true, 15, ['web'], 4.4, 24000, false, false),
  createTool('80', 'ChatPDF', 'chatpdf', 'Chat with any PDF', 'ChatPDF lets you ask questions about PDF documents. Upload research papers, reports, or books and get answers.', 'research-analysis', ['pdf', 'chat'], ['pdf', 'chat', 'documents', 'questions', 'analysis'], 'https://chatpdf.com', 'freemium', true, 5, ['web'], 4.5, 56000, false, false),

  // ==================== DESIGN & UI/UX (10 tools) ====================
  createTool('81', 'Figma AI', 'figma-ai', 'AI-powered design', 'Figma AI brings intelligent features to design. Generate designs, rename layers, and get AI-powered suggestions.', 'design', ['ui-design', 'collaboration'], ['figma', 'ui-design', 'collaboration', 'ai-features', 'productivity'], 'https://figma.com', 'freemium', true, 15, ['web', 'desktop'], 4.8, 234000, true, true),
  createTool('82', 'Uizard', 'uizard', 'AI UI design tool', 'Uizard turns sketches and screenshots into editable designs. Rapid prototyping with AI assistance.', 'design', ['prototyping', 'ui-design'], ['prototyping', 'ui-design', 'sketches', 'rapid', 'wireframes'], 'https://uizard.io', 'freemium', true, 19, ['web'], 4.5, 28000, false, false),
  createTool('83', 'Galileo AI', 'galileo-ai', 'AI UI generation', 'Galileo AI generates editable UI designs from text descriptions. Create high-fidelity designs instantly.', 'design', ['ui-generation', 'text-to-design'], ['ui-generation', 'text-to-design', 'high-fidelity', 'instant', 'editable'], 'https://usegalileo.ai', 'subscription', false, 19, ['web'], 4.6, 18000, false, true),
  createTool('84', 'Looka', 'looka', 'AI logo maker', 'Looka creates custom logos with AI. Design your brand identity with intelligent suggestions and customization.', 'design', ['logos', 'branding'], ['logos', 'branding', 'identity', 'customization', 'business'], 'https://looka.com', 'freemium', true, 20, ['web'], 4.4, 45000, false, false),
  createTool('85', 'Designs.ai', 'designs-ai', 'AI design suite', 'Designs.ai offers AI tools for logos, videos, mockups, and more. Complete design suite powered by AI.', 'design', ['suite', 'branding'], ['suite', 'logos', 'videos', 'mockups', 'branding'], 'https://designs.ai', 'subscription', false, 29, ['web'], 4.3, 24000, false, false),
  createTool('86', 'Khroma', 'khroma', 'AI color tool', 'Khroma uses AI to generate color palettes based on your preferences. Discover colors you love.', 'design', ['colors', 'palettes'], ['colors', 'palettes', 'preferences', 'ai-generated', 'design'], 'https://khroma.co', 'free', true, 0, ['web'], 4.5, 34000, false, false),
  createTool('87', 'Fontjoy', 'fontjoy', 'AI font pairing', 'Fontjoy generates font pairings with deep learning. Find the perfect font combinations for your designs.', 'design', ['fonts', 'typography'], ['fonts', 'typography', 'pairing', 'deep-learning', 'combinations'], 'https://fontjoy.com', 'free', true, 0, ['web'], 4.4, 28000, false, false),
  createTool('88', 'Remove.bg', 'remove-bg', 'AI background removal', 'Remove.bg instantly removes backgrounds from images with AI. Perfect cutouts in seconds.', 'design', ['background-removal', 'editing'], ['background-removal', 'images', 'cutouts', 'instant', 'editing'], 'https://remove.bg', 'freemium', true, 9, ['web', 'api'], 4.7, 156000, false, false),
  createTool('89', 'Cleanup.pictures', 'cleanup-pictures', 'AI object removal', 'Cleanup.pictures removes unwanted objects from photos with AI. Clean up images quickly and easily.', 'design', ['object-removal', 'editing'], ['object-removal', 'photos', 'cleanup', 'editing', 'ai'], 'https://cleanup.pictures', 'freemium', true, 5, ['web'], 4.5, 67000, false, false),
  createTool('90', 'Magician for Figma', 'magician', 'AI plugin for Figma', 'Magician is an AI plugin for Figma. Generate icons, copy, and images directly in your designs.', 'design', ['figma-plugin', 'generation'], ['figma', 'plugin', 'icons', 'copy', 'generation'], 'https://magician.design', 'subscription', false, 5, ['web'], 4.5, 18000, false, false),

  // ==================== MARKETING & SEO (10 tools) ====================
  createTool('91', 'Surfer SEO', 'surfer-seo', 'AI-powered SEO tool', 'Surfer SEO optimizes content for search engines with AI. Get real-time suggestions for better rankings.', 'marketing-seo', ['seo', 'content'], ['seo', 'content-optimization', 'rankings', 'real-time', 'analysis'], 'https://surferseo.com', 'subscription', false, 89, ['web', 'api'], 4.6, 45000, true, false),
  createTool('92', 'Clearscope', 'clearscope', 'AI content optimization', 'Clearscope uses AI to optimize content for search. Competitive analysis and keyword recommendations.', 'marketing-seo', ['seo', 'optimization'], ['seo', 'optimization', 'keywords', 'competitive', 'content'], 'https://clearscope.io', 'subscription', false, 170, ['web'], 4.5, 18000, false, false),
  createTool('93', 'MarketMuse', 'marketmuse', 'AI content strategy', 'MarketMuse provides AI-powered content strategy. Plan, create, and optimize content for better results.', 'marketing-seo', ['content-strategy', 'planning'], ['content-strategy', 'planning', 'optimization', 'ai', 'marketing'], 'https://marketmuse.com', 'freemium', true, 149, ['web'], 4.4, 12000, false, false),
  createTool('94', 'Frase', 'frase', 'AI content creation for SEO', 'Frase helps create SEO-optimized content with AI. Research, write, and optimize in one platform.', 'marketing-seo', ['seo', 'content-creation'], ['seo', 'content-creation', 'research', 'optimization', 'writing'], 'https://frase.io', 'subscription', false, 15, ['web'], 4.5, 28000, false, false),
  createTool('95', 'Scalenut', 'scalenut', 'AI-powered SEO platform', 'Scalenut combines AI writing with SEO tools. Create content that ranks with intelligent optimization.', 'marketing-seo', ['seo', 'writing'], ['seo', 'writing', 'ai-content', 'optimization', 'rankings'], 'https://scalenut.com', 'subscription', false, 39, ['web'], 4.4, 18000, false, false),
  createTool('96', 'NeuronWriter', 'neuronwriter', 'AI content editor for SEO', 'NeuronWriter optimizes content with NLP recommendations. Semantic SEO analysis for better rankings.', 'marketing-seo', ['seo', 'nlp'], ['seo', 'nlp', 'semantic', 'optimization', 'content'], 'https://neuronwriter.com', 'subscription', false, 19, ['web'], 4.4, 15000, false, false),
  createTool('97', 'Phrasee', 'phrasee', 'AI marketing language', 'Phrasee generates and optimizes marketing language with AI. Improve email, SMS, and push notifications.', 'marketing-seo', ['copywriting', 'email'], ['copywriting', 'email', 'optimization', 'language', 'marketing'], 'https://phrasee.co', 'subscription', false, 500, ['web', 'api'], 4.5, 8000, false, false),
  createTool('98', 'Unbounce Smart Copy', 'unbounce-smart-copy', 'AI copywriting for landing pages', 'Unbounce Smart Copy generates conversion-focused copy. Create landing pages that convert with AI.', 'marketing-seo', ['copywriting', 'landing-pages'], ['copywriting', 'landing-pages', 'conversion', 'marketing', 'ai'], 'https://unbounce.com/product/smart-copy', 'freemium', true, 25, ['web'], 4.4, 18000, false, false),
  createTool('99', 'Lately', 'lately', 'AI social media content', 'Lately uses AI to repurpose long-form content into social posts. Scale your social media presence.', 'marketing-seo', ['social-media', 'repurposing'], ['social-media', 'repurposing', 'content', 'scaling', 'ai'], 'https://lately.ai', 'subscription', false, 49, ['web'], 4.3, 12000, false, false),
  createTool('100', 'Persado', 'persado', 'AI for marketing language', 'Persado generates the best marketing language with AI. Enterprise-grade optimization for all channels.', 'marketing-seo', ['enterprise', 'language'], ['enterprise', 'language', 'optimization', 'marketing', 'ai'], 'https://persado.com', 'subscription', false, 1000, ['web', 'api'], 4.5, 5000, false, false),
];

// Helper functions
export function getToolBySlug(slug: string): AITool | undefined {
  return aiTools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(categorySlug: string): AITool[] {
  return aiTools.filter(tool =>
    tool.category === categorySlug ||
    tool.subcategories.includes(categorySlug)
  );
}

export function getFeaturedTools(): AITool[] {
  return aiTools.filter(tool => tool.featured);
}

export function getTrendingTools(): AITool[] {
  return aiTools.filter(tool => tool.trending);
}

export function getPopularTools(limit: number = 10): AITool[] {
  return [...aiTools]
    .sort((a, b) => b.visits - a.visits)
    .slice(0, limit);
}

export function getRecentTools(limit: number = 10): AITool[] {
  return [...aiTools]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, limit);
}

export function getRelatedTools(tool: AITool, limit: number = 4): AITool[] {
  return aiTools
    .filter(t => t.id !== tool.id && (t.category === tool.category || t.tags.some(tag => tool.tags.includes(tag))))
    .slice(0, limit);
}

export function searchToolsByName(query: string): AITool[] {
  const lowerQuery = query.toLowerCase();
  return aiTools.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.tagline.toLowerCase().includes(lowerQuery)
  );
}
