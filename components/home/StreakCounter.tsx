import React from 'react';
import { Card } from '../ui/Card';

interface StreakCounterProps {
  currentStreak: number;
  longestStreak?: number;
  className?: string;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({
  currentStreak,
  longestStreak = 0,
  className = '',
}) => {
  const getStreakMessage = (streak: number) => {
    if (streak === 0) return 'Start your streak today!';
    if (streak === 1) return 'Great start!';
    if (streak < 7) return 'Keep it going!';
    if (streak < 14) return 'You&apos;re on fire! 🔥';
    if (streak < 30) return 'Unstoppable! 🔥🔥';
    return 'Legend status! 🔥🔥🔥';
  };

  return (
    <Card className={`bg-primary-yellow bg-opacity-20 border-primary-yellow ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-sm mb-xs">
            <span className="text-4xl">🔥</span>
            <div>
              <p className="font-display text-h2 text-primary-black">
                {currentStreak} {currentStreak === 1 ? 'Day' : 'Days'}
              </p>
              <p className="font-body text-body-sm text-gray-700">
                {getStreakMessage(currentStreak)}
              </p>
            </div>
          </div>
        </div>

        {longestStreak > 0 && longestStreak > currentStreak && (
          <div className="text-right">
            <p className="font-body text-caption text-gray-700">Best Streak</p>
            <p className="font-display text-body text-gray-900">
              {longestStreak} days
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
