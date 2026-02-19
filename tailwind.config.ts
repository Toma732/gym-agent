import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      maxWidth: {
        'mobile': '430px',
        'container': '1200px',
      },
      colors: {
        // Primary
        primary: {
          yellow: '#FFE358',
          black: '#000000',
        },
        // Secondary
        secondary: {
          green: '#57CB72',
          red: '#FF5858',
          blue: '#588DFF',
        },
        // Neutral scale
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          700: '#404040',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['var(--font-puff-square)', 'system-ui', 'sans-serif'],
        body: ['Calibri', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2rem', { lineHeight: '1.2' }],        // 32px
        'h2': ['1.5rem', { lineHeight: '1.25' }],     // 24px
        'h3': ['1.25rem', { lineHeight: '1.2' }],     // 20px
        'body': ['1rem', { lineHeight: '1.5' }],      // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4' }],  // 12px
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'button': '12px',
        'card': '16px',
        'badge': '12px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
      height: {
        'button': '56px',
        'nav-top': '64px',
        'nav-bottom': '72px',
        'input': '56px',
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
