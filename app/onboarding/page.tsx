'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';

export default function OnboardingFirstScreen() {
  const router = useRouter();

  const handleStartNow = () => {
    router.push('/onboarding/goal');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <TopNav showAuth={true} />

      <main className="pt-20 pb-16">
        
        {/* Hero Section - Premium with Real Imagery */}
        <section className="relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="relative z-10 container-responsive pt-16 pb-24 text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-black" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-black" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-black" />
              </div>
              <span className="text-sm text-white/90 font-medium">Trusted by 10,000+ athletes</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Transform Your Body.
              <br />
              <span className="bg-gradient-to-r from-primary-yellow via-orange-400 to-primary-yellow bg-clip-text text-transparent">
                Unlock Your Potential.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              AI-powered training plans tailored to your goals.
              <br className="hidden sm:block" />
              Track progress, build strength, see real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              <Button
                onClick={handleStartNow}
                size="large"
                className="w-full sm:w-auto text-lg px-12 shadow-2xl shadow-primary-yellow/30 hover:shadow-primary-yellow/50"
                glow
              >
                Start Free Trial
              </Button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-display font-semibold transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-display font-black text-primary-yellow mb-1">4.9★</div>
                <div className="text-sm text-white/60">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-black text-primary-yellow mb-1">95%</div>
                <div className="text-sm text-white/60">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-black text-primary-yellow mb-1">1.7M+</div>
                <div className="text-sm text-white/60">Workouts Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Visual Cards */}
        <section className="container-responsive py-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Your Journey in Three Steps
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our AI analyzes your goals and creates a personalized plan that evolves with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary-yellow/50 transition-all hover:scale-105">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-yellow to-orange-500 mb-6 shadow-lg shadow-primary-yellow/30">
                  <span className="text-2xl font-display font-black text-black">1</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-yellow/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Upload Your Goal
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Show us your dream physique or describe your fitness goals. Our AI understands what you want to achieve.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary-yellow/50 transition-all hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-yellow to-orange-500 mb-6 shadow-lg shadow-primary-yellow/30">
                  <span className="text-2xl font-display font-black text-black">2</span>
                </div>

                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-yellow/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  AI Creates Your Plan
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Get a personalized workout plan designed specifically for your body, goals, and fitness level.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary-yellow/50 transition-all hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-yellow to-orange-500 mb-6 shadow-lg shadow-primary-yellow/30">
                  <span className="text-2xl font-display font-black text-black">3</span>
                </div>

                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary-yellow/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Track & Transform
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Follow your plan, log progress, and watch your body transform. Real results, backed by data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformations - Before/After Grid */}
        <section className="container-responsive py-24 bg-gradient-to-b from-transparent via-primary-yellow/5 to-transparent">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Real People. Real Results.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join thousands who've transformed their bodies with our AI-powered training
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 hover:border-primary-yellow/50 transition-all">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${['1534438327276-14e5300c3a48', '1571019613454-1cb2f99b2d8b', '1583454110551-21f2fa2afe61', '1581009146014-e9a465d08a38'][i-1]}?w=400&h=400&fit=crop')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-semibold text-primary-yellow mb-1">{i % 2 === 1 ? 'Before' : 'After'}</div>
                    <div className="text-white/90 text-sm font-medium">{i % 2 === 1 ? '12 weeks' : 'Today'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-yellow"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop')`,
                  }}
                />
                <div>
                  <div className="font-display text-xl font-bold text-white">Marcus T.</div>
                  <div className="text-white/60">Lost 40 lbs in 6 months</div>
                </div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed italic">
                "This isn't just another fitness app. The AI actually understands my body and adjusts my plan every week. I've tried everything else - this is the only thing that worked."
              </p>
              <div className="flex gap-1 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-responsive py-24">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow via-orange-500 to-primary-yellow" />
            <div 
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop')`,
              }}
            />
            
            <div className="relative z-10 text-center py-16 md:py-24 px-8">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
                Ready to Start Your
                <br />
                Transformation?
              </h2>
              <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                Join 10,000+ members achieving their fitness goals with AI-powered training
              </p>
              <Button
                onClick={handleStartNow}
                size="large"
                className="bg-black text-white hover:bg-gray-900 shadow-2xl text-lg px-12"
              >
                Get Started Free
              </Button>
              <p className="text-black/70 text-sm mt-6">
                No credit card required • Cancel anytime • 14-day free trial
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container-responsive py-12 text-center border-t border-white/10">
          <p className="text-white/40 text-sm">
            © 2026 7.32 Body LLC. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
