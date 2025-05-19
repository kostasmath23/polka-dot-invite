module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Open Sans'", "sans-serif"]
      },
      animation: {
        'floating-slow': 'float 8s ease-in-out infinite',
        'floating-medium': 'float 6s ease-in-out infinite',
        'floating-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    }
  },
  plugins: [],
}
