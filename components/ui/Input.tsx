import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, icon, className = '', ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <div className={`${widthClass}`}>
        {label && (
          <label className="block body-sm text-white/70 mb-2 font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              h-14 rounded-xl bg-white/5 backdrop-blur-sm
              border-2 transition-all duration-200
              font-body body text-white placeholder:text-white/40
              focus:outline-none focus:border-primary-yellow focus:bg-white/10
              disabled:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50
              ${error ? 'border-secondary-red' : 'border-white/10 hover:border-white/20'}
              ${icon ? 'pl-12 pr-5' : 'px-5'}
              ${widthClass}
              ${className}
            `.trim()}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 body-sm text-secondary-red flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, fullWidth = false, className = '', rows = 4, ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <div className={`${widthClass}`}>
        {label && (
          <label className="block body-sm text-white/70 mb-2 font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`
            px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm
            border-2 transition-all duration-200
            font-body body text-white placeholder:text-white/40 leading-relaxed
            focus:outline-none focus:border-primary-yellow focus:bg-white/10
            disabled:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50
            resize-none
            ${error ? 'border-secondary-red' : 'border-white/10 hover:border-white/20'}
            ${widthClass}
            ${className}
          `.trim()}
          {...props}
        />
        {error && (
          <p className="mt-2 body-sm text-secondary-red flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
