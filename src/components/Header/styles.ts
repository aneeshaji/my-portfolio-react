import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  /* Full-Width Fixed Glass Header */
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: var(--text);
      padding: 0.6rem 1.2rem;
      font-family: var(--font-accent);
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1.4rem;
      transition: all 0.3s ease;
      border-radius: 0.5rem;

      &:hover {
        color: var(--primary);
        background: rgba(255, 255, 255, 0.05);
      }

      &.active {
        color: var(--primary);
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: var(--white);
    position: relative;
    cursor: pointer;
    display: none;

    &:before {
      bottom: 0.5rem;
    }
    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: var(--white);
    cursor: pointer;
    transition: .6s;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--primary);
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--secondary);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-radius: 0;
    padding: 1.8rem 3rem;
    background: rgba(0, 0, 0, 0.8);

    .menu {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--background);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
      z-index: 999;

      &.active {
        opacity: 1;
        visibility: visible;
      }
      
      a {
        font-size: 2.4rem;
        padding: 1.5rem 3rem;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
          color: var(--primary);
        }
      }
    }
    
    .logo {
      font-size: 2rem;
      z-index: 1000;
    }
  }
  
  @media (max-width: 600px) {
    padding: 1.5rem 2rem;
    
    .logo {
      font-size: 1.8rem;
    }
    
    nav {
      gap: 2.5rem;
      
      a {
        font-size: 2rem;
        padding: 1.2rem 2.5rem;
      }
    }
  }
`;