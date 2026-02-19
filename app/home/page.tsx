'use client';

import React, { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { WeekComponent, WeekData } from '@/components/home/WeekComponent';
import { StreakCounter } from '@/components/home/StreakCounter';

export default function HomePage() {
  const [profileExpanded, setProfileExpanded] = useState(false);

  // Mock user data
  const userData = {
    name: 'Alex',
    dob: '1995-03-15',
    weight: '75 kg',
    imageUrl: '', // Placeholder
    dailyQuote:
      '"The only bad workout is the one that didn\'t happen." - Unknown',
  };

  // Mock week data
  const weeks: WeekData[] = [
    {
      weekNumber: 1,
      days: [
        {
          date: 'Mon, Feb 19',
          focus: 'Chest & Triceps',
          status: 'completed',
          workoutDetails: {
            exercises: [
              { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
              { name: 'Incline DB Press', sets: 3, reps: '10-12', rest: '60s' },
              { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '60s' },
              { name: 'Tricep Dips', sets: 3, reps: '10-12', rest: '60s' },
              { name: 'Overhead Ext', sets: 3, reps: '12-15', rest: '60s' },
            ],
          },
        },
        {
          date: 'Wed, Feb 21',
          focus: 'Back & Biceps',
          status: 'awaiting',
          workoutDetails: {
            exercises: [
              { name: 'Pull-ups', sets: 4, reps: '8-10' },
              { name: 'Barbell Rows', sets: 4, reps: '8-10' },
              { name: 'Lat Pulldown', sets: 3, reps: '10-12' },
              { name: 'Barbell Curls', sets: 3, reps: '10-12' },
              { name: 'Hammer Curls', sets: 3, reps: '12-15' },
            ],
          },
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
      days: [],
      totalSessions: 4,
      locked: true,
    },
    {
      weekNumber: 3,
      days: [],
      totalSessions: 4,
      locked: true,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-black pb-nav-bottom">
      <TopNav
        userName={userData.name}
        onProfileClick={() => setProfileExpanded(!profileExpanded)}
      />

      <main className="pt-nav-top pb-nav-bottom min-h-screen">
        <div className="container-responsive py-6 sm:py-8">
        {/* Profile Card */}
        <section className="mt-lg content-spacing">
          <Card className="relative">
            <div className="flex items-start gap-md">
              {/* Profile Image */}
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                {userData.imageUrl ? (
                  <img
                    src={userData.imageUrl}
                    alt={userData.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="font-display text-h2 text-gray-400">
                    {userData.name[0]}
                  </span>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="font-display text-h2 text-white mb-xs">
                  {userData.name}
                </h2>
                <p className="font-body text-body-sm text-gray-400">
                  DOB: {new Date(userData.dob).toLocaleDateString()}
                </p>
                <p className="font-body text-body-sm text-gray-400">
                  Weight: {userData.weight}
                </p>
              </div>

              {/* Edit Button */}
              <Button variant="text" size="small" onClick={() => {}}>
                Edit
              </Button>
            </div>

            {/* Daily Quote */}
            <div className="mt-lg pt-lg border-t border-gray-700">
              <p className="font-body text-body italic text-gray-400">
                {userData.dailyQuote}
              </p>
            </div>
          </Card>
        </section>

        {/* Streak Counter */}
        <section className="mb-xl">
          <StreakCounter currentStreak={5} longestStreak={12} />
        </section>

        {/* Weekly Schedule */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-white section-spacing">
            Your Training Schedule
          </h2>

          {weeks.map((week, index) => (
            <WeekComponent
              key={week.weekNumber}
              week={week}
              defaultExpanded={index === 0 && !week.locked}
              onEdit={() => console.log('Edit week', week.weekNumber)}
            />
          ))}
        </section>

        {/* Assessment Card (appears after last week) */}
        <section className="mb-xl">
          <Card variant="outlined" className="border-secondary-blue opacity-60">
            <div className="flex items-start gap-md">
              <div className="flex-shrink-0 text-gray-300">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-h3 text-gray-400 mb-sm">
                  Week 7: Assessment
                </h3>
                <p className="font-body text-body text-gray-400 mb-sm">
                  Complete all weeks to unlock your progress assessment and next
                  training phase.
                </p>
                <p className="font-body text-body-sm text-gray-400">
                  Scheduled for: March 15, 2026
                </p>
              </div>
            </div>
          </Card>
        </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
