import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Rubik', sans-serif !important;
    font-weight: 400;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    transition: 0.2s ease;
    background: ${({ theme }) => theme.colors.mainBg};
  }
`;
