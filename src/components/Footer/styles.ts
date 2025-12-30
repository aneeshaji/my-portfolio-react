import styled from "styled-components";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

export const Container = styled.footer`
  background-color: var(--glass);
  backdrop-filter: blur(10px);
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--glass-border);

  .logo {
    font-size: 2.8rem;
    color: var(--white); /* Adapts to Black in light mode */
    display: flex;
    /* gap removed */
    
    span:first-child {
      color: var(--primary);
    }
    
    /* Second word inherits parent color (White/Black) for professional look */
  }

  /* Ham Radio Section */
  .ham-radio {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    
    .ham-icon {
      width: 3rem;
      height: 3rem;
      filter: drop-shadow(0 0 5px var(--primary));
      color: var(--primary); /* Helper since SVG stroke is currentColor, but img tag might need filter */
      /* Note: For img src SVG, CSS color property won't affect it unless it's inline SVG or mask. 
         Using filter for colorizing effect or assuming SVG defaults. */
    }

    a {
      color: var(--primary);
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      transition: 0.3s;
      
      &:hover {
        text-shadow: 0 0 15px rgba(0, 243, 255, 0.6);
        transform: scale(1.05);
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    img {
      font-size: 3rem;
      width: 3rem;
      transition: 0.3s;
      opacity: 0.7;
      
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  @media(max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  @media(max-width: 600px) {
    padding: 4rem 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`