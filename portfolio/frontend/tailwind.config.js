export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(96, 165, 250, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(208, 232, 255, 0.12), transparent 35%), radial-gradient(circle at 60% 0%, rgba(79, 70, 229, 0.18), transparent 28%), radial-gradient(circle at 20% 100%, rgba(59, 130, 246, 0.14), transparent 20%)',
      },
    },
  },
  plugins: [],
};
