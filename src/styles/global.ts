import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #050505;
    --background-light: #0a0a0a;
    --primary: #00f3ff;
    --secondary: #00f3ff; /* Changed from Purple to match Primary (Cyan) */
    --text: #e0e0e0;
    --text-muted: #a0a0a0;
    --white: #ffffff;
    --black: #000000;
    
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-accent: 'Outfit', sans-serif;

    --glass: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-blur: 10px;
    
    --ui-icon-filter: brightness(0) invert(1); /* Force white icons for dark mode */
  }

  html.light {
    --background: #f0f0f5;
    --background-light: #ffffff;
    --text: #1a1a1a;
    --text-muted: #4a4a4a;
    --white: #000000; 
    --black: #ffffff;
    
    /* Adjust glass for light mode */
    --glass: rgba(0, 0, 0, 0.05);
    --glass-border: rgba(0, 0, 0, 0.1);
    
    /* Darker colors for light mode readability */
    --primary: #0e7490; /* Darker Cyan/Teal */
    --secondary: #0e7490; /* Changed from Purple to match Primary */
    
    --ui-icon-filter: none; /* Keep icons natural (black) in light mode */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 12rem; /* Global fix for fixed header offset */
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--white);
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  ul, li {
    list-style: none;
  }

  button, .button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: var(--font-accent);
  }

  ::selection {
    background: var(--primary);
    color: var(--black);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--glass-border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }
`;