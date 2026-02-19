'use client';

import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Card, ImageCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar, CircularProgress } from '@/components/ui/Progress';

export default function AssessPage() {
  // Mock progress data
  const progressData = {
    currentWeek: 1,
    totalWeeks: 6,
    workoutsCompleted: 1,
    totalWorkouts: 24,
    consistencyPercentage: 75,
  };

  // Mock goals
  const goals = [
    { name: 'Lean Physique', image: '' },
    { name: 'Athletic Build', image: '' },
  ];

  // Mock baseline
  const baseline = [
    { image: '', date: 'Feb 10, 2026' },
    { image: '', date: 'Feb 10, 2026' },
  ];

  // Mock weekly tracking
  const weeklyTracking = [
    {
      week: 1,
      images: [
        { image: '', date: 'Feb 19' },
        { image: '', date: 'Feb 20' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary-black pb-nav-bottom">
      <TopNav userName="Alex" />

      <main className="pt-nav-top pb-nav-bottom min-h-screen">
        <div className="max-w-mobile mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Progress Overview */}
        <section className="mt-lg mb-xl">
          <h1 className="font-display text-h1 text-white mb-lg">
            Your Progress
          </h1>

          <Card className="mb-lg">
            <h2 className="font-display text-h2 text-white mb-lg">
              Current Progress
            </h2>

            {/* Week Progress */}
            <div className="mb-lg">
              <ProgressBar
                current={progressData.currentWeek}
                total={progressData.totalWeeks}
                label="Training Week"
                color="yellow"
              />
            </div>

            {/* Workout Completion */}
            <div className="mb-lg">
              <ProgressBar
                current={progressData.workoutsCompleted}
                total={progressData.totalWorkouts}
                label="Workouts Completed"
                color="green"
              />
            </div>

            {/* Consistency */}
            <div className="flex items-center justify-between pt-lg border-t border-gray-200">
              <div>
                <h3 className="font-display text-h3 text-white mb-xs">
                  Consistency
                </h3>
                <p className="font-body text-body-sm text-gray-700">
                  You&apos;re doing great! Keep it up.
                </p>
              </div>
              <CircularProgress
                percentage={progressData.consistencyPercentage}
                size={80}
                color="green"
              />
            </div>
          </Card>

          {/* AI Assessment */}
          <Card className="bg-primary-yellow bg-opacity-20 border-primary-yellow">
            <h3 className="font-display text-h3 text-white mb-sm">
              AI Analysis
            </h3>
            <p className="font-body text-body text-white">
              You&apos;re building momentum! Your chest and shoulders are responding
              well to the training stimulus. Focus on progressive overload in
              Week 2 to maintain growth.
            </p>
          </Card>
        </section>

        {/* Your Goals */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-white mb-lg">
            Your Goals
          </h2>
          <div className="grid grid-cols-2 gap-md">
            {goals.map((goal, index) => (
              <div key={index}>
                <ImageCard
                  src={goal.image}
                  alt={goal.name}
                  placeholder={!goal.image}
                />
                <p className="font-body text-body-sm text-gray-700 text-center mt-sm">
                  {goal.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Your Baseline */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-white mb-lg">
            Your Baseline
          </h2>
          <div className="grid grid-cols-2 gap-md">
            {baseline.map((item, index) => (
              <div key={index}>
                <ImageCard
                  src={item.image}
                  alt={`Baseline ${index + 1}`}
                  placeholder={!item.image}
                />
                <p className="font-body text-caption text-gray-700 text-center mt-sm">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Your Tracking */}
        <section className="mb-xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="font-display text-h2 text-white">
              Your Tracking
            </h2>
            <Button variant="primary" size="small" onClick={() => {}}>
              Add Photos
            </Button>
          </div>

          <p className="font-body text-body-sm text-gray-700 mb-lg">
            Upload daily progress photos. We&apos;ll automatically organize them by
            week to track your transformation.
          </p>

          {weeklyTracking.map((weekData) => (
            <Card key={weekData.week} className="mb-lg">
              <h3 className="font-display text-h3 text-white mb-md">
                Week {weekData.week}
              </h3>
              <div className="grid grid-cols-3 gap-sm">
                {weekData.images.map((item, index) => (
                  <div key={index}>
                    <ImageCard
                      src={item.image}
                      alt={`Week ${weekData.week} - ${item.date}`}
                      placeholder={!item.image}
                      aspectRatio="4:3"
                    />
                    <p className="font-body text-caption text-gray-700 text-center mt-xs">
                      {item.date}
                    </p>
                  </div>
                ))}
                {/* Add Photo Placeholder */}
                <ImageCard
                  placeholder
                  alt="Add photo"
                  aspectRatio="4:3"
                  onUpload={() => console.log('Upload photo')}
                />
              </div>
            </Card>
          ))}

          {/* Empty State for Future Weeks */}
          <Card variant="subtle" className="text-center py-xl">
            <p className="font-body text-body text-gray-700">
              More weeks will appear as you progress through your plan.
            </p>
          </Card>
        </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
