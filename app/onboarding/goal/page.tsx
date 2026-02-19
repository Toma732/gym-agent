'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';
import { Card, ImageCard } from '@/components/ui/Card';
import { TextArea } from '@/components/ui/Input';

export default function OnboardingGoal() {
  const router = useRouter();
  const [uploadedGoals] = useState<string[]>([]);
  const [promptMode, setPromptMode] = useState(false);
  const [promptText, setPromptText] = useState('');

  const handleUpload = () => {
    // TODO: Implement file upload
    console.log('Upload clicked');
  };

  const handleNextStep = () => {
    router.push('/onboarding/baseline');
  };

  const popularGoals = [
    { name: 'Lean Physique', images: 2 },
    { name: 'Muscle Mass', images: 2 },
    { name: 'Athletic Build', images: 2 },
    { name: 'Toned & Defined', images: 2 },
  ];

  return (
    <div className="min-h-screen bg-white pb-2xl">
      <TopNav showAuth={false} />

      <main className="pt-nav-top pb-24 min-h-screen">
        <div className="max-w-mobile mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <section className="mt-lg mb-xl">
          <h1 className="font-display text-h1 text-primary-black mb-md">
            Set Your Goal
          </h1>
          <p className="font-body text-body text-gray-700 mb-lg">
            Upload photos of your goal physique, or describe it in words. This
            helps our AI understand exactly what you&apos;re working towards.
          </p>

          {/* Upload or Prompt Toggle */}
          <Card className="mb-md">
            <div className="flex flex-col gap-md">
              {!promptMode ? (
                <>
                  <div
                    onClick={handleUpload}
                    className="cursor-pointer border-2 border-dashed border-gray-200 rounded-card p-xl bg-gray-100 hover:bg-gray-200 transition flex flex-col items-center justify-center"
                  >
                    <svg
                      className="w-16 h-16 text-gray-300 mb-md"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-body text-body text-gray-700">
                      Upload Goal Photos
                    </span>
                  </div>
                  <Button
                    variant="text"
                    size="small"
                    fullWidth
                    onClick={() => setPromptMode(true)}
                  >
                    Or write a prompt instead
                  </Button>
                </>
              ) : (
                <>
                  <TextArea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="Describe your goal physique in detail... (e.g., 'I want broad shoulders, defined chest, visible abs, and toned arms like a fitness model')"
                    rows={6}
                    fullWidth
                  />
                  <Button
                    variant="text"
                    size="small"
                    fullWidth
                    onClick={() => setPromptMode(false)}
                  >
                    Or upload photos instead
                  </Button>
                </>
              )}
            </div>
          </Card>
        </section>

        {/* Your Goal (Uploaded Images) */}
        {uploadedGoals.length > 0 && (
          <section className="mb-xl">
            <h2 className="font-display text-h2 text-primary-black mb-lg">
              Your Goal
            </h2>
            <div className="grid grid-cols-2 gap-md">
              {uploadedGoals.map((goal, index) => (
                <ImageCard key={index} src={goal} alt={`Goal ${index + 1}`} />
              ))}
            </div>
          </section>
        )}

        {/* Popular Goals */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-primary-black mb-lg">
            Popular Goals
          </h2>
          <div className="space-y-lg">
            {popularGoals.map((goal, index) => (
              <div key={index}>
                <h3 className="font-display text-h3 text-primary-black mb-md">
                  {goal.name}
                </h3>
                <div className="grid grid-cols-2 gap-md">
                  {Array.from({ length: goal.images }).map((_, i) => (
                    <ImageCard
                      key={i}
                      placeholder
                      alt={`${goal.name} example ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sticky bottom-md">
          <Button variant="primary" fullWidth onClick={handleNextStep}>
            Next Step
          </Button>
        </section>
        </div>
      </main>
    </div>
  );
}
