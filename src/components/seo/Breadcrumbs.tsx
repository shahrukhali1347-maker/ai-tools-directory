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
  variant?: 'default' | 'light';
}

export default function Breadcrumbs({ items, variant = 'default' }: BreadcrumbsProps) {
  const isLight = variant === 'light';

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(items)} />
      <nav className={`flex items-center gap-2 text-sm mb-6 ${
        isLight ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'
      }`}>
        <Link
          href="/"
          className={`flex items-center gap-1 transition-colors ${
            isLight ? 'hover:text-white' : 'hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {index === items.length - 1 ? (
              <span className={`font-medium ${
                isLight ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${
                  isLight ? 'hover:text-white' : 'hover:text-gray-700 dark:hover:text-gray-300'
                }`}
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
