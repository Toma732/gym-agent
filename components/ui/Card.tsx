import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'subtle';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = false,
  className = '',
  onClick,
}) => {
  const baseClasses = 'rounded-card p-4 sm:p-6';

  const variantClasses = {
    default: 'bg-gray-900 border border-gray-700 shadow-card',
    outlined: 'bg-gray-900 border-2 border-primary-yellow',
    subtle: 'bg-gray-800 border border-gray-700',
  };

  const hoverClass = hover ? 'card-hover cursor-pointer' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClass} ${clickableClass} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
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
        className={`${aspectClasses[aspectRatio]} rounded-card border-2 border-dashed border-gray-700 bg-gray-900 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition ${className}`}
        onClick={onUpload}
        role={onUpload ? 'button' : undefined}
      >
        <div className="text-gray-500 mb-2">
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <span className="font-body text-body-sm text-gray-500">Add photo</span>
      </div>
    );
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} rounded-card overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
