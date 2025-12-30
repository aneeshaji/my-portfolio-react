import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  .about-text {
    h2 {
      display: inline-block;
      margin-bottom: 3rem;
      font-size: 4rem;
      color: var(--primary);
    }

    h3 {
      margin-top: 3rem;
      margin-bottom: 2rem;
      color: var(--secondary);
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      font-size: 1.8rem;
      letter-spacing: 0.05rem;
      line-height: 1.6;
      font-weight: 400;
      color: var(--text-muted);
    }
  }

  .hard-skills {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: var(--glass);
    border-radius: 1rem;
    transition: 0.3s;
    border: 1px solid transparent;

    &:hover {
      background: var(--glass);
      border-color: var(--primary);
      transform: translateY(-5px);
    }

    img {
      width: 4rem;
      height: 4rem;
      transition: 0.3s; 
    }
  }

  .about-image {
    text-align: center;
    position: relative;
    
    /* Decoration behind image */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background: var(--secondary);
      filter: blur(80px);
      opacity: 0.2;
      z-index: -1;
    }

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(100%);
      transition: filter 0.5s;
      border-radius: 50%;
      
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    margin-top: 5rem;
    
    .hard-skills {
      justify-content: center;
    }
    
    .about-image {
      margin-top: 5rem;
      img {
        width: 100%;
        max-width: 400px;
      }
    }
  }
`;