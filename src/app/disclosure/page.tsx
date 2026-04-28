import { Metadata } from 'next';
import { ShieldCheck, AlertTriangle, DollarSign } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Best AI Tools',
  description: 'Affiliate and sponsorship disclosure for Best AI Tools. How we make money and our commitment to editorial independence.',
  alternates: {
    canonical: '/disclosure',
  },
  openGraph: {
    title: 'Affiliate Disclosure | Best AI Tools',
    description: 'How we make money and our commitment to editorial independence.',
    url: '/disclosure',
    type: 'website',
  },
  twitter: {
    title: 'Affiliate Disclosure | Best AI Tools',
    description: 'How we make money and our commitment to editorial independence.',
  },
};

export default function DisclosurePage() {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'Affiliate Disclosure — Best AI Tools',
        description: 'Affiliate and sponsorship disclosure. How we make money and our editorial independence.',
        url: '/disclosure',
      })} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Disclosure', href: '/disclosure' }]} variant="light" />

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
                <ShieldCheck className="w-4 h-4" />
                Transparency
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Affiliate Disclosure
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                How we make money — and our commitment to editorial independence.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">Affiliate links</h2>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Some links on Best AI Tools are affiliate links. If you click an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. These commissions help us maintain the site and pay our editors.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Affiliate links never affect our rankings or reviews.</strong> A tool&apos;s placement on our directory is determined entirely by our <a href="/methodology" className="text-purple-600 dark:text-purple-400 hover:underline">editorial methodology</a> — never by the size of an affiliate payout.
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">FTC compliance</h2>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                In compliance with the U.S. Federal Trade Commission&apos;s 16 CFR Part 255 guidelines, we disclose any material connection between us and the products or services we recommend. This page serves as a standing disclosure across the entire site.
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sponsored content</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We do not currently publish sponsored articles or paid placements. If we ever do, sponsored content will be:
              </p>
              <ul className="text-gray-700 dark:text-gray-300">
                <li>Clearly labeled &quot;Sponsored&quot; in the title and meta tags</li>
                <li>Visually distinct from editorial content (different background, badge)</li>
                <li>Subject to the same factual standards as our editorial reviews</li>
              </ul>
            </section>

            <section className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-0">No paid inclusion</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tool makers cannot pay to be listed. They cannot pay to be featured. They cannot pay to remove negative reviews. If a tool is on our site, it&apos;s because an editor decided it deserves to be there.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Questions or corrections</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you spot something that looks like undisclosed sponsorship, or a tool that&apos;s ranked unfairly high or low, email <a href="mailto:info@bestaitools4u.com" className="text-purple-600 dark:text-purple-400 hover:underline">info@bestaitools4u.com</a>. We treat all complaints seriously.
              </p>
            </section>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Last updated: April 28, 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
