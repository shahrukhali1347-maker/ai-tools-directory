import { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';
import { generateWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Submit Your AI Tool | AI Tools Hub',
  description: 'Submit your AI tool to be featured in our directory of 2100+ tools. Get discovered by thousands of users searching for AI solutions.',
  alternates: {
    canonical: '/submit',
  },
  openGraph: {
    title: 'Submit Your AI Tool to AI Tools Hub',
    description: 'Submit your AI tool to be featured in our directory. Get discovered by thousands of users searching for AI solutions.',
    url: '/submit',
    type: 'website',
  },
  twitter: {
    title: 'Submit Your AI Tool to AI Tools Hub',
    description: 'Submit your AI tool to be featured in our directory. Get discovered by thousands of users searching for AI solutions.',
  },
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={generateWebPageSchema({
        name: 'Submit Your AI Tool | AI Tools Hub',
        description: 'Submit your AI tool to be featured in our directory. Get discovered by thousands of users searching for AI solutions.',
        url: '/submit',
      })} />
      {children}
    </>
  );
}
