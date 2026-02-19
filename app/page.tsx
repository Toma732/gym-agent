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
      <div className="text-center">
        <div className="font-display text-[48px] md:text-[64px] text-primary-yellow mb-4">7.32</div>
        <p className="font-body text-[20px] text-white">Loading...</p>
      </div>
    </div>
  );
}
