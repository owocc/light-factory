/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 网站颜色配置
      colors: {
        primary: {
          DEFAULT: '#CE603B',
          alt: '#AB4321',
        },
        base: {
          DEFAULT: '#808080',
          dark: '#141414',
          title: {
            DEFAULT: '#1F1F1F',
            dark: '#F2F2F2'
          },
          body: {
            DEFAULT: '#F5F5F5',
            dark: '#0F100F'
          },
        },
        container: {
          DEFAULT: '#FFFFFF',
          dark: '#161717'
        },
      },
      backgroundImage: {
        'first-gradient': 'var(--first-gradient)',
        'first-gradient-alt': 'var(--first-gradient-alt)',
        'second-gradient': 'var(--second-gradient)',
        'second-gradient-alt': 'var(--second-gradient-alt)',
        'third-gradient': 'var(--third-gradient)',
      },
      spacing: {
        90: '22rem',
      },
    },
  },
  plugins: [],
}
