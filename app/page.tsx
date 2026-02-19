'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/onboarding');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="font-display text-h1 text-primary-black mb-4">7.32</div>
        <p className="font-body text-body text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
