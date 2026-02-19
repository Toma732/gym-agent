'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { WeekComponent, WeekData } from '@/components/home/WeekComponent';

export default function OnboardingPlan() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/home');
  };

  // Mock week data
  const weeks: WeekData[] = [
    {
      weekNumber: 1,
      days: [
        {
          date: 'Mon, Feb 19',
          focus: 'Chest & Triceps',
          status: 'awaiting',
        },
        {
          date: 'Wed, Feb 21',
          focus: 'Back & Biceps',
          status: 'awaiting',
        },
        {
          date: 'Fri, Feb 23',
          focus: 'Shoulders & Core',
          status: 'awaiting',
        },
        {
          date: 'Sun, Feb 25',
          focus: 'Legs',
          status: 'awaiting',
        },
      ],
      totalSessions: 4,
    },
    {
      weekNumber: 2,
      days: [
        {
          date: 'Mon, Feb 26',
          focus: 'Chest & Triceps',
          status: 'awaiting',
        },
        {
          date: 'Wed, Feb 28',
          focus: 'Back & Biceps',
          status: 'awaiting',
        },
        {
          date: 'Fri, Mar 1',
          focus: 'Shoulders & Core',
          status: 'awaiting',
        },
        {
          date: 'Sun, Mar 3',
          focus: 'Legs',
          status: 'awaiting',
        },
      ],
      totalSessions: 4,
    },
    {
      weekNumber: 3,
      days: [],
      totalSessions: 4,
    },
    {
      weekNumber: 4,
      days: [],
      totalSessions: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-black pb-2xl">
      <TopNav showAuth={false} />

      <main className="pt-nav-top pb-24 min-h-screen">
        <div className="max-w-mobile mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <section className="mt-lg mb-xl">
          <h1 className="font-display text-h1 text-white mb-md">
            Your Training Plan
          </h1>
          <p className="font-body text-body text-gray-700 mb-lg">
            Here&apos;s your personalized plan to reach your goal. The plan runs for{' '}
            <span className="font-medium text-white">6 weeks</span> and
            includes a reassessment to optimize your next phase.
          </p>

          {/* Motivation Card */}
          <Card className="bg-secondary-green bg-opacity-20 border-secondary-green">
            <p className="font-display text-h3 text-white mb-sm">
              You&apos;ve got this! 💪
            </p>
            <p className="font-body text-body text-white">
              Stay consistent, track your progress, and trust the process. Your
              transformation starts today.
            </p>
          </Card>
        </section>

        {/* Weeks Overview */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-white mb-lg">
            Weekly Breakdown
          </h2>

          {weeks.map((week, index) => (
            <WeekComponent
              key={week.weekNumber}
              week={week}
              defaultExpanded={index === 0}
            />
          ))}
        </section>

        {/* Assessment Notice */}
        <section className="mb-xl">
          <Card variant="outlined" className="border-secondary-blue">
            <div className="flex items-start gap-md">
              <div className="flex-shrink-0 text-secondary-blue">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-h3 text-white mb-sm">
                  Week 7: Assessment & Optimization
                </h3>
                <p className="font-body text-body text-gray-700 mb-md">
                  At the end of week 6, you&apos;ll reassess your progress. Based on
                  your results, we&apos;ll optimize your next training phase.
                </p>
                <p className="font-body text-body-sm text-secondary-blue">
                  🔒 Unlocks after Week 6
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="sticky bottom-md">
          <Button variant="primary" fullWidth onClick={handleStart}>
            Let&apos;s Go! 🚀
          </Button>
        </section>
        </div>
      </main>
    </div>
  );
}
