import { Metadata } from 'next';
import { FileText, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Service | Best AI Tools',
  description: 'Read the terms and conditions for using Best AI Tools. Understand your rights and responsibilities when accessing our AI tools directory.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Best AI Tools',
    description: 'Read the terms and conditions for using Best AI Tools. Understand your rights and responsibilities when accessing our AI tools directory.',
    url: '/terms',
    type: 'website',
  },
  twitter: {
    title: 'Terms of Service | Best AI Tools',
    description: 'Read the terms and conditions for using Best AI Tools. Understand your rights and responsibilities when accessing our AI tools directory.',
  },
};

export default function TermsPage() {
  return (
    <>
    <StructuredData data={generateWebPageSchema({
      name: 'Terms of Service | Best AI Tools',
      description: 'Read the terms and conditions for using Best AI Tools and our AI tools directory.',
      url: '/terms',
    })} />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms' }]} variant="light" />

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
              <FileText className="w-4 h-4" />
              Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              Last updated: April 1, 2026
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Best AI Tools (&quot;the Website&quot;), you accept and agree to be bound by
            these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Best AI Tools is a directory and information platform that helps users discover, compare,
            and learn about AI tools. We provide:
          </p>
          <ul>
            <li>A searchable directory of AI tools</li>
            <li>Reviews and ratings of AI tools</li>
            <li>Guides and tutorials about AI tools</li>
            <li>A newsletter with AI tool updates</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>When using our website, you agree to:</p>
          <ul>
            <li>Provide accurate information when submitting tools or creating accounts</li>
            <li>Not engage in any activity that disrupts or interferes with our services</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not use our content for unauthorized commercial purposes</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>4. Tool Listings</h2>
          <p>
            We strive to provide accurate and up-to-date information about AI tools. However:
          </p>
          <ul>
            <li>We do not guarantee the accuracy of tool information</li>
            <li>Tool features and pricing may change without notice</li>
            <li>We are not responsible for the quality or performance of listed tools</li>
            <li>Listings do not constitute endorsement of any tool</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on Best AI Tools, including text, graphics, logos, and software, is owned by
            us or our licensors and is protected by copyright and other intellectual property laws.
            You may not:
          </p>
          <ul>
            <li>Copy or reproduce our content without permission</li>
            <li>Modify or create derivative works from our content</li>
            <li>Distribute or publicly display our content</li>
            <li>Use our trademarks without written consent</li>
          </ul>

          <h2>6. User Submissions</h2>
          <p>
            When you submit tools, reviews, or other content to our website, you:
          </p>
          <ul>
            <li>Grant us a non-exclusive license to use, display, and distribute your submission</li>
            <li>Confirm that you have the right to submit the content</li>
            <li>Acknowledge that we may edit or remove submissions at our discretion</li>
          </ul>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            Our website is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that:
          </p>
          <ul>
            <li>The website will be available at all times</li>
            <li>The information will be accurate or complete</li>
            <li>The website will be free of errors or viruses</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Best AI Tools shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of the website or
            reliance on any information provided.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites and tools. We are not responsible for
            the content, privacy practices, or terms of these external sites.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective
            immediately upon posting. Your continued use of the website constitutes acceptance of the
            modified terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may terminate or suspend your access to our website at any time, without prior notice,
            for any reason, including violation of these terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of
            California, USA, without regard to conflict of law principles.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: info@bestaitools4u.com</li>
            <li>Address: San Francisco, CA, USA</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
