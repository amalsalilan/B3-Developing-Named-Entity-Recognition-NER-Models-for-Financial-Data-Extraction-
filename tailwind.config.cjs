/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Horizon UI inspired colors
        horizon: {
          dark: {
            DEFAULT: 'rgb(11 20 55 / <alpha-value>)',
            secondary: 'rgb(27 37 75 / <alpha-value>)',
            tertiary: 'rgb(43 58 92 / <alpha-value>)',
          },
          light: {
            DEFAULT: 'rgb(244 247 254 / <alpha-value>)',
            secondary: 'rgb(255 255 255 / <alpha-value>)',
            tertiary: 'rgb(233 237 247 / <alpha-value>)',
          },
          primary: {
            DEFAULT: 'rgb(67 24 255 / <alpha-value>)',
            hover: 'rgb(51 17 204 / <alpha-value>)',
            light: 'rgb(107 78 255 / <alpha-value>)',
          },
          gradient: {
            from: 'rgb(67 24 255 / <alpha-value>)',
            via: 'rgb(107 78 255 / <alpha-value>)',
            to: 'rgb(0 212 255 / <alpha-value>)',
          },
          accent: {
            blue: 'rgb(0 212 255 / <alpha-value>)',
            purple: 'rgb(107 78 255 / <alpha-value>)',
            cyan: 'rgb(0 212 255 / <alpha-value>)',
          },
        },
        border: 'hsl(var(--border))',
      },
      backgroundImage: {
        'gradient-horizon': 'linear-gradient(135deg, #4318FF 0%, #6B4EFF 50%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0B1437 0%, #1B254B 100%)',
      },
      boxShadow: {
        'horizon': '0 0 20px rgba(67, 24, 255, 0.3)',
        'horizon-lg': '0 0 40px rgba(67, 24, 255, 0.4)',
        'glow': '0 0 15px rgba(0, 212, 255, 0.5)',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
