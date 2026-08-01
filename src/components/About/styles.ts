import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  .about-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .portrait {
    position: relative;
    margin-bottom: 3.5rem;

    /* Soft coral glow behind portrait */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 130%;
      background: radial-gradient(circle, rgba(255, 138, 101, 0.2) 0%, transparent 70%);
      filter: blur(40px);
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      padding: 6px;
      background: var(--background);
      border: 4px solid var(--primary);
      box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.6);
      transition: transform 0.5s, box-shadow 0.5s;

      &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 40px -5px rgba(34, 211, 238, 0.5);
      }
    }
  }

  .name {
    font-size: 3.6rem;
    color: var(--primary);
    margin-bottom: 0.8rem;
    letter-spacing: -0.01em;
  }

  .role {
    font-size: 1.5rem;
    color: var(--secondary);
    font-family: var(--font-accent);
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 3.5rem;
  }

  .intro {
    max-width: 560px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.75;
    color: var(--text-muted);
    font-weight: 400;
  }

  .extended {
    max-width: 560px;
    margin: 2.5rem auto 0;
    font-size: 1.7rem;
    line-height: 1.75;
    color: var(--text-muted);
  }

  .call-link {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px dashed rgba(34, 211, 238, 0.5);
    transition: color 0.3s, border-color 0.3s;

    &:hover {
      color: var(--pop);
      border-color: var(--pop);
    }
  }

  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.4rem;
    margin-top: 4.5rem;
    max-width: 660px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 1.6rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 999px;
    font-size: 1.4rem;
    font-family: var(--font-accent);
    color: var(--text);
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      border-color: var(--primary);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px -8px rgba(34, 211, 238, 0.45);
    }

    img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  @media (max-width: 960px) {
    margin-top: 5rem;
  }
`;
