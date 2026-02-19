'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/onboarding');
  }, [router]);

  return (
    <div className="min-h-screen bg-primary-black flex items-center justify-center">
      <div className="text-center space-y-6 fade-in">
        <div className="heading-hero text-primary-yellow animate-pulse">7.32</div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse [animation-delay:0.2s]" />
          <div className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}
