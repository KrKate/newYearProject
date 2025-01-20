import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#eb0000',
        customGray: '#333333',
        buttonNormal: '#f2d7d7',
        wrapperColor: '#F5EFF0',
      },
    },
  },
  plugins: [],
} satisfies Config;
