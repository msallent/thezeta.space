/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      aria: {
        invalid: 'invalid="true"',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          muted: 'var(--primary-muted)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          muted: 'var(--secondary-muted)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          muted: 'var(--tertiary-muted)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          muted: 'var(--destructive-muted)',
        },
      },
      fontFamily: {
        primary: ['var(--font-nourd)', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-glacial)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
