import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        display: ['PuffSquare', 'system-ui', 'sans-serif'],
        body: ['Calibri', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2' }],
        'h2': ['24px', { lineHeight: '1.25' }],
        'h3': ['20px', { lineHeight: '1.2' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
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
