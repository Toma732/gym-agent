'use client';

import React, { useEffect, useState } from 'react';

interface CompletionAnimationProps {
  show: boolean;
  onComplete?: () => void;
  message?: string;
}

export const CompletionAnimation: React.FC<CompletionAnimationProps> = ({
  show,
  onComplete,
  message = 'Workout Completed! 💪',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-xl shadow-2xl max-w-sm mx-4 animate-bounce-in">
        {/* Checkmark Animation */}
        <div className="flex justify-center mb-lg">
          <div className="relative w-24 h-24">
            <svg
              className="w-24 h-24 animate-scale-in"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                className="stroke-secondary-green"
                strokeWidth="2"
                fill="none"
                strokeDasharray="63"
                strokeDashoffset="0"
                style={{
                  animation: 'draw-circle 0.6s ease-out forwards',
                }}
              />
              <path
                d="M7 12l3 3 7-7"
                className="stroke-secondary-green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="15"
                strokeDashoffset="15"
                style={{
                  animation: 'draw-check 0.4s 0.3s ease-out forwards',
                }}
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="font-display text-h2 text-primary-black text-center mb-sm">
          {message}
        </h2>
        <p className="font-body text-body text-gray-700 text-center">
          Great work! Keep the momentum going.
        </p>

        {/* Confetti effect (CSS-based) */}
        <div className="confetti-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: [
                  '#FFE358',
                  '#57CB72',
                  '#FF5858',
                  '#588DFF',
                ][Math.floor(Math.random() * 4)],
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes draw-circle {
          from {
            stroke-dashoffset: 63;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-check {
          from {
            stroke-dashoffset: 15;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes confetti-fall {
          from {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .confetti-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          animation: confetti-fall 3s linear forwards;
        }
      `}</style>
    </div>
  );
};
