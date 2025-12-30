import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
      color: var(--primary);
    }
    p {
      color: var(--secondary);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 3rem;
    
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      
      img {
        width: 4rem;
        filter: var(--ui-icon-filter); 
      }
      a {
        color: var(--text);
        font-weight: 500;
      }
      
      &:hover {
        background-color: var(--primary);
        color: var(--black);
        a {
          color: var(--black);
        }
        img {
           filter: none;
        }
      }
    }
  }

  @media (max-width: 960px) {
    header {
      h2 {
        font-size: 3.5rem;
      }
      
      p {
        font-size: 1.6rem;
      }
    }
    
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        padding: 2rem;
        
        img {
          width: 3.5rem;
        }
        
        a {
          font-size: 1.6rem;
        }
      }
    }
  }
  
  @media (max-width: 600px) {
    
    header {
      h2 {
        font-size: 3rem;
      }
      
      p {
        font-size: 1.4rem;
      }
    }
    
    .contacts {
      div {
        padding: 1.5rem;
        
        img {
          width: 3rem;
        }
        
        a {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
