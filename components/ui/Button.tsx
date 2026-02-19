import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'default' | 'large' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      fullWidth = false,
      glow = false,
      className = '',
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'font-display font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40';

    const variantClasses = {
      primary:
        'bg-primary-yellow text-primary-black hover:bg-yellow-300 focus:ring-primary-yellow shadow-md hover:shadow-xl',
      secondary:
        'bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 focus:ring-white backdrop-blur-sm',
      ghost:
        'bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20',
      text: 'bg-transparent text-primary-yellow hover:text-yellow-300 underline-offset-4 hover:underline focus:ring-primary-yellow p-0 font-normal',
    };

    const sizeClasses = {
      default: variant === 'text' ? 'px-2 py-1 text-base' : 'h-14 px-8 text-base md:text-lg',
      large: variant === 'text' ? 'px-3 py-2 text-lg md:text-xl' : 'h-16 px-10 text-lg md:text-xl',
      small: variant === 'text' ? 'px-2 py-1 text-sm' : 'h-12 px-6 text-sm md:text-base',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const glowClass = glow && variant === 'primary' ? 'pulse-glow' : '';

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${glowClass} ${className}`.trim();

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
