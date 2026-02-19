'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Plan',
    href: '/home',
  },
  {
    label: 'Assess',
    href: '/assess',
  },
];

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-nav-bottom bg-white border-t border-gray-200 z-50">
      <div className="max-w-mobile mx-auto h-full px-4 flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex-1 flex flex-col items-center justify-center h-full
                font-display text-body transition-all
                ${
                  isActive
                    ? 'bg-primary-yellow text-primary-black rounded-button'
                    : 'text-gray-700 hover:text-primary-black'
                }
              `}
            >
              {item.icon && <div className="mb-1">{item.icon}</div>}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
