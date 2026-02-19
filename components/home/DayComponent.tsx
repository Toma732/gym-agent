import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { StatusBadge } from '../ui/Progress';
import { CompletionAnimation } from '../ui/CompletionAnimation';

export interface DayData {
  date: string; // e.g., "Mon, Feb 19"
  focus: string; // e.g., "Chest & Triceps"
  status: 'completed' | 'awaiting' | 'missed';
  workoutDetails?: {
    exercises: Array<{
      name: string;
      sets: number;
      reps: string;
      rest?: string;
    }>;
  };
}

interface DayComponentProps {
  day: DayData;
  onLogWorkout?: () => void;
  onShowDetails?: () => void;
}

export const DayComponent: React.FC<DayComponentProps> = ({
  day,
  onLogWorkout,
  onShowDetails,
}) => {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const handleLogWorkout = () => {
    setShowCompletion(true);
    if (onLogWorkout) {
      onLogWorkout();
    }
  };

  const toggleDetails = () => {
    if (onShowDetails) {
      onShowDetails();
    }
    setDetailsExpanded(!detailsExpanded);
  };

  return (
    <Card className="mb-md">
      <div className="flex items-start justify-between">
        {/* Left: Date and Focus */}
        <div className="flex-1">
          <p className="font-body text-body-sm text-gray-700 mb-xs">{day.date}</p>
          <h3 className="font-display text-h3 text-primary-black mb-sm">
            {day.focus}
          </h3>

          {/* Action Buttons */}
          <div className="flex gap-sm mt-md">
            <Button
              variant="text"
              size="small"
              onClick={toggleDetails}
            >
              {detailsExpanded ? 'Hide Details' : 'Show Details'}
            </Button>

            {day.status === 'awaiting' && onLogWorkout && (
              <Button
                variant="primary"
                size="small"
                onClick={handleLogWorkout}
              >
                Log Workout
              </Button>
            )}
          </div>
        </div>

        {/* Right: Status Badge */}
        <StatusBadge status={day.status} />
      </div>

      {/* Expandable Workout Details */}
      {detailsExpanded && day.workoutDetails && (
        <div className="mt-lg pt-md border-t border-gray-200">
          <h4 className="font-display text-body text-primary-black mb-md">
            Workout Details
          </h4>
          <div className="space-y-sm">
            {day.workoutDetails.exercises.map((exercise, index) => (
              <div key={index} className="p-sm bg-gray-100 rounded-lg">
                <p className="font-body text-body font-medium text-gray-900">
                  {exercise.name}
                </p>
                <p className="font-body text-body-sm text-gray-700">
                  {exercise.sets} sets × {exercise.reps}
                  {exercise.rest && ` • ${exercise.rest} rest`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completion Animation */}
      <CompletionAnimation
        show={showCompletion}
        onComplete={() => setShowCompletion(false)}
        message={`${day.focus} - Complete! 💪`}
      />
    </Card>
  );
};
