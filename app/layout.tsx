import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymAgent - AI Fitness Coach",
  description: "Transform your body with AI-powered personalized workout plans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
