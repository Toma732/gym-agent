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
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNav showAuth={true} />

      {/* Main Content */}
      <main className="pt-nav-top pb-16 min-h-screen">
        <div className="max-w-mobile mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="mt-2xl mb-xl text-center">
          <h1 className="font-display text-h1 text-primary-black mb-md">
            Enough guessing, time for results
          </h1>
          <p className="font-body text-body text-gray-700 mb-lg">
            AI backed Physique Improvements
          </p>
          <Button variant="primary" fullWidth onClick={handleStartNow}>
            Start Now
          </Button>
        </section>

        {/* How It Works */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-primary-black mb-lg text-center">
            How It Works
          </h2>
          
          <div className="space-y-md">
            {/* Step 1 */}
            <Card>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                  <span className="font-display text-h3 text-primary-black">1</span>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-primary-black mb-xs">
                    Define Your Goal
                  </h3>
                  <p className="font-body text-body text-gray-700">
                    Upload a photo of your goal physique or describe it in words
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                  <span className="font-display text-h3 text-primary-black">2</span>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-primary-black mb-xs">
                    AI Analyzes the Gap
                  </h3>
                  <p className="font-body text-body text-gray-700">
                    Our AI identifies focus areas and creates a personalized plan
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                  <span className="font-display text-h3 text-primary-black">3</span>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-primary-black mb-xs">
                    Train & Track Progress
                  </h3>
                  <p className="font-body text-body text-gray-700">
                    Follow your plan, log workouts, and watch your transformation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Join the Crew (Social Proof) */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-primary-black mb-lg text-center">
            Join the Crew
          </h2>
          
          <div className="grid grid-cols-2 gap-md mb-lg">
            {/* Placeholder for before/after images */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-xs">
                <Card className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="font-body text-body-sm text-gray-300">Before</span>
                </Card>
                <Card className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="font-body text-body-sm text-gray-300">After</span>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Button variant="primary" fullWidth onClick={handleStartNow}>
            Start Now
          </Button>
        </section>

        {/* Footer */}
        <footer className="mt-xl text-center">
          <p className="font-body text-body-sm text-gray-700">
            © 2026 7.32 Coach • Privacy • Terms
          </p>
        </footer>
        </div>
      </main>
    </div>
  );
}
