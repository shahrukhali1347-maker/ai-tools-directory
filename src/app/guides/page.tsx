import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, GraduationCap, Lightbulb, Target, Users } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Guides & Tutorials | Best AI Tools',
  description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more. Curated learning paths launching soon.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: 'AI Guides & Tutorials | Best AI Tools',
    description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more.',
    url: '/guides',
    type: 'website',
  },
  twitter: {
    title: 'AI Guides & Tutorials | Best AI Tools',
    description: 'Step-by-step AI guides and tutorials covering writing, image generation, coding, and more.',
  },
};

const upcomingTopics = [
  {
    icon: BookOpen,
    title: 'Writing & Content',
    description: 'Master AI writing assistants, prompt engineering, and content workflows.',
    href: '/categories/content-creation',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'Image Generation',
    description: 'From Midjourney to Krea AI — pick the right tool for your creative work.',
    href: '/categories/image-generation',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Code Assistance',
    description: 'Cursor, Copilot, Windsurf, v0 — when to use which AI coding assistant.',
    href: '/categories/code-assistance',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'AI for Teams',
    description: 'Productivity, meetings, automation — building your team\'s AI stack.',
    href: '/categories/productivity',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function GuidesPage() {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'AI Guides & Tutorials',
        description: 'Curated learning paths and tutorials for AI tools, launching soon.',
        url: '/guides',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <GraduationCap className="w-4 h-4" />
                Curated learning paths
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Guides &amp; Tutorials
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Hands-on learning paths for the tools you actually use — coming soon. For now, browse tools by topic.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Topics we&apos;re writing for
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Browse the tool categories below. Full guides launching alongside our blog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.title}
                  href={topic.href}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {topic.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Browse tools
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              See all 200 tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
