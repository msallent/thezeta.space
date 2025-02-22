import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        destructive: 'var(--destructive)',
      },
      fontFamily: {
        primary: ['var(--font-nourd)', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-glacial)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
