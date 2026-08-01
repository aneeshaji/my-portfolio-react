import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 10rem;
  padding: 5rem 10rem 3rem;
  background: var(--background-light);
  border-top: 1px solid var(--glass-border);
  position: relative;

  /* Gradient accent line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--pop), transparent);
    opacity: 0.55;
  }

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;

  .wordmark {
    font-family: var(--font-heading);
    font-size: 2.4rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    text-decoration: none;
    justify-self: start;
    transition: opacity 0.3s;

    &::before {
      content: '';
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background: var(--pop);
      box-shadow: 0 0 12px var(--pop);
    }

    span:first-child {
      color: var(--primary);
    }

    &:hover {
      opacity: 0.85;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 1.2rem;
    justify-self: end;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
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
      font-size: 2rem;
      width: 2rem;
      filter: var(--ui-icon-filter);
      transition: 0.3s;
    }
  }

  .call {
    display: inline-flex;
    align-items: center;
    justify-self: center;
    padding: 0.5rem 1.4rem;
    font-family: var(--font-accent);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--pop);
    background: rgba(255, 138, 101, 0.12);
    border: 1px solid rgba(255, 138, 101, 0.4);
    border-radius: 999px;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px -8px rgba(255, 138, 101, 0.5);
    }
  }

  @media (max-width: 700px) {
    padding: 4rem 2rem 3rem;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem;

    .wordmark,
    .call {
      justify-self: center;
    }
  }
`;
