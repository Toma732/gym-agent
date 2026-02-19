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
    <nav className="fixed top-0 left-0 right-0 h-nav-top bg-white border-b border-gray-200 z-50">
      <div className="max-w-container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-h3 text-primary-black">
          7.32
        </Link>

        {/* Auth / Profile */}
        {showAuth && (
          <div>
            {userName ? (
              <button
                onClick={onProfileClick}
                className="font-display text-h3 text-primary-black hover:text-gray-700 transition"
              >
                {userName}
              </button>
            ) : (
              <button
                onClick={onSignIn}
                className="font-display text-h3 text-primary-black hover:text-gray-700 transition"
              >
                LogIn
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
