'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, Sparkles, Upload, Link as LinkIcon, FileText, Tag, X } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import Button from '@/components/ui/Button';

interface SubmitFormData {
  name: string;
  website: string;
  tagline: string;
  description: string;
  category: string;
  pricing: string;
  email: string;
}

const SUBMISSION_EMAIL = 'hello@bestaitools4u.com';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<SubmitFormData>({
    name: '',
    website: '',
    tagline: '',
    description: '',
    category: '',
    pricing: '',
    email: '',
  });

  const processFile = (file: File) => {
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setError('Please upload a PNG, JPG, WebP, or SVG image.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('File size must be under 5MB.');
      return;
    }

    setError(null);
    setLogoFile(file);

    // Generate preview
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    const preview = URL.createObjectURL(file);
    setLogoPreview(preview);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeLogo = () => {
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoFile(null);
    setLogoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.name.trim() || !formData.website.trim() || !formData.tagline.trim() ||
        !formData.description.trim() || !formData.category || !formData.pricing || !formData.email.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const url = new URL(formData.website);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      setError('Please enter a valid website URL (including https://).');
      return;
    }

    setIsLoading(true);

    const subject = `New AI Tool Submission: ${formData.name}`;
    const bodyLines = [
      `Tool Name: ${formData.name}`,
      `Website: ${formData.website}`,
      `Tagline: ${formData.tagline}`,
      `Category: ${formData.category}`,
      `Pricing: ${formData.pricing}`,
      `Submitter Email: ${formData.email}`,
      '',
      'Full Description:',
      formData.description,
    ];
    if (logoFile) {
      bodyLines.push(
        '',
        `⚠ LOGO ATTACHED: Please attach "${logoFile.name}" (${(logoFile.size / 1024).toFixed(0)}KB) to this email before sending.`
      );
    }
    bodyLines.push('', '---', 'Submitted via bestaitools4u.com/submit');
    const body = bodyLines.join('\n');

    const mailtoLink = `mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Give the mailto a moment to trigger, then show the success state
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      website: '',
      tagline: '',
      description: '',
      category: '',
      pricing: '',
      email: '',
    });
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoFile(null);
    setLogoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Submit Tool', href: '/submit' }]} variant="light" />

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
            <Button onClick={resetForm}>
              Submit Another Tool
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-red-700 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Tool Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <FileText className="w-4 h-4 text-purple-500" />
                  Tool Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., My Awesome AI Tool"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Website URL */}
              <div>
                <label htmlFor="website" className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <LinkIcon className="w-4 h-4 text-purple-500" />
                  Website URL *
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://your-tool.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Short Description */}
              <div>
                <label htmlFor="tagline" className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2">
                  <Tag className="w-4 h-4 text-purple-500" />
                  Short Description *
                </label>
                <input
                  id="tagline"
                  name="tagline"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.tagline}
                  onChange={handleChange}
                  placeholder="A brief tagline for your tool (max 100 characters)"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Full Description */}
              <div>
                <label htmlFor="description" className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Full Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what your tool does, its key features, and who it's for..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white resize-none"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
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
                <label htmlFor="pricing" className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Pricing Model *
                </label>
                <select
                  id="pricing"
                  name="pricing"
                  required
                  value={formData.pricing}
                  onChange={handleChange}
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
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload logo or screenshot"
                />
                {logoPreview && logoFile ? (
                  <div className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 flex-shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {logoFile.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {(logoFile.size / 1024).toFixed(0)} KB
                      </p>
                      <button
                        type="button"
                        onClick={openFilePicker}
                        className="text-xs text-purple-600 dark:text-purple-400 hover:underline mt-1"
                      >
                        Change file
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0"
                      aria-label="Remove logo"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={openFilePicker}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openFilePicker();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                      isDragging
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/10'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-500'
                    }`}
                  >
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Drag and drop or click to upload
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, WebP, or SVG up to 5MB
                    </p>
                  </div>
                )}
                {logoFile && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                    ⚠ Please attach this file to the email that opens when you click Submit
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Your Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
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
                Your default email client will open with the pre-filled submission.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
