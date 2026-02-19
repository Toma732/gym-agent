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
    <div className="min-h-screen bg-primary-black">
      {/* Top Navigation */}
      <TopNav showAuth={true} />

      {/* Main Content */}
      <main className="main-content">
        <div className="container-responsive">
          
          {/* Hero Section */}
          <section className="section-spacing text-center">
            <div className="bg-primary-yellow rounded-lg py-6 px-6 content-spacing">
              <h1 className="font-display text-[20px] md:text-[24px] lg:text-[28px] leading-tight text-white mb-2">
                Enough guessing, time for results
              </h1>
              <p className="font-body text-[20px] md:text-[22px] leading-tight text-white">
                AI backed Physique Improvements
              </p>
            </div>
            <button
              onClick={handleStartNow}
              className="w-full bg-primary-yellow font-display text-[20px] md:text-[22px] text-white py-4 px-6 rounded-lg hover:bg-yellow-400 transition min-h-[48px]"
            >
              Start Now
            </button>
          </section>

          {/* How It Works */}
          <section className="section-spacing">
            <h2 className="font-display text-[20px] md:text-[24px] text-white text-center content-spacing">
              How It Works
            </h2>
            
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <p className="font-body text-[20px] md:text-[22px] text-white leading-relaxed whitespace-pre-line">
                {`Step 1 - Upload your ideal physique

Step 2 - Set your starting point

Step 3 - Follow the plan and monitor daily`}
              </p>
            </div>
          </section>

          {/* Join the Crew */}
          <section className="section-spacing">
            <h2 className="font-display text-[20px] md:text-[24px] text-white text-center content-spacing">
              Join the crew
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-square bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center">
                    <span className="font-body text-sm text-gray-400">Before</span>
                  </div>
                  <div className="aspect-square bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center">
                    <span className="font-body text-sm text-gray-400">After</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="section-spacing">
            <button
              onClick={handleStartNow}
              className="w-full bg-primary-yellow font-display text-[20px] md:text-[22px] text-white py-4 px-6 rounded-lg hover:bg-yellow-400 transition min-h-[48px]"
            >
              Start Now
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center">
            <p className="font-body text-[20px] text-gray-400 leading-relaxed">
              © 2026 7.32 Body LLC<br />
              All Rights Reserved
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
