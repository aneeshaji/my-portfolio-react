import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    input, textarea {
      width: 64rem;
      max-width: 100%;
      padding: 1.6rem 2.2rem;
      border-radius: 1.2rem;
      outline: none;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      color: var(--text);
      font-weight: 500;
      font-family: var(--font-body);
      transition: 0.3s;

      &::placeholder {
        color: var(--text-muted);
      }

      &:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 1px var(--primary), 0 0 24px -2px rgba(34, 211, 238, 0.45);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1.5rem 6rem;
      text-transform: uppercase;
      background-color: var(--primary);
      color: var(--black);
      border-radius: 999px;
      font-weight: 700;
      letter-spacing: 0.05em;
      transition: 0.3s;
      box-shadow: 0 8px 30px -8px rgba(34, 211, 238, 0.5);

      &:hover {
        background-color: var(--pop);
        color: var(--black);
        box-shadow: 0 12px 40px -8px rgba(255, 138, 101, 0.6);
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
      }
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;
      padding: 0 2rem;

      input, textarea {
        width: 100%;
        padding: 1.4rem 1.8rem;
        font-size: 1.6rem;
      }

      button {
        width: 100%;
        padding: 1.6rem 2rem;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 600px) {
    form {
      padding: 0 1rem;

      input, textarea {
        padding: 1.2rem 1.5rem;
        font-size: 1.4rem;
      }

      button {
        padding: 1.4rem 2rem;
        font-size: 1.4rem;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 8rem;
  text-align: center;

  h3 {
    color: var(--primary);
    font-size: 2.6rem;
    margin-bottom: 1.5rem;
  }

  button {
    border-radius: 999px;
    padding: 1.3rem 3rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.05em;
    color: var(--black);
    background-color: var(--primary);
    box-shadow: 0 8px 30px -8px rgba(34, 211, 238, 0.5);
    transition: 0.3s;

    &:hover {
      background-color: var(--pop);
      color: var(--black);
      box-shadow: 0 12px 40px -8px rgba(255, 138, 101, 0.6);
      transform: translateY(-2px);
    }
  }
`;
