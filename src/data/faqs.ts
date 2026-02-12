import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  // General AI Tools FAQs
  {
    id: '1',
    question: 'What are AI tools?',
    answer: 'AI tools are software applications that use artificial intelligence technologies like machine learning, natural language processing, and computer vision to automate tasks, generate content, analyze data, and assist with various workflows. They range from chatbots like ChatGPT to image generators like Midjourney.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Are AI tools free to use?',
    answer: 'Many AI tools offer free tiers or free trials. Tools like ChatGPT, Claude, and Gemini have free versions with basic features. However, advanced features and higher usage limits typically require paid subscriptions ranging from $10-50/month for individual plans.',
    category: 'general',
  },
  {
    id: '3',
    question: 'What is the best AI chatbot in 2025?',
    answer: 'The best AI chatbot depends on your needs. ChatGPT (GPT-4) excels at general tasks and coding. Claude is known for safety and long-form content. Gemini offers strong multimodal capabilities. Perplexity is best for research with citations.',
    category: 'chatbots',
  },
  {
    id: '4',
    question: 'Which AI image generator produces the best quality?',
    answer: 'Midjourney is widely considered to produce the highest quality artistic images. DALL-E 3 excels at following complex prompts. Stable Diffusion offers the most flexibility and can run locally. Flux AI is emerging as a top contender for photorealistic images.',
    category: 'image-generation',
  },
  {
    id: '5',
    question: 'What is the best AI coding assistant?',
    answer: 'GitHub Copilot is the most popular and integrates seamlessly with VS Code and other IDEs. Cursor offers an AI-first editor experience. Codeium provides a strong free alternative. The best choice depends on your IDE preference and budget.',
    category: 'code-assistance',
  },
  {
    id: '6',
    question: 'How do AI writing tools work?',
    answer: 'AI writing tools use large language models (LLMs) trained on vast amounts of text. They predict the most likely next words based on your input, allowing them to generate coherent text, rewrite content, fix grammar, and adapt writing style.',
    category: 'content-creation',
  },
  {
    id: '7',
    question: 'Are AI-generated images copyrightable?',
    answer: 'Copyright for AI-generated images is complex and varies by jurisdiction. Generally, purely AI-generated images may not be copyrightable as they lack human authorship. However, if you significantly modify or direct the creative process, you may have some rights. Consult a legal professional for specific cases.',
    category: 'image-generation',
  },
  {
    id: '8',
    question: 'What is the difference between GPT-4 and Claude?',
    answer: 'GPT-4 (ChatGPT) and Claude are both advanced AI assistants but have different strengths. GPT-4 has broader capabilities and a larger ecosystem of plugins. Claude is designed to be more helpful, harmless, and honest, with stronger performance on long-form content and a larger context window.',
    category: 'chatbots',
  },
  {
    id: '9',
    question: 'Can AI tools replace human workers?',
    answer: 'AI tools are designed to augment human capabilities, not replace them entirely. They excel at repetitive tasks, data processing, and content generation but lack human judgment, creativity, and emotional intelligence. Most experts predict AI will change jobs rather than eliminate them.',
    category: 'general',
  },
  {
    id: '10',
    question: 'How can I protect my data when using AI tools?',
    answer: 'To protect your data: 1) Read privacy policies carefully, 2) Avoid sharing sensitive personal or business information, 3) Use AI tools that offer data privacy options, 4) Consider self-hosted or local alternatives for sensitive work, 5) Enable opt-out settings where available.',
    category: 'general',
  },
  {
    id: '11',
    question: 'What is the best AI tool for video editing?',
    answer: 'For video editing, Runway offers advanced AI features like Gen-2 video generation. Descript excels at text-based editing. For AI avatars, Synthesia and HeyGen are top choices. Opus Clip is great for creating short clips from long videos.',
    category: 'video-generation',
  },
  {
    id: '12',
    question: 'Which AI voice generator sounds most realistic?',
    answer: 'ElevenLabs is widely considered to produce the most realistic AI voices with natural intonation and emotion. It also offers voice cloning capabilities. Murf AI and Play.ht are also excellent alternatives with diverse voice options.',
    category: 'audio-music',
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}

export function getAllFAQs(): FAQ[] {
  return faqs;
}

export function getGeneralFAQs(): FAQ[] {
  return faqs.filter(faq => faq.category === 'general');
}
