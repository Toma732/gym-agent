'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  FocusAreaComponent,
  FocusArea,
} from '@/components/onboarding/FocusAreaComponent';

export default function OnboardingFocus() {
  const router = useRouter();
  
  const [focusAreas, setFocusAreas] = useState<FocusArea[]>([
    {
      id: '1',
      name: 'Chest',
      description: 'Build mass and definition',
      current: 'Flat, undefined',
      goal: 'Broad, defined pecs',
      approved: false,
    },
    {
      id: '2',
      name: 'Shoulders',
      description: 'Develop width and strength',
      current: 'Narrow, weak',
      goal: 'Wide, capped deltoids',
      approved: false,
    },
    {
      id: '3',
      name: 'Core',
      description: 'Strengthen and define abs',
      current: 'Soft, no definition',
      goal: 'Visible 6-pack, strong core',
      approved: false,
    },
    {
      id: '4',
      name: 'Arms',
      description: 'Build size and definition',
      current: 'Skinny, little muscle',
      goal: 'Thick biceps and triceps',
      approved: false,
    },
  ]);

  const handleApprove = (id: string) => {
    setFocusAreas((prev) =>
      prev.map((area) => (area.id === id ? { ...area, approved: true } : area))
    );
  };

  const handleRefine = (id: string) => {
    // TODO: Open refinement modal/flow
    console.log('Refine focus area:', id);
  };

  const handleBuildPlan = () => {
    const allApproved = focusAreas.every((area) => area.approved);
    if (allApproved) {
      router.push('/onboarding/plan');
    } else {
      alert('Please approve all focus areas before continuing');
    }
  };

  const allApproved = focusAreas.every((area) => area.approved);

  return (
    <div className="min-h-screen bg-white pb-2xl">
      <TopNav showAuth={false} />

      <main className="pt-nav-top px-md max-w-screen-sm mx-auto">
        {/* Header */}
        <section className="mt-lg mb-xl">
          <h1 className="font-display text-h1 text-primary-black mb-md">
            Your Focus Areas
          </h1>
          <p className="font-body text-body text-gray-700 mb-lg">
            Based on your goal and baseline, we&apos;ve identified key areas to focus
            on. Review and refine each one to ensure they match your vision.
          </p>

          {/* Analysis Summary */}
          <Card className="bg-primary-yellow bg-opacity-20 border-primary-yellow">
            <h3 className="font-display text-h3 text-primary-black mb-sm">
              AI Analysis Summary
            </h3>
            <p className="font-body text-body text-gray-900">
              Your primary focus should be building upper body mass while
              developing core strength. We recommend a 4-day split targeting
              these areas progressively.
            </p>
          </Card>
        </section>

        {/* Focus Areas */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-primary-black mb-lg">
            Focus Areas ({focusAreas.filter((a) => a.approved).length} /{' '}
            {focusAreas.length} approved)
          </h2>
          
          {focusAreas.map((area) => (
            <FocusAreaComponent
              key={area.id}
              focusArea={area}
              onApprove={handleApprove}
              onRefine={handleRefine}
            />
          ))}
        </section>

        {/* CTA */}
        <section className="sticky bottom-md">
          <Button
            variant="primary"
            fullWidth
            onClick={handleBuildPlan}
            disabled={!allApproved}
          >
            Build Your Plan
          </Button>
          {!allApproved && (
            <p className="text-center font-body text-body-sm text-gray-700 mt-sm">
              Approve all areas to continue
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
