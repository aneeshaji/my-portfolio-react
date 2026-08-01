import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding: 1rem;
  }

  .project {
    position: relative;
    padding: 3.5rem 3rem 3rem;
    background: var(--glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 2rem;
    transition: 0.4s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--text);
    overflow: hidden;

    &:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: 0 16px 50px -12px rgba(34, 211, 238, 0.45);
    }

    &:hover h3 {
      color: var(--primary);
    }

    .index {
      position: absolute;
      top: 1.5rem;
      right: 2rem;
      font-family: var(--font-heading);
      font-size: 3.6rem;
      font-weight: 700;
      color: var(--pop);
      opacity: 0.9;
      line-height: 1;
      text-shadow: 0 0 20px rgba(255, 138, 101, 0.35);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3rem;

      .icon-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 1.4rem;
        background: rgba(34, 211, 238, 0.12);
        border: 1px solid rgba(34, 211, 238, 0.35);

        svg {
          stroke: var(--primary);
          width: 2.6rem;
          height: 2.6rem;
        }
      }

      a > img {
        width: 2.4rem;
        filter: var(--ui-icon-filter);
        opacity: 0.6;
        transition: 0.3s;

        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }

    .body {
      h3 {
        margin-bottom: 1.5rem;
        font-size: 2.4rem;
        font-family: var(--font-heading);
        transition: 0.3s;
      }

      p {
        line-height: 1.6;
        color: var(--text-muted);
      }
    }

    footer {
      margin-top: auto;
      padding-top: 2rem;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;

        li {
          padding: 0.5rem 1.2rem;
          font-size: 1.25rem;
          font-family: var(--font-accent);
          color: var(--secondary);
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.25);
          border-radius: 999px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      .project {
        padding: 2.5rem;

        .index {
          font-size: 3rem;
        }

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
      }
    }
  }
`;
