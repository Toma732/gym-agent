'use client';

import React from 'react';
import Link from 'next/link';

interface TopNavProps {
  showAuth?: boolean;
  onSignIn?: () => void;
  userName?: string;
  onProfileClick?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  showAuth = true,
  onSignIn,
  userName,
  onProfileClick,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-primary-black/80 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="container-responsive h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-display text-2xl md:text-3xl font-bold text-primary-yellow hover:text-yellow-300 transition-colors"
        >
          7.32
        </Link>

        {/* Auth / Profile */}
        {showAuth && (
          <div>
            {userName ? (
              <button
                onClick={onProfileClick}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary-yellow/20 border border-primary-yellow/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-yellow">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="body text-white group-hover:text-primary-yellow transition-colors hidden sm:block">
                  {userName}
                </span>
              </button>
            ) : (
              <button
                onClick={onSignIn}
                className="body font-medium text-white hover:text-primary-yellow transition-colors px-4 py-2"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
