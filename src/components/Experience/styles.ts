import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .exp-row {
    position: relative;
    padding: 2.8rem 3rem;
    background: var(--glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 1.8rem;
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
      box-shadow: 0 14px 44px -14px rgba(34, 211, 238, 0.45);
    }

    &.current {
      border-color: rgba(255, 138, 101, 0.45);
      background: linear-gradient(160deg, rgba(255, 138, 101, 0.06), rgba(34, 211, 238, 0.03));
    }

    .row-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;

      .title {
        min-width: 240px;

        h3 {
          font-size: 2.4rem;
          color: var(--primary);
          font-family: var(--font-heading);
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }

        .company {
          font-size: 1.5rem;
          font-family: var(--font-accent);
          font-weight: 600;
          color: var(--white);

          .sep {
            color: var(--text-muted);
            margin: 0 0.4rem;
          }
        }
      }

      .meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;

        .date {
          color: var(--text);
          font-weight: 600;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.3);
          padding: 0.4rem 1.1rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .badge {
          font-family: var(--font-accent);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--pop);
          background: rgba(255, 138, 101, 0.12);
          border: 1px solid rgba(255, 138, 101, 0.4);
          padding: 0.4rem 1.1rem;
          border-radius: 999px;
        }
      }
    }

    .summary {
      margin-top: 1.6rem;
      color: var(--text-muted);
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;

    .exp-row {
      padding: 2.2rem;

      .row-head {
        flex-direction: column;
        gap: 1.2rem;

        .meta {
          order: -1;
        }
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;

    .exp-row {
      padding: 1.8rem;

      .title h3 {
        font-size: 2rem;
      }

      .company {
        font-size: 1.4rem;
      }

      .summary {
        font-size: 1.3rem;
      }
    }
  }
`;
