import { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema, generateContactSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us - AI Tools Hub',
  description: 'Get in touch with the AI Tools Hub team. Submit your tool, ask questions, or explore partnership opportunities.',
  keywords: ['contact', 'AI tools', 'submit tool', 'partnership'],
  openGraph: {
    title: 'Contact Us - AI Tools Hub',
    description: 'Get in touch with the AI Tools Hub team.',
  },
};

const contactFaqs = [
  {
    id: 'c1',
    question: 'How do I submit my AI tool?',
    answer: 'Visit our Submit Tool page and fill out the form with your tool details. Our team will review it within 2-3 business days.',
    category: 'contact',
  },
  {
    id: 'c2',
    question: 'How are tools reviewed and rated?',
    answer: 'Our team tests each tool and considers user feedback, features, pricing, and ease of use to provide comprehensive reviews.',
    category: 'contact',
  },
  {
    id: 'c3',
    question: 'Can I update my tool listing?',
    answer: 'Yes! Contact us with your tool name and the updates you\'d like to make, and we\'ll process your request.',
    category: 'contact',
  },
  {
    id: 'c4',
    question: 'Do you offer sponsored listings?',
    answer: 'Yes, we offer featured placements for tools. Contact us for partnership opportunities and pricing.',
    category: 'contact',
  },
];

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* FAQ Schema for contact page */}
      <StructuredData data={generateFAQSchema(contactFaqs)} />
      {/* Organization/Contact Schema */}
      <StructuredData data={generateContactSchema()} />
      {children}
    </>
  );
}
