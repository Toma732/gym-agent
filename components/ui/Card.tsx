import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'glass' | 'elevated' | 'outlined';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hover = false,
  className = '',
  onClick,
}) => {
  const baseClasses = 'p-6 md:p-8 transition-all duration-300';

  const variantClasses = {
    glass: 'glass-card',
    elevated: 'elevated-card',
    outlined: 'bg-transparent border-2 border-white/20 rounded-2xl backdrop-blur-sm hover:border-primary-yellow/50',
  };

  const hoverClass = hover && !onClick ? 'cursor-default' : '';
  const clickableClass = onClick ? 'cursor-pointer active:scale-[0.98]' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClass} ${clickableClass} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {children}
    </div>
  );
};

interface ImageCardProps {
  src?: string;
  alt: string;
  placeholder?: boolean;
  aspectRatio?: '1:1' | '16:9' | '4:3';
  className?: string;
  onUpload?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  placeholder = false,
  aspectRatio = '1:1',
  className = '',
  onUpload,
}) => {
  const aspectClasses = {
    '1:1': 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
  };

  if (placeholder || !src) {
    return (
      <div
        className={`${aspectClasses[aspectRatio]} rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 group ${className}`}
        onClick={onUpload}
        role={onUpload ? 'button' : undefined}
        tabIndex={onUpload ? 0 : undefined}
      >
        <div className="text-white/40 group-hover:text-white/60 transition-colors mb-3">
          <svg
            className="w-12 h-12 md:w-16 md:h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <span className="body-sm text-white/40 group-hover:text-white/60 transition-colors">Add photo</span>
      </div>
    );
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} rounded-xl overflow-hidden group relative image-overlay ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  trend,
  trendValue,
  variant = 'default',
  className = '',
}) => {
  const trendColors = {
    up: 'text-secondary-green',
    down: 'text-secondary-red',
    neutral: 'text-white/60',
  };

  const variantAccents = {
    default: 'border-white/10',
    success: 'border-secondary-green/30 bg-secondary-green/5',
    warning: 'border-primary-yellow/30 bg-primary-yellow/5',
    danger: 'border-secondary-red/30 bg-secondary-red/5',
  };

  return (
    <div className={`glass-card p-4 md:p-6 ${variantAccents[variant]} ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="body-sm text-white/60 uppercase tracking-wide">{label}</span>
        {icon && <div className="text-white/40">{icon}</div>}
      </div>
      
      <div className="flex items-end justify-between">
        <div className="heading-2 text-white">{value}</div>
        
        {trend && trendValue && (
          <div className={`flex items-center gap-1 body-sm font-medium ${trendColors[trend]}`}>
            {trend === 'up' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            )}
            {trend === 'down' && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};
