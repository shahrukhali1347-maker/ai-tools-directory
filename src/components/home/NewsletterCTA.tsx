'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Check, Sparkles, Bell, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900" />

      {/* Animated mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating icons */}
      <div className="absolute top-20 left-[15%] hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <Bell className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
      <div className="absolute bottom-20 right-[15%] hidden lg:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <Zap className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Ahead with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              AI Insights
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Get weekly updates on the latest AI tools, exclusive reviews, and tips to supercharge your productivity.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-md mx-auto">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">You&apos;re all set!</p>
                <p className="text-white/70 text-sm">Check your email for confirmation.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="relative p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-white/50 mt-4 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-purple-900" />
                ))}
              </div>
              <span>Join 10,000+ subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
