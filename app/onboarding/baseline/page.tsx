'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/Button';
import { Card, ImageCard } from '@/components/ui/Card';

export default function OnboardingBaseline() {
  const router = useRouter();
  const [uploadedBaseline, setUploadedBaseline] = useState<string[]>([]);

  const handleUpload = () => {
    // TODO: Implement file upload
    console.log('Upload baseline photos');
  };

  const handleSkip = () => {
    router.push('/onboarding/focus');
  };

  const handleNext = () => {
    router.push('/onboarding/focus');
  };

  const commonBaselines = [
    'Beginner (New to training)',
    'Skinny (Low body fat, minimal muscle)',
    'Average (Some muscle, moderate fat)',
    'Athletic (Good muscle, low fat)',
    'Bulky (High muscle, higher fat)',
    'Overweight (Higher body fat)',
  ];

  return (
    <div className="min-h-screen bg-white pb-2xl">
      <TopNav showAuth={false} />

      <main className="pt-nav-top px-md max-w-screen-sm mx-auto">
        {/* Header */}
        <section className="mt-lg mb-xl">
          <h1 className="font-display text-h1 text-primary-black mb-md">
            Set Your Baseline
          </h1>
          <p className="font-body text-body text-gray-700 mb-lg">
            Upload photos of your current physique so we can track your progress
            accurately.
          </p>

          {/* Privacy Notice */}
          <div className="mb-lg p-md bg-secondary-blue bg-opacity-10 rounded-card border border-secondary-blue border-opacity-30">
            <p className="font-body text-body-sm text-gray-900">
              <span className="font-medium">🔒 Your privacy matters:</span> All
              photos are encrypted and private. We never share your data.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-md">
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
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-body text-body text-gray-700">
                Upload Baseline Photos
              </span>
            </div>
          </Card>

          <Button variant="text" size="small" fullWidth onClick={handleSkip}>
            Skip for now (do later)
          </Button>
        </section>

        {/* Your Baseline (Uploaded Images) */}
        {uploadedBaseline.length > 0 && (
          <section className="mb-xl">
            <h2 className="font-display text-h2 text-primary-black mb-lg">
              Your Baseline
            </h2>
            <div className="grid grid-cols-2 gap-md">
              {uploadedBaseline.map((photo, index) => (
                <ImageCard
                  key={index}
                  src={photo}
                  alt={`Baseline ${index + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* Common Baselines */}
        <section className="mb-xl">
          <h2 className="font-display text-h2 text-primary-black mb-lg">
            Common Starting Points
          </h2>
          <div className="grid grid-cols-2 gap-md">
            {commonBaselines.map((baseline, index) => (
              <Card
                key={index}
                hover
                onClick={() => console.log('Selected:', baseline)}
                className="text-center"
              >
                <div className="aspect-square bg-gray-100 rounded-card mb-sm flex items-center justify-center">
                  <span className="font-body text-caption text-gray-300">
                    Example
                  </span>
                </div>
                <p className="font-body text-body-sm text-gray-900">{baseline}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sticky bottom-md">
          <Button variant="primary" fullWidth onClick={handleNext}>
            Next
          </Button>
        </section>
      </main>
    </div>
  );
}
