import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        notoSerifJPLight: ["Noto Serif JP Light"],
        notoSerifJPregular: ["Noto Serif JP Regular"],
        notoSerifJPMedium: ["Noto Serif JP Medium"],
        notoSerifJPSemiBold: ["Noto Serif JP SemiBold"],
        notoSerifJPBold: ["Noto Serif JP Bold"],
        notoSerifJPBlack: ["Noto Serif JP Black"],
      },
      colors: {
        'primary-blue': '#245B9B',
        'background-light-blue': '#F3F6FC',
        'background-second-blue': '#D8E3F4',
        'separator-blue': '#367BC1',
        'text-title-dark-blue': '#023269'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '0.8': '0.8px'
    }
  },
  plugins: [],
} satisfies Config