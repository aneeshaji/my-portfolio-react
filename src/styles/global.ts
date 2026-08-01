import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #0a1220;
    --background-light: #0e1828;
    --primary: #67e8f9; /* Bright Cyan */
    --secondary: #22d3ee; /* Cyan */
    --pop: #ff8a65; /* Coral - warm pop accent */
    --text: #e7f6fb;
    --text-muted: #8ea3b8;
    --white: #ffffff;
    --black: #000000;

    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-accent: 'Outfit', sans-serif;

    --glass: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(255, 255, 255, 0.09);
    --glass-blur: 10px;

    --ui-icon-filter: brightness(0) invert(1); /* Force white icons for dark mode */
  }

  html.light {
    --background: #f0f8fc;
    --background-light: #ffffff;
    --primary: #0891b2; /* Dark Cyan for light-mode readability */
    --secondary: #0e7490;
    --pop: #ea580c; /* Coral - warm pop accent */
    --text: #10222b;
    --text-muted: #4a5b66;
    --white: #000000;
    --black: #ffffff;

    /* Adjust glass for light mode */
    --glass: rgba(0, 0, 0, 0.04);
    --glass-border: rgba(0, 0, 0, 0.08);

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
    background-image:
      radial-gradient(ellipse 60% 45% at 12% 0%, rgba(34, 211, 238, 0.08), transparent 60%),
      radial-gradient(ellipse 55% 45% at 88% 100%, rgba(255, 138, 101, 0.06), transparent 60%);
    background-attachment: fixed;
    color: var(--text);
    font-family: var(--font-body);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  html.light body {
    background-image:
      radial-gradient(ellipse 60% 45% at 12% 0%, rgba(34, 211, 238, 0.06), transparent 60%),
      radial-gradient(ellipse 55% 45% at 88% 100%, rgba(234, 88, 12, 0.05), transparent 60%);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--white);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  /* Shared modern section header pattern */
  .section-head {
    text-align: center;
    margin-bottom: 6rem;

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--pop);
      text-transform: uppercase;
      letter-spacing: 0.25em;
      font-family: var(--font-accent);
      font-weight: 700;
      font-size: 1.3rem;

      &::before {
        content: '';
        width: 2.5rem;
        height: 2px;
        background: var(--pop);
      }
    }

    h2 {
      font-size: 5rem;
      color: var(--primary);
      margin-top: 1rem;
    }
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