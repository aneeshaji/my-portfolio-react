import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  min-height: 80vh;

  .hero-text {
    p {
      font-size: 2.4rem;
      color: var(--primary);
      margin-bottom: 1rem;
      font-family: var(--font-accent);
      letter-spacing: 0.05em;
    }

    h1 {
      font-size: 9rem;
      line-height: 0.95;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
      color: var(--primary);
      text-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
    }

    h3 {
      font-size: 3rem;
      color: var(--secondary);
      margin: 1rem 0;
      font-family: var(--font-body);
      font-weight: 500;
      text-shadow: 0 0 20px rgba(34, 211, 238, 0.35);
    }

    p.small-resume {
      margin-bottom: 0;
      font-size: 1.8rem;
      color: var(--text-muted);
      max-width: 520px;
    }
  }

  .availability {
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 2.4rem;
    padding: 0.7rem 1.5rem;
    border-radius: 999px;
    background: rgba(255, 138, 101, 0.1);
    border: 1px solid rgba(255, 138, 101, 0.4);
    color: var(--pop);
    font-family: var(--font-accent);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    .dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: var(--pop);
      box-shadow: 0 0 10px var(--pop);
      animation: pulse 2s ease-in-out infinite;
    }
  }

  .cta {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 3.5rem;
    flex-wrap: wrap;
  }

  .button {
    padding: 1.5rem 3.4rem;
    background: var(--primary);
    color: var(--black);
    font-size: 1.7rem;
    font-weight: 700;
    border-radius: 999px;
    transition: 0.3s;
    display: inline-block;
    box-shadow: 0 8px 30px -8px rgba(34, 211, 238, 0.5);

    &:hover {
      background: var(--secondary);
      color: var(--black);
      transform: translateY(-2px);
      box-shadow: 0 12px 40px -8px rgba(34, 211, 238, 0.6);
    }

    &.outline {
      background: transparent;
      color: var(--primary);
      border: 1px solid var(--primary);
      box-shadow: none;

      &:hover {
        background: rgba(34, 211, 238, 0.1);
        color: var(--primary);
        transform: translateY(-2px);
      }
    }

    &.resume {
      background: transparent;
      color: var(--pop);
      border: 1px solid var(--pop);
      box-shadow: none;

      &:hover {
        background: rgba(255, 138, 101, 0.1);
        color: var(--pop);
        transform: translateY(-2px);
      }
    }
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 3.5rem;
    padding: 1.6rem 2.4rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 1.4rem;
    width: fit-content;

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding-right: 3rem;
      border-right: 1px solid var(--glass-border);

      &:last-child {
        padding-right: 0;
        border-right: none;
      }

      .stat-value {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--primary);
        font-family: var(--font-heading);
        line-height: 1;
      }

      .stat-label {
        font-size: 1.2rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-family: var(--font-accent);
        font-weight: 500;
      }
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 1.2rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      transition: 0.3s;

      &:hover {
        transform: translateY(-4px);
        border-color: var(--secondary);
        box-shadow: 0 10px 24px -8px rgba(34, 211, 238, 0.5);
      }
    }

    img {
      font-size: 2.2rem;
      width: 2.2rem;
      filter: var(--ui-icon-filter);
      transition: 0.3s;
    }
  }

  .hero-image {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 62%;
      height: 62%;
      background: radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, transparent 70%);
      filter: blur(70px);
      z-index: -1;
    }

    img {
      max-width: 560px;
      width: 100%;
      animation: float 6s ease-in-out infinite;
      position: relative;
      z-index: 1;
      border-radius: 2rem;
      padding: 8px;
      background: var(--background-light);
      border: 3px solid var(--secondary);
      box-shadow: 0 24px 60px -20px rgba(34, 211, 238, 0.35);
    }

    .corner-accent {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0.4rem;
      background: var(--pop);
      box-shadow: 0 0 16px var(--pop);
      z-index: 2;
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 10rem;
    gap: 4rem;

    .hero-text {
      h1 {
        font-size: 5rem;
      }

      h3 {
        font-size: 2.4rem;
      }

      p.small-resume {
        font-size: 1.6rem;
        margin-bottom: 0;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .availability {
      margin-bottom: 2rem;
    }

    .cta {
      justify-content: center;
      margin-top: 2.5rem;
    }

    .stats {
      justify-content: center;
      width: 100%;
      max-width: 480px;

      .stat {
        flex: 1;
        padding-right: 0;
        border-right: none;
        align-items: center;

        &:not(:last-child) {
          border-right: 1px solid var(--glass-border);
          margin-right: 2rem;
        }
      }
    }

    .social-media {
      justify-content: center;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      img {
        max-width: 80%;
      }
    }

    .button {
      margin-top: 0;
      padding: 1.4rem 3rem;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 600px) {
    padding-top: 8rem;
    gap: 3rem;

    .hero-text {
      h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.8rem !important;
      }

      p.small-resume {
        font-size: 1.4rem;
        margin-bottom: 0;
      }
    }

    .stats {
      gap: 1.5rem;
      padding: 1.4rem 1.6rem;

      .stat {
        .stat-value {
          font-size: 2rem;
        }

        .stat-label {
          font-size: 1rem;
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }

    .social-media {
      gap: 1rem;

      a {
        width: 4rem;
        height: 4rem;
      }

      img {
        width: 2rem;
        font-size: 2rem;
      }
    }

    .button {
      padding: 1.2rem 2.5rem;
      font-size: 1.4rem;
    }
  }
`;
