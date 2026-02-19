import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load PuffSquare font
const puffSquare = localFont({
  src: [
    {
      path: './fonts/PuffSquare-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-puff-square',
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Coach - AI Fitness Transformation",
  description: "Enough guessing, time for results. AI-backed physique improvements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={puffSquare.variable}>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
