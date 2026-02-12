import HeroSection from '@/components/home/HeroSection';
import FeaturedTools from '@/components/home/FeaturedTools';
import CategoriesGrid from '@/components/home/CategoriesGrid';
import TrendingTools from '@/components/home/TrendingTools';
import StatsSection from '@/components/home/StatsSection';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/lib/schema';
import { getGeneralFAQs } from '@/data/faqs';

export default function Home() {
  const faqs = getGeneralFAQs();

  return (
    <>
      {/* FAQ Schema for rich results */}
      <StructuredData data={generateFAQSchema(faqs)} />

      <HeroSection />
      <FeaturedTools />
      <CategoriesGrid />
      <TrendingTools />
      <StatsSection />
      <NewsletterCTA />
    </>
  );
}
