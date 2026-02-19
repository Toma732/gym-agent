import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'default' | 'large' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      fullWidth = false,
      className = '',
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'font-display text-h3 rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50';

    const variantClasses = {
      primary:
        'bg-primary-yellow text-primary-black hover:bg-yellow-400 focus:ring-primary-yellow',
      secondary:
        'bg-transparent border-2 border-white text-white hover:bg-gray-800 focus:ring-white',
      text: 'bg-transparent text-primary-yellow underline-offset-4 hover:underline focus:ring-primary-yellow p-0',
    };

    const sizeClasses = {
      default: variant === 'text' ? 'px-4 py-2 text-base' : 'h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg',
      large: variant === 'text' ? 'px-6 py-3 text-lg sm:text-xl' : 'h-16 sm:h-20 px-10 sm:px-12 text-lg sm:text-xl',
      small: variant === 'text' ? 'px-3 py-1 text-sm' : 'h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
