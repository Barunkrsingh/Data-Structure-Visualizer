export const darkTheme = {
  colors: {
    // Green-based brand palette
    primary: '#10B981',             // green-500
    primaryLight: '#34D399',        // green-400
    primaryDark: '#059669',         // green-600

    // UI contrast
    secondary: '#FFFFFF',           // pure white for strong contrast
    secondaryLight: '#F4F4F5',
    secondaryDark: '#E5E7EB',

    // Backgrounds and containers
    background: '#121212',          // pure dark (soft black)
    foreground: '#FFFFFF',          // clean white text
    card: '#1A1A1A',                // slightly lighter dark card
    text: '#FFFFFF',                // white main text
    textLight: '#D1D5DB',           // soft gray-white text
    border: '#2D2D2D',              // subtle dark border
    hover: '#1F1F1F',               // dark hover

    // Utility & state
    error: '#EF4444',
    highlight: '#22C55E',           // green highlight
    accent: '#16A34A',              // deep green

    // Grayscale scale for UI
    gray50: '#1A1A1A',
    gray100: '#2A2A2A',
    gray200: '#3A3A3A',
    gray300: '#4A4A4A',
    gray400: '#6B7280',
    gray500: '#9CA3AF',
    gray600: '#D1D5DB',
    gray700: '#E5E7EB',
    gray800: '#F3F4F6',
    gray900: '#FFFFFF',

    // Status colors
    danger: '#F87171',
    warning: '#FBBF24',
    success: '#34D399',
    info: '#60A5FA',
  },

  fonts: {
    sans: "'Poppins', sans-serif",
    mono: "'Roboto Mono', monospace",
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    code: "'Roboto Mono', monospace",
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },

  borderRadius: '8px',

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
    md: '0 2px 4px rgba(0, 0, 0, 0.5)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.6)',
    xl: '0 12px 16px rgba(0, 0, 0, 0.75)',
  },

  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
