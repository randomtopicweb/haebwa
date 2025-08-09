// tailwind.config.mjs
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', ...fontFamily.sans],
      },
      colors: {
        'background': '#f8f9fa',
        'surface': '#ffffff',
        'primary': '#1e293b',
        'secondary': '#475569',
        'accent': '#3b82f6',
        'accent-hover': '#2563eb',
        'border': '#e5e7eb',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
	},
	plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}