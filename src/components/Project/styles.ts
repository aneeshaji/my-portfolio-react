import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    background: linear-gradient(to right, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding: 1rem;
    
    /* Bento Grid Effect: Make every 4th item span 2 columns if width allows */
    @media (min-width: 960px) {
       & > div:nth-child(4n + 1) .project {
         grid-column: span 2;
       }
       /* Or we can just stick to a clean uniform grid which is also very "bento" if cards are uniform */
    }

    .project {
      padding: 3rem 2.5rem;
      background: var(--glass);
      backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      border-radius: 2rem;
      transition: 0.4s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text);
      position: relative;
      overflow: hidden;
      
      /* Glow effect on hover */
      &:hover {
        transform: translateY(-8px);
        border-color: var(--primary);
        box-shadow: 0 10px 40px -10px rgba(0, 243, 255, 0.15);
        background: var(--glass);

        h3 {
          color: var(--primary);
        }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--mobile-primary); 
        margin-bottom: 3rem;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        a > img {
          width: 2.8rem;
          filter: brightness(0) invert(1);
          transition: 0.3s;
          opacity: 0.7;
          
          &:hover {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        svg {
          stroke: var(--primary);
          width: 4rem;
        }
      }
      
      h3 {
        margin-bottom: 1.5rem;
        font-size: 2.4rem;
        font-family: var(--font-heading);
        transition: 0.3s;
      }

      p {
        letter-spacing: 0.05rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        color: var(--text-muted);
        
        a {
          color: var(--white);
          border-bottom: 1px solid var(--primary);
          transition: color 0.25s;
          &:hover {
            color: var(--primary);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 1.2rem;
          color: var(--secondary);
          opacity: 0.9;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 3.5rem;
    }
    
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      
      .project {
        padding: 2.5rem;
        
        .body {
          h3 {
            font-size: 2rem;
          }
          
          p {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 3rem;
    }
    
    .projects {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 1rem;
      
      .project {
        padding: 2rem;
        
        .body {
          h3 {
            font-size: 1.8rem;
          }
          
          p {
            font-size: 1.3rem;
          }
        }
        
        footer {
          .tech-list {
            font-size: 1.1rem;
            gap: 1rem;
          }
        }
      }
    }
  }
`;