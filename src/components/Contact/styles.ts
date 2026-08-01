import styled from "styled-components";

export const Container = styled.section`
  margin-top: 25rem;

  .subtitle {
    margin: 1.5rem auto 0;
    max-width: 520px;
    color: var(--text-muted);
    font-size: 1.7rem;
    line-height: 1.6;
  }

  .contacts {
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: wrap;

    & > div {
      flex: 1 1 30rem;
      max-width: 44rem;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2.4rem;
      width: 100%;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 1.6rem;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-4px);
        border-color: var(--primary);
        box-shadow: 0 12px 40px -10px rgba(34, 211, 238, 0.4);
      }

      .icon-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.4rem;
        height: 5.4rem;
        border-radius: 1.4rem;
        flex-shrink: 0;

        img {
          width: 2.6rem;
          filter: var(--ui-icon-filter);
        }

        &.email {
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.35);
        }

        &.phone {
          background: rgba(255, 138, 101, 0.12);
          border: 1px solid rgba(255, 138, 101, 0.35);
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        min-width: 0;

        .label {
          font-size: 1.3rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: var(--font-accent);
          font-weight: 600;
        }

        .value {
          font-size: 1.8rem;
          color: var(--text);
          font-weight: 600;
          word-break: break-all;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .subtitle {
      font-size: 1.6rem;
    }

    .contacts {
      flex-direction: column;
      align-items: stretch;

      & > div {
        max-width: none;
      }
    }
  }
`;
