import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
    padding: 1rem;
    align-items: stretch;
  }

  .project-card {
    background: var(--glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 2rem;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.4s ease;

    &:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: 0 16px 50px -12px rgba(34, 211, 238, 0.45);

      h3 {
        color: var(--secondary);
      }
    }

    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      width: 100%;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(255, 138, 101, 0.14));

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;

        &:hover {
          transform: scale(1.04);
        }
      }

      .preview-fallback {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-heading);
        font-size: 7rem;
        font-weight: 700;
        color: rgba(103, 232, 249, 0.35);
      }
    }

    .body {
      padding: 2.6rem 2.8rem 3rem;
      display: flex;
      flex-direction: column;
      flex: 1;

      h3 {
        font-size: 2.4rem;
        color: var(--primary);
        font-family: var(--font-heading);
        margin-bottom: 1rem;
        letter-spacing: -0.01em;
        transition: 0.3s;
      }

      p {
        color: var(--text-muted);
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        margin-bottom: 2.4rem;

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

      .visit {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--primary);
        font-family: var(--font-accent);
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.03em;
        transition: 0.3s;

        .arrow {
          transition: transform 0.3s;
        }

        &:hover {
          color: var(--pop);

          .arrow {
            transform: translateX(4px);
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 10rem;

    .project-grid {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 740px) {
    margin-top: 8rem;

    .project-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 1rem;
    }

    .project-card .body {
      padding: 2.2rem;
    }
  }
`;
