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
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-primary-black border-b border-gray-800 z-50">
      <div className="container-responsive h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-[20px] md:text-[24px] text-primary-yellow hover:text-yellow-400 transition">
          7.32
        </Link>

        {/* Auth / Profile */}
        {showAuth && (
          <div>
            {userName ? (
              <button
                onClick={onProfileClick}
                className="font-display text-[18px] md:text-[20px] text-white hover:text-primary-yellow transition"
              >
                {userName}
              </button>
            ) : (
              <button
                onClick={onSignIn}
                className="font-display text-[18px] md:text-[20px] text-white hover:text-primary-yellow transition"
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
