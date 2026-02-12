'use client';

import { useState } from 'react';
import { Send, CheckCircle, Sparkles, Upload, Link as LinkIcon, FileText, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import Button from '@/components/ui/Button';

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Submit Tool', href: '/submit' }]} />

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Get Featured
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Submit Your AI Tool
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get your AI tool discovered by thousands of users looking for the perfect solution.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isSubmitted ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You for Your Submission!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We&apos;ve received your tool submission. Our team will review it within 2-3 business days
              and notify you once it&apos;s approved.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Tool
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              {/* Tool Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <FileText className="w-4 h-4 text-purple-500" />
                  Tool Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., My Awesome AI Tool"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <LinkIcon className="w-4 h-4 text-purple-500" />
                  Website URL *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://your-tool.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Short Description */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <Tag className="w-4 h-4 text-purple-500" />
                  Short Description *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="A brief tagline for your tool (max 100 characters)"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Full Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what your tool does, its key features, and who it's for..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white resize-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Category *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                >
                  <option value="">Select a category</option>
                  <option value="chatbots">Chatbots & Assistants</option>
                  <option value="image-generation">Image Generation</option>
                  <option value="writing">Writing & Content</option>
                  <option value="coding">Coding & Development</option>
                  <option value="video">Video Generation</option>
                  <option value="audio">Audio & Music</option>
                  <option value="productivity">Productivity</option>
                  <option value="research">Research & Analysis</option>
                  <option value="design">Design & Creative</option>
                  <option value="marketing">Marketing & SEO</option>
                </select>
              </div>

              {/* Pricing */}
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Pricing Model *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                >
                  <option value="">Select pricing model</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                  <option value="contact">Contact for Pricing</option>
                </select>
              </div>

              {/* Logo Upload */}
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Logo / Screenshot
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Drag and drop or click to upload
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                isLoading={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Tool for Review
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                By submitting, you agree to our terms and confirm that you have the right to list this tool.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
