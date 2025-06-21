export const lightTheme = {
  colors: {
    primary: '#10B981',             // green-500 (primary green)
    primaryLight: '#34D399',        // green-400
    primaryDark: '#059669',         // green-600

    secondary: '#111827',           // blackish dark gray for contrast
    secondaryLight: '#1F2937',
    secondaryDark: '#0F172A',

    background: '#F4F4F5',          // cool white-gray background
    foreground: '#111827',          // dark gray text
    card: '#FFFFFF',                // pure white cards
    text: '#111827',                // dark text for readability
    textLight: '#6B7280',           // muted gray text
    border: '#E5E7EB',              // light border gray
    hover: '#E0F2F1',               // soft green hover

    error: '#DC2626',
    highlight: '#22C55E',           // lime green highlight
    accent: '#16A34A',              // deep green

    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',

    danger: '#EF4444',
    warning: '#F59E0B',
    success: '#10B981',
    info: '#14B8A6',
  },

  fonts: {
    sans: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
    sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
    md: '0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.08)',
    xl: '0 12px 16px rgba(0, 0, 0, 0.1)',
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
