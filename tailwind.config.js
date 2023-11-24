/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
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
          title: '#1F1F1F',
          body: '#F5F5F5',
          dark: '#141414',
        },
        container: {
          DEFAULT: '#FFFFFF',
        },
      },
      backgroundImage: {
        'first-gradient': 'var(--first-gradient)',
        'second-gradient': 'var(--second-gradient)',
        'third-gradient': 'var(--third-gradient)',
      },
      spacing: {
        90: '22rem',
      },
    },
  },
  plugins: [],
}
