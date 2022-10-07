module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      height: {
        header: '50px',
        main: 'calc(100vh - 50px)'
      },
      fontSize: {
        sm: ['0.8rem', '0.9rem'],
        base: ['1rem', '1.1rem'],
        lg: ['1.2rem', '1.25rem'],
      },
    },
  },
  plugins: [],
}
