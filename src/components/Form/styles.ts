import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text);
  }
  
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    
    input, textarea {
      width: 60rem;
      padding: 1.5rem 2rem;
      border-radius: 1rem;
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
        box-shadow: 0 0 10px rgba(0, 243, 255, 0.1);
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
      border-radius: 1rem;
      font-weight: 700;
      transition: 0.3s;
      
      &:hover {
        background-color: var(--secondary);
        color: var(--white);
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
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--black);
    background-color: var(--primary);
  }
`