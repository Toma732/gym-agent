import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'mobile' | 'default' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'mobile',
  className = '',
}) => {
  const sizeClasses = {
    mobile: 'max-w-mobile',
    default: 'max-w-container',
    full: 'w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
