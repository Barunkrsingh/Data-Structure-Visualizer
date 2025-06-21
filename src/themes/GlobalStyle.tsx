import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.sans};
    line-height: ${({ theme }) => theme.lineHeights.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  input, textarea, select {
    font: inherit;
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
  }

  /* Dark mode body class (optional for specific tweaks) */
  body.dark-mode {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
