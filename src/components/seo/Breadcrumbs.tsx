import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData from './StructuredData';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(items)} />
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 dark:text-white font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
