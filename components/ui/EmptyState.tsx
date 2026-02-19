import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: 'default' | 'subtle';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = 'default',
}) => {
  const defaultIcon = (
    <svg
      className="w-16 h-16 text-gray-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );

  return (
    <Card
      variant={variant}
      className="text-center py-xl"
    >
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className="mb-lg">{icon || defaultIcon}</div>

        {/* Title */}
        <h3 className="font-display text-h3 text-gray-900 mb-sm">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-body text-gray-700 mb-lg max-w-md">
          {description}
        </p>

        {/* Action Button */}
        {actionLabel && onAction && (
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </Card>
  );
};

// Preset empty states for common scenarios
export const NoWorkoutsEmptyState: React.FC<{ onStart: () => void }> = ({
  onStart,
}) => (
  <EmptyState
    icon={
      <svg
        className="w-16 h-16 text-primary-yellow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    }
    title="Ready to Start?"
    description="Your first workout is waiting. Tap below to begin your transformation journey."
    actionLabel="Start First Workout"
    onAction={onStart}
  />
);

export const NoPhotosEmptyState: React.FC<{ onUpload: () => void }> = ({
  onUpload,
}) => (
  <EmptyState
    icon={
      <svg
        className="w-16 h-16 text-secondary-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    }
    title="Track Your Progress"
    description="Upload photos to visualize your transformation over time. Consistency is key!"
    actionLabel="Add Photos"
    onAction={onUpload}
  />
);

export const NoDataEmptyState: React.FC = () => (
  <EmptyState
    variant="subtle"
    title="No Data Yet"
    description="Keep training and checking back. Your progress will appear here as you complete workouts."
  />
);
