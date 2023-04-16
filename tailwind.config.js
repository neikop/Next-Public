module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        main: 'var(--color-primary-main)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: {
        light: 'var(--color-secondary-light)',
        main: 'var(--color-secondary-main)',
        dark: 'var(--color-secondary-dark)',
      },
      neutral: {
        main: 'var(--color-neutral-main)',
        dialog: 'var(--color-neutral-dialog)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      black: 'rgb(0, 0, 0)',
      white: 'rgb(255, 255, 255)',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    extend: {
      borderRadius: {
        base: '8px',
      },
      boxShadow: {
        base: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1400px',
      xl: '1600px',
    },
  },
  plugins: [],
};
