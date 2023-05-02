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
      paper: {
        main: 'var(--color-paper-main)',
        dark: 'var(--color-paper-dark)',
      },
      background: {
        main: 'var(--color-background-main)',
        dialog: 'var(--color-background-dialog)',
      },
      neutral: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        disbled: 'var(--color-text-disabled)',
      },
      border: {
        main: 'var(--color-border-main)',
        dark: 'var(--color-border-dark)',
        grey: 'var(--color-border-grey)',
      },
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
      mobile: { max: '900px' },
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
  },
  plugins: [],
};
