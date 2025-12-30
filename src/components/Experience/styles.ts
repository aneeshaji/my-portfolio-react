import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;
  margin-bottom: 0;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--primary);
  }

  .experience-body {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .experience-item {
    background: var(--glass);
    border: 1px solid var(--glass-border);
    padding: 3rem;
    border-radius: 2rem;
    transition: 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
      border-color: var(--primary);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 1rem;

      h3 {
        color: var(--primary);
        font-size: 2.2rem;
        flex: 1;
        min-width: 250px;
      }

      .date {
        color: var(--text);
        font-weight: 700;
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        background: var(--glass-border);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
    }

    .role {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--white);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-muted);
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
    
    h2 {
      font-size: 3.5rem;
      margin-bottom: 4rem;
    }
    
    .experience-body {
      padding: 0 1rem;
    }
    
    .experience-item {
      padding: 2rem;
      
      header {
        flex-direction: column;
        align-items: flex-start;
        
        h3 {
          font-size: 2rem;
        }
        
        .date {
          font-size: 1.2rem;
        }
      }
      
      .role {
        font-size: 1.6rem;
      }
      
      p {
        font-size: 1.4rem;
      }
    }
  }
  
  @media (max-width: 600px) {
    margin-top: 8rem;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    
    .experience-item {
      padding: 1.5rem;
      
      header {
        h3 {
          font-size: 1.8rem;
        }
        
        .date {
          font-size: 1.1rem;
          padding: 0.4rem 0.8rem;
        }
      }
      
      .role {
        font-size: 1.5rem;
      }
      
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
