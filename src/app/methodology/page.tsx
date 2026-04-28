import { Metadata } from 'next';
import { CheckCircle, ScrollText, Users, AlertCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How We Review AI Tools — Editorial Methodology | Best AI Tools',
  description: 'Our editorial methodology for evaluating, scoring, and updating AI tool listings. Independence policy, conflict-of-interest disclosures, and how we keep listings accurate.',
  alternates: {
    canonical: '/methodology',
  },
  openGraph: {
    title: 'Editorial Methodology | Best AI Tools',
    description: 'How we review, score, and update AI tools. Our independence and conflict-of-interest policy.',
    url: '/methodology',
    type: 'website',
  },
  twitter: {
    title: 'Editorial Methodology | Best AI Tools',
    description: 'How we review, score, and update AI tools. Our independence and conflict-of-interest policy.',
  },
};

const evaluationCriteria = [
  {
    icon: CheckCircle,
    title: 'Functionality',
    weight: '25%',
    desc: 'Does the tool deliver what it promises? We test core features against real-world tasks.',
  },
  {
    icon: Users,
    title: 'Usability',
    weight: '20%',
    desc: 'Onboarding time, documentation quality, learning curve for non-experts.',
  },
  {
    icon: ScrollText,
    title: 'Pricing transparency',
    weight: '20%',
    desc: 'Clear pricing pages, fair free tiers, no hidden enterprise gating on advertised features.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust signals',
    weight: '15%',
    desc: 'Privacy policy, data handling, security certifications, company longevity.',
  },
  {
    icon: RefreshCw,
    title: 'Update cadence',
    weight: '10%',
    desc: 'How often does the team ship? Stale tools drop in our rankings automatically.',
  },
  {
    icon: AlertCircle,
    title: 'Real-world fit',
    weight: '10%',
    desc: 'Whether the tool solves a problem better than free or open-source alternatives.',
  },
];

export default function MethodologyPage() {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'Editorial Methodology — Best AI Tools',
        description: 'How we evaluate and review AI tools, our editorial independence policy, and conflict-of-interest disclosures.',
        url: '/methodology',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Methodology', href: '/methodology' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <ShieldCheck className="w-4 h-4" />
                Editorial Independence
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How We Review AI Tools
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our editorial methodology, scoring rubric, and independence policy.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="lead text-lg text-gray-700 dark:text-gray-300">
              Best AI Tools is a curated directory. Every tool listed has been reviewed by an editor before it appears on the site. We do not auto-import listings from press releases or data feeds.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Six dimensions, weighted
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Tools are scored 1-5 across six dimensions. Aggregate scores determine featured status and category rankings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {evaluationCriteria.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{c.title}</h3>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{c.weight}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-16 bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Editorial independence
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Tool makers cannot pay for inclusion. Every listing is editorial.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Featured placement is determined by our scoring rubric, not by sponsorships.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>When we use affiliate links, they&apos;re marked and disclosed on our <a href="/disclosure" className="text-purple-600 dark:text-purple-400 hover:underline">Disclosure page</a>. Affiliate status never affects ranking.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Sponsored content, if we ever publish it, will be visually distinct and labeled &quot;Sponsored&quot; in the title.</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How we keep listings current
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quarterly re-review</h3>
                <p>Every featured tool is re-checked at least once per quarter. The &quot;Last reviewed&quot; date on each tool page is honest — that&apos;s the actual date an editor verified the tool&apos;s pricing, features, and availability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reader-flagged corrections</h3>
                <p>If you spot outdated info, email <a href="mailto:info@bestaitools4u.com" className="text-purple-600 dark:text-purple-400 hover:underline">info@bestaitools4u.com</a>. Corrections are typically published within 48 hours.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Discontinuation policy</h3>
                <p>Tools that shut down, get acquired, or stop shipping updates for &gt;6 months are flagged or removed. We don&apos;t leave dead listings to inflate counts.</p>
              </div>
            </div>
          </section>

          <section className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Submit a tool
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Anyone can submit a tool for review at <a href="/submit" className="text-purple-600 dark:text-purple-400 hover:underline">/submit</a>. Submission does not guarantee inclusion. Tools must pass our scoring rubric to be listed. We respond to every submission within 5 business days regardless of outcome.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
