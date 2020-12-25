// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        '15px': '0.9375rem',
        '23px': '1.4375rem',
        full: '100%',
      },
      width: {
        xl: '36rem',
      },
      maxWidth: {
        '4.5xl': '60rem',
        '8xl': '90rem',
      },
      maxHeight: theme => ({
        sm: '30rem',
        '(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
      }),
      boxShadow: {
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgba(134, 239, 172, 0.25)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      transitionDuration: {
        1500: '1.5s',
      },
      scale: {
        80: '0.8',
      },
      skew: {
        '-20': '-20deg',
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['odd', 'even', 'active'],
      borderWidth: ['first', 'last', 'hover', 'focus'],
      cursor: ['active'],
      opacity: ['disabled'],
      textColor: ['group-focus'],
      ringWidth: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      rotate: ['first', 'last', 'odd', 'even'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
