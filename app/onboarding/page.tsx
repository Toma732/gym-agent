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

  const steps = [
    {
      number: '01',
      title: 'Upload your ideal physique',
      description: 'Show us what you want to achieve',
    },
    {
      number: '02',
      title: 'Set your starting point',
      description: 'Let AI analyze your current state',
    },
    {
      number: '03',
      title: 'Follow the plan',
      description: 'Track progress and monitor daily',
    },
  ];

  const transformations = [
    { id: 1, label: 'Before', image: null },
    { id: 2, label: 'After', image: null },
    { id: 3, label: 'Before', image: null },
    { id: 4, label: 'After', image: null },
  ];

  return (
    <div className="min-h-screen bg-primary-black">
      <TopNav showAuth={true} />

      <main className="main-content">
        <div className="container-responsive">
          
          {/* Hero Section with Gradient */}
          <section className="section-spacing">
            <div className="text-center space-y-8 fade-in">
              {/* Hero Badge */}
              <div className="inline-block">
                <div className="glass-card px-6 py-2">
                  <span className="body-sm font-semibold text-primary-yellow">
                    AI-Powered Transformation
                  </span>
                </div>
              </div>

              {/* Hero Headline */}
              <div className="space-y-4">
                <h1 className="heading-hero text-white max-w-4xl mx-auto">
                  Enough guessing,
                  <br />
                  <span className="text-primary-yellow">time for results</span>
                </h1>
                <p className="body-lg text-white/70 max-w-2xl mx-auto">
                  AI-backed physique improvements. No more trial and error.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button
                  onClick={handleStartNow}
                  size="large"
                  fullWidth
                  glow
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="section-spacing">
            <h2 className="heading-2 text-white text-center content-spacing">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
              {steps.map((step) => (
                <Card key={step.number} variant="glass" hover>
                  <div className="space-y-4">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-yellow/20 border border-primary-yellow/30">
                      <span className="heading-3 text-primary-yellow">{step.number}</span>
                    </div>
                    
                    {/* Step Content */}
                    <div>
                      <h3 className="heading-3 text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="body text-white/60">
                        {step.description}
                      </p>
                    </div>

                    {/* Visual Arrow */}
                    {step.number !== '03' && (
                      <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-white/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Proof - Transformations */}
          <section className="section-spacing">
            <div className="text-center content-spacing">
              <h2 className="heading-2 text-white mb-3">
                Join the crew
              </h2>
              <p className="body text-white/60 max-w-2xl mx-auto">
                Real people, real results. See what's possible when AI meets dedication.
              </p>
            </div>
            
            {/* Transformation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {transformations.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="aspect-square rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group hover:border-primary-yellow/30 transition-all duration-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 text-white/20 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="body-sm text-white/40">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section with Stats */}
          <section className="section-spacing">
            <Card variant="elevated" className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="heading-2 text-white">
                  Ready to transform?
                </h2>
                <p className="body-lg text-white/70 max-w-2xl mx-auto">
                  Start your personalized fitness journey today. No credit card required.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
                <div>
                  <div className="heading-2 text-primary-yellow mb-1">10K+</div>
                  <div className="body-sm text-white/60">Active Users</div>
                </div>
                <div>
                  <div className="heading-2 text-primary-yellow mb-1">4.9★</div>
                  <div className="body-sm text-white/60">App Rating</div>
                </div>
                <div>
                  <div className="heading-2 text-primary-yellow mb-1">95%</div>
                  <div className="body-sm text-white/60">Success Rate</div>
                </div>
              </div>

              <Button
                onClick={handleStartNow}
                size="large"
                fullWidth
              >
                Get Started Now
              </Button>
            </Card>
          </section>

          {/* Footer */}
          <footer className="text-center pt-12 border-t border-white/10">
            <p className="body text-white/40">
              © 2026 7.32 Body LLC. All Rights Reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
