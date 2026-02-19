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
              <div className="space-y-4 px-4">
                <h1 className="heading-hero text-white mx-auto" style={{ maxWidth: '900px' }}>
                  Enough guessing,{' '}
                  <span className="text-primary-yellow">time for results</span>
                </h1>
                <p className="body-lg text-white/70 mx-auto" style={{ maxWidth: '700px' }}>
                  AI-backed physique improvements. No more trial and error.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="flex justify-center px-4">
                <Button
                  onClick={handleStartNow}
                  size="large"
                  className="w-full sm:w-auto sm:min-w-[280px]"
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
                <Card key={step.number} variant="glass" hover className="min-w-0">
                  <div className="space-y-5">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-yellow/20 border border-primary-yellow/30">
                      <span className="heading-3 text-primary-yellow font-bold">{step.number}</span>
                    </div>
                    
                    {/* Step Content */}
                    <div className="space-y-3">
                      <h3 className="heading-3 text-white font-semibold leading-tight">
                        {step.title}
                      </h3>
                      <p className="body text-white/60 leading-relaxed">
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
            <div className="text-center content-spacing px-4">
              <h2 className="heading-2 text-white mb-4">
                Join the crew
              </h2>
              <p className="body text-white/60 mx-auto leading-relaxed" style={{ maxWidth: '600px' }}>
                Real people, real results. See what's possible when AI meets dedication.
              </p>
            </div>
            
            {/* Transformation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {transformations.map((item) => (
                <div key={item.id}>
                  <div className="aspect-square rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group hover:border-primary-yellow/30 transition-all duration-300 p-8">
                    <div className="text-center space-y-4">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-white/20 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="body-sm text-white/40 font-medium">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section with Stats */}
          <section className="section-spacing">
            <Card variant="elevated" className="text-center">
              {/* Header Section */}
              <div className="space-y-5 mb-10 pt-2">
                <h2 className="heading-2 text-white px-4">
                  Ready to transform?
                </h2>
                <p className="body-lg text-white/70 mx-auto px-4 leading-relaxed" style={{ maxWidth: '650px' }}>
                  Start your personalized fitness journey today. No credit card required.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 sm:gap-10 py-10 my-6 border-y border-white/10">
                <div className="space-y-3">
                  <div className="heading-2 text-primary-yellow font-bold">10K+</div>
                  <div className="body-sm text-white/60 font-medium">Active Users</div>
                </div>
                <div className="space-y-3">
                  <div className="heading-2 text-primary-yellow font-bold">4.9★</div>
                  <div className="body-sm text-white/60 font-medium">App Rating</div>
                </div>
                <div className="space-y-3">
                  <div className="heading-2 text-primary-yellow font-bold">95%</div>
                  <div className="body-sm text-white/60 font-medium">Success Rate</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 pb-2">
                <Button
                  onClick={handleStartNow}
                  size="large"
                  className="w-full sm:w-auto sm:min-w-[320px]"
                >
                  Get Started Now
                </Button>
              </div>
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
