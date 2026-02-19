import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = '', ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <div className={`${widthClass}`}>
        {label && (
          <label className="block font-body text-body-sm text-gray-700 mb-sm">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            h-input px-md rounded-button border-2 bg-white
            font-body text-body text-gray-900
            transition-all duration-200
            focus:outline-none focus:border-primary-yellow
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-secondary-red' : 'border-gray-200'}
            ${widthClass}
            ${className}
          `.trim()}
          {...props}
        />
        {error && (
          <p className="mt-sm font-body text-body-sm text-secondary-red">{error}</p>
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
          <label className="block font-body text-body-sm text-gray-700 mb-sm">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`
            px-md py-md rounded-button border-2 bg-white
            font-body text-body text-gray-900
            transition-all duration-200
            focus:outline-none focus:border-primary-yellow
            disabled:bg-gray-100 disabled:cursor-not-allowed
            resize-none
            ${error ? 'border-secondary-red' : 'border-gray-200'}
            ${widthClass}
            ${className}
          `.trim()}
          {...props}
        />
        {error && (
          <p className="mt-sm font-body text-body-sm text-secondary-red">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
