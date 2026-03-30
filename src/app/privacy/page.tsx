import { Metadata } from 'next';
import { Shield, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Tools Hub',
  description: 'Learn how AI Tools Hub collects, uses, and protects your personal information. Read our data privacy practices and your rights.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | AI Tools Hub',
    description: 'Learn how AI Tools Hub collects, uses, and protects your personal information. Read our data privacy practices and your rights.',
    url: '/privacy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy | AI Tools Hub',
    description: 'Learn how AI Tools Hub collects, uses, and protects your personal information. Read our data privacy practices and your rights.',
  },
};

export default function PrivacyPage() {
  return (
    <>
    <StructuredData data={generateWebPageSchema({
      name: 'Privacy Policy | AI Tools Hub',
      description: 'Learn how AI Tools Hub collects, uses, and protects your personal information.',
      url: '/privacy',
    })} />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} variant="light" />

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              Last updated: January 1, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to AI Tools Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Name and email address when subscribing to our newsletter</li>
            <li>Contact information when submitting tools or contacting us</li>
            <li>Account information if you create an account</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <ul>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Send you our newsletter (if subscribed)</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze website usage and improve our content</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store
            certain information. You can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics providers and advertising partners. These
            third parties may have access to your information only to perform tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information. However, no method of transmission over the Internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we have about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request data portability</li>
          </ul>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@aitoolshub.com</li>
            <li>Address: San Francisco, CA, USA</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
