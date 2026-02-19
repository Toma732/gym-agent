'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';

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
      <main className="pt-nav-top pb-16">
        <div className="max-w-[402px] mx-auto px-4">
          
          {/* Hero Section */}
          <section className="mt-12 mb-8 text-center">
            <div className="bg-primary-yellow rounded-lg py-4 px-6 mb-4">
              <h1 className="font-display text-[20px] leading-tight text-primary-black mb-2">
                Enough guessing, time for results
              </h1>
              <p className="font-body text-[20px] leading-tight text-gray-900">
                AI backed Physique Improvements
              </p>
            </div>
            <button
              onClick={handleStartNow}
              className="w-full bg-primary-yellow font-display text-[20px] text-primary-black py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              Start Now
            </button>
          </section>

          {/* How It Works */}
          <section className="mb-8">
            <h2 className="font-display text-[20px] text-primary-black text-center mb-6">
              How It Works
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="font-body text-[20px] text-gray-900 leading-relaxed whitespace-pre-line">
                {`Step 1 - Upload your ideal physique

Step 2 - Set your starting point

Step 3 - Follow the plan and monitor daily`}
              </p>
            </div>
          </section>

          {/* Join the Crew */}
          <section className="mb-8">
            <h2 className="font-display text-[20px] text-primary-black text-center mb-6">
              Join the crew
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="font-body text-sm text-gray-300">Before</span>
                  </div>
                  <div className="aspect-square bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="font-body text-sm text-gray-300">After</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <button
              onClick={handleStartNow}
              className="w-full bg-primary-yellow font-display text-[20px] text-primary-black py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              Start Now
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center">
            <p className="font-body text-[20px] text-gray-700 leading-relaxed">
              © 2026 7.32 Body LLC<br />
              All Rights Reserved
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
