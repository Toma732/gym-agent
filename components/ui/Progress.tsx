import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  color?: 'green' | 'yellow';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  color = 'green',
  className = '',
}) => {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
  
  const colorClasses = {
    green: 'bg-secondary-green',
    yellow: 'bg-primary-yellow',
  };

  return (
    <div className={`${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-sm">
          <span className="font-body text-body-sm text-gray-700">{label}</span>
          <span className="font-display text-body-sm text-gray-700">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-400 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface StatusBadgeProps {
  status: 'completed' | 'awaiting' | 'missed';
  label?: string;
  size?: 'small' | 'default';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = 'default',
  className = '',
}) => {
  const statusConfig = {
    completed: {
      bg: 'bg-secondary-green',
      text: 'text-white',
      icon: '✓',
      defaultLabel: 'Completed',
    },
    awaiting: {
      bg: 'bg-primary-yellow',
      text: 'text-primary-black',
      icon: '',
      defaultLabel: 'Log',
    },
    missed: {
      bg: 'bg-secondary-red',
      text: 'text-white',
      icon: '×',
      defaultLabel: 'Missed',
    },
  };

  const config = statusConfig[status];
  const sizeClasses = size === 'small' ? 'px-2 py-1 text-caption' : 'px-3 py-1.5 text-body-sm';

  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-badge font-body font-medium
        ${config.bg} ${config.text} ${sizeClasses} ${className}
      `.trim()}
    >
      {config.icon && <span className="mr-1">{config.icon}</span>}
      {label || config.defaultLabel}
    </span>
  );
};

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: 'green' | 'yellow' | 'blue';
  label?: string;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = 'green',
  label,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colorClasses = {
    green: '#57CB72',
    yellow: '#FFE358',
    blue: '#588DFF',
  };

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E5E5"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colorClasses[color]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-400 ease-out"
        />
        {/* Center text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          className="font-display text-h2 fill-gray-900"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
        >
          {Math.round(percentage)}%
        </text>
      </svg>
      {label && (
        <span className="mt-sm font-body text-body-sm text-gray-700">{label}</span>
      )}
    </div>
  );
};
