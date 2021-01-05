/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ['./index.html', './packages/**/*.{vue,js,ts,jsx,tsx}','./docs/**/*.{vue,js,ts,jsx,tsx}'],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',
      cyan: {
        50: '#f4f9fd',
        100: '#d6eaf8',
        200: '#add5f0',
        300: '#84c1ea',
        400: '#5aace3',
        500: '#3298DC',
        600: '#1f7bb8',
        700: '#175c8a',
        800: '#114567',
        900: '#0b2e45',
      },
      orange: {
        50: '#ffece6',
        100: '#fedacf',
        200: '#ffb59f',
        300: '#ff906f',
        400: '#ff6b3f',
        500: '#ff470f',
        600: '#e53500',
        700: '#bc2c00',
        800: '#942200',
        900: '#6c1900',
      },
      yellow: {
        50: '#fffbee',
        100: '#fff8dd',
        200: '#fef1bb',
        300: '#feea9a',
        400: '#ffe378',
        500: '#ffdd57',
        600: '#ffd223',
        700: '#efbe00',
        800: '#bc9600',
        900: '#886d00',
      },
      green: {
        50: '#ecf9f1',
        100: '#daf3e3',
        200: '#b5e8c7',
        300: '#91ddab',
        400: '#6cd28f',
        500: '#48c774',
        600: '#35b060',
        700: '#2c914f',
        800: '#22723e',
        900: '#19532d',
      },
      teal: {
        50: '#e0fefa',
        100: '#c2fef6',
        200: '#86ffed',
        300: '#4affe4',
        400: '#0effdb',
        500: '#00d1b2',
        600: '#00b197',
        700: '#00927c',
        800: '#007261',
        900: '#005347',
      },
      blue: {
        50: '#eaf1fb',
        100: '#d6e3f8',
        200: '#adc7f0',
        300: '#84abea',
        400: '#5a8fe3',
        500: '#3273dc',
        600: '#215fc4',
        700: '#1b4ea1',
        800: '#153d7e',
        900: '#0f2d5c',
      },
      purple: {
        50: '#f7f0ff',
        100: '#f0e1fe',
        200: '#e2c3fe',
        300: '#d3a6ff',
        400: '#c588ff',
        500: '#b76bff',
        600: '#9c34ff',
        700: '#8200fd',
        800: '#6600c7',
        900: '#4a0090',
      },
      red: {
        50: '#fdecef',
        100: '#fcdae0',
        200: '#f9b5c2',
        300: '#f68fa4',
        400: '#f36b86',
        500: '#f14668',
        600: '#ed1a44',
        700: '#ca0f34',
        800: '#9f0c29',
        900: '#73081e',
      },
      gray: colors.coolGray,
      amber: colors.amber,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
      'light-blue': colors.lightBlue,
      lime: colors.lime,
      pink: {
        ...colors.pink,
        1000: '#460d25',
      },
      rose: colors.rose,
      violet: colors.violet,
      code: {
        punctuation: '#A1E8FF',
        tag: '#D58FFF',
        'attr-name': '#4BD0FB',
        'attr-value': '#A2F679',
        string: '#A2F679',
        highlight: 'rgba(134, 239, 172, 0.25)',
      },
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            '> :first-child': { marginTop: '-' },
            '> :last-child': { marginBottom: '-' },
            '&:first-child > :first-child': {
              marginTop: '0',
            },
            '&:last-child > :last-child': {
              marginBottom: '0',
            },
            'h1, h2': {
              letterSpacing: '-0.025em',
            },
            'h2, h3': {
              'scroll-margin-top': `${(70 + 40) / 16}rem`,
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: 0,
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.teal.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              boxShadow: theme('boxShadow.link'),
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: '400',
              color: theme('colors.violet.600'),
            },
            'code::before': {
              content: '"" !important',
            },
            'code::after': {
              content: '"" !important',
            },
            'blockquote > p:first-of-type::before': {
              content: '""',
            },
            pre: {
              backgroundColor: '-',
              color: theme('colors.white'),
              borderRadius: 0,
              marginTop: 0,
              marginBottom: 0,
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
      },
      zIndex: {
        fixed: 9999,
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
