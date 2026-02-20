'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function OnboardingFirstScreen() {
  const router = useRouter();

  const handleStartNow = () => {
    router.push('/onboarding/goal');
  };

  return (
    <div className="min-h-screen bg-primary-black">
      <TopNav showAuth={true} />

      <main className="pt-24 md:pt-32 pb-24">
        <div className="container-responsive">
          
          {/* Hero Section - Simplified, Bold, Clean */}
          <section className="text-center mb-24 md:mb-32 px-6">
            {/* Single powerful headline */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block">Enough guessing.</span>
                <span className="text-primary-yellow block">Time for results.</span>
              </h1>
              
              {/* Single line value prop */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-xl mx-auto leading-relaxed">
                AI-powered training that actually works
              </p>

              {/* Single prominent CTA */}
              <div className="pt-4">
                <Button
                  onClick={handleStartNow}
                  size="large"
                  className="w-full sm:w-auto sm:min-w-[280px]"
                  glow
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works - Visual, Not Text-Heavy */}
          <section className="mb-24 md:mb-32 px-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Three Simple Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="relative">
                <Card variant="elevated" className="h-full hover:scale-105 transition-transform duration-300">
                  <div className="text-center space-y-5 p-2">
                    {/* Big number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-yellow to-yellow-600 shadow-lg">
                      <span className="text-3xl sm:text-3xl sm:text-4xl font-display font-black text-primary-black">1</span>
                    </div>
                    
                    {/* Icon/Visual */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-yellow/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Short title */}
                    <h3 className="font-display text-xl sm:text-xl sm:text-2xl font-bold text-white">
                      Upload Goal
                    </h3>
                    
                    {/* Minimal description */}
                    <p className="text-sm sm:text-sm sm:text-base text-white/60 leading-relaxed">
                      Show us your target physique
                    </p>
                  </div>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card variant="elevated" className="h-full hover:scale-105 transition-transform duration-300">
                  <div className="text-center space-y-5 p-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-yellow to-yellow-600 shadow-lg">
                      <span className="text-3xl sm:text-4xl font-display font-black text-primary-black">2</span>
                    </div>
                    
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-yellow/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      AI Analyzes
                    </h3>
                    
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      Get your custom workout plan
                    </p>
                  </div>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card variant="elevated" className="h-full hover:scale-105 transition-transform duration-300">
                  <div className="text-center space-y-5 p-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-yellow to-yellow-600 shadow-lg">
                      <span className="text-3xl sm:text-4xl font-display font-black text-primary-black">3</span>
                    </div>
                    
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-yellow/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Track Progress
                    </h3>
                    
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      Watch your transformation happen
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Stats - Big, Bold, Visual */}
          <section className="mb-24 md:mb-32 px-6">
            <div className="max-w-5xl mx-auto">
              <Card variant="elevated" className="bg-gradient-to-br from-gray-900 to-gray-800 border-primary-yellow/20">
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  <div className="text-center py-8 sm:py-12 px-2 sm:px-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary-yellow mb-3">
                      10K+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">
                      Active Users
                    </div>
                  </div>
                  
                  <div className="text-center py-8 sm:py-12 px-2 sm:px-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary-yellow mb-3">
                      4.9★
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">
                      App Rating
                    </div>
                  </div>
                  
                  <div className="text-center py-8 sm:py-12 px-2 sm:px-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary-yellow mb-3">
                      95%
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">
                      Success Rate
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Social Proof - Visual Grid */}
          <section className="mb-24 md:mb-32 px-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Real Transformations
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/10 hover:border-primary-yellow/50 transition-all duration-300 flex items-center justify-center p-8 group-hover:scale-105">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-primary-yellow/10 rounded-full flex items-center justify-center group-hover:bg-primary-yellow/20 transition-colors">
                        <svg className="w-12 h-12 text-primary-yellow/40 group-hover:text-primary-yellow/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-white/50">
                        {i % 2 === 0 ? 'Before' : 'After'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA - Clean, Focused */}
          <section className="max-w-4xl mx-auto text-center px-6">
            <div className="space-y-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to <span className="text-primary-yellow">transform?</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Join thousands who've already achieved their fitness goals
              </p>
              
              <Button
                onClick={handleStartNow}
                size="large"
                className="w-full sm:w-auto sm:min-w-[280px]"
                glow
              >
                Start Free Trial
              </Button>
              
              <p className="text-sm text-white/50">
                No credit card required
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-20 pb-12 px-6">
            <p className="text-sm text-white/40">
              © 2026 7.32 Body LLC. All Rights Reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
