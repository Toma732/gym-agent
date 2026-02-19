import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { DayComponent, DayData } from './DayComponent';

export interface WeekData {
  weekNumber: number;
  days: DayData[];
  locked?: boolean;
  totalSessions?: number;
}

interface WeekComponentProps {
  week: WeekData;
  defaultExpanded?: boolean;
  onEdit?: () => void;
}

export const WeekComponent: React.FC<WeekComponentProps> = ({
  week,
  defaultExpanded = false,
  onEdit,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    if (!week.locked) {
      setExpanded(!expanded);
    }
  };

  if (week.locked) {
    return (
      <Card variant="glass" className="mb-md opacity-60">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-h3 text-gray-700">
              Week {week.weekNumber}
            </h3>
            {week.totalSessions && (
              <p className="font-body text-body-sm text-gray-700 mt-xs">
                {week.totalSessions} sessions
              </p>
            )}
          </div>
          <div className="text-gray-300">
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="mb-lg">
      {/* Week Header */}
      <Card
        variant={expanded ? 'outlined' : 'glass'}
        hover={!expanded}
        onClick={!expanded ? toggleExpanded : undefined}
        className="mb-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-display text-h3 text-primary-black">
              Week {week.weekNumber}
            </h3>
            {!expanded && week.totalSessions && (
              <p className="font-body text-body-sm text-gray-700 mt-xs">
                {week.totalSessions} sessions
              </p>
            )}
          </div>

          <div className="flex items-center gap-md">
            {expanded && onEdit && (
              <Button variant="text" size="small" onClick={onEdit}>
                Edit
              </Button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded();
              }}
              className="text-gray-700 hover:text-primary-black transition"
              aria-label={expanded ? 'Collapse week' : 'Expand week'}
            >
              <svg
                className={`w-6 h-6 transition-transform ${
                  expanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Card>

      {/* Week Days (Expanded) */}
      {expanded && (
        <div className="pl-md">
          {week.days.map((day, index) => (
            <DayComponent key={index} day={day} />
          ))}
        </div>
      )}
    </div>
  );
};
