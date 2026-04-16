import Link from 'next/link';
import { Sparkles, Twitter, Linkedin, Youtube, Github, Heart, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const footerLinks = {
  product: [
    { label: 'All Tools', href: '/tools' },
    { label: 'Categories', href: '/categories' },
    { label: 'Collections', href: '/collections' },
    { label: 'Guides', href: '/guides' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Submit Tool', href: '/submit' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white block">
                  Best AI Tools
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Your AI discovery platform
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
              Discover, compare, and choose from {SITE_CONFIG.stats.toolsCount.toLocaleString()}+ AI tools.
              Find the perfect solution for your workflow.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {[
                { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline mx-1" />
              for the AI community.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
    </footer>
  );
}
