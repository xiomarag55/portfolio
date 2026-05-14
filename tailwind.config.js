/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'neuro-base': '#0d1117',
        'neuro-surface': '#111827',
        'neuro-card': '#161f2e',
        'neuro-light': '#1e2d42',
        'neuro-lighter': '#243448',
        'cyber-cyan': '#00d4ff',
        'cyber-blue': '#0066ff',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#f472b6',
        'cyber-green': '#10ffa0',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
        'text-muted': '#475569',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neuro-flat': '8px 8px 16px #080c12, -8px -8px 16px #18273e',
        'neuro-pressed': 'inset 6px 6px 12px #080c12, inset -6px -6px 12px #18273e',
        'neuro-sm': '4px 4px 8px #080c12, -4px -4px 8px #18273e',
        'neuro-lg': '12px 12px 24px #080c12, -12px -12px 24px #18273e',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)',
        'glow-blue': '0 0 20px rgba(0, 102, 255, 0.3), 0 0 60px rgba(0, 102, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #8b5cf6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0d1117 0%, #111827 50%, #0d1117 100%)',
        'gradient-card': 'linear-gradient(145deg, #1a2535, #0f1923)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-reverse': 'rotateSlow 15s linear infinite reverse',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

