import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export interface FocusArea {
  id: string;
  name: string; // e.g., "Chest"
  description: string; // e.g., "Build mass and definition"
  current: string; // e.g., "Flat, undefined"
  goal: string; // e.g., "Broad, defined pecs"
  approved: boolean;
}

interface FocusAreaComponentProps {
  focusArea: FocusArea;
  onApprove: (id: string) => void;
  onRefine: (id: string) => void;
}

export const FocusAreaComponent: React.FC<FocusAreaComponentProps> = ({
  focusArea,
  onApprove,
  onRefine,
}) => {
  return (
    <Card
      variant={focusArea.approved ? 'outlined' : 'default'}
      className={`mb-md ${
        focusArea.approved ? 'border-secondary-green' : 'border-gray-200'
      }`}
    >
      {/* Header */}
      <h3 className="font-display text-h3 text-primary-black mb-sm">
        {focusArea.name}
      </h3>
      <p className="font-body text-body text-gray-900 mb-md">
        {focusArea.description}
      </p>

      {/* Current vs Goal */}
      <div className="space-y-sm mb-lg">
        <div>
          <span className="font-body text-body-sm text-gray-700">Current: </span>
          <span className="font-body text-body-sm text-gray-900">
            {focusArea.current}
          </span>
        </div>
        <div>
          <span className="font-body text-body-sm text-gray-700">Goal: </span>
          <span className="font-body text-body-sm text-gray-900">
            {focusArea.goal}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-md">
        {focusArea.approved ? (
          <Button
            variant="secondary"
            size="small"
            fullWidth
            onClick={() => onRefine(focusArea.id)}
          >
            Refine
          </Button>
        ) : (
          <>
            <Button
              variant="primary"
              size="small"
              fullWidth
              onClick={() => onApprove(focusArea.id)}
            >
              ✓ Approve
            </Button>
            <Button
              variant="secondary"
              size="small"
              fullWidth
              onClick={() => onRefine(focusArea.id)}
            >
              Refine
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
