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
    & > p {
      font-size: 2.4rem;
      color: var(--primary);
      margin-bottom: 1rem;
      font-family: var(--font-accent);
    }
    
    h1 {
      font-size: 8rem;
      line-height: 1;
      margin-bottom: 2rem;
      background: linear-gradient(to right, var(--white) 0%, var(--primary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h3 {
      font-size: 3rem;
      color: var(--secondary);
      margin: 1rem 0;
      font-family: var(--font-body);
      font-weight: 500;
    }

    p.small-resume {
      margin-bottom: 0;
      font-size: 1.8rem;
      color: var(--text-muted);
      max-width: 500px;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding-top: 2rem;

    img, span {
      font-size: 3rem;
      width: 3rem;
      filter: invert(1);
      transition: 0.3s;
      
      &:hover {
        transform: translateY(-5px);
        filter: drop-shadow(0 0 5px var(--primary));
      }
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.6rem 4rem;
    background: var(--primary);
    color: var(--black);
    font-size: 1.8rem;
    font-weight: 700;
    border-radius: 1rem;
    transition: 0.3s;
    display: inline-block;
    
    &:hover {
      background: var(--secondary);
      color: var(--white);
      box-shadow: 0 0 20px rgba(188, 19, 254, 0.5);
    }
  }

  .hero-image {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    
    img {
      max-width: 600px;
      animation: float 6s ease-in-out infinite;
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
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
      margin-top: 3rem;
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
    
    .social-media {
      gap: 2rem;
      
      img, span {
        width: 2.5rem;
        font-size: 2.5rem;
      }
    }
    
    .button {
      padding: 1.2rem 2.5rem;
      font-size: 1.4rem;
    }
  }
`;
