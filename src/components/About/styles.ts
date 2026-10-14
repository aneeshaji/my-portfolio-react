import styled from "styled-components";

export const Container = styled.section`
  margin-top: 14rem;

  .about-grid {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 8rem;
    align-items: center;
  }

  /* ── LEFT: Portrait ───────────────────────────────────── */
  .portrait-col {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .portrait-frame {
    position: relative;
    width: 360px;
    height: 360px;

    /* Ambient glow blob */
    &::before {
      content: '';
      position: absolute;
      inset: -40px;
      background: radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.25) 0%, rgba(255, 138, 101, 0.12) 50%, transparent 75%);
      filter: blur(50px);
      border-radius: 50%;
      z-index: 0;
      animation: pulseGlow 4s ease-in-out infinite alternate;
    }

    /* Rotating dashed ring */
    &::after {
      content: '';
      position: absolute;
      inset: -14px;
      border-radius: 50%;
      border: 2px dashed rgba(103, 232, 249, 0.3);
      animation: spinRing 18s linear infinite;
      z-index: 2;
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid rgba(103, 232, 249, 0.6);
      box-shadow:
        0 0 0 8px rgba(103, 232, 249, 0.06),
        0 32px 80px -20px rgba(0, 0, 0, 0.7);
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s;

      &:hover {
        transform: scale(1.04);
        box-shadow:
          0 0 0 8px rgba(103, 232, 249, 0.12),
          0 40px 100px -20px rgba(0, 0, 0, 0.8),
          0 0 60px rgba(34, 211, 238, 0.3);
      }
    }

    .dot-tr {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 18px;
      height: 18px;
      background: var(--primary);
      border-radius: 50%;
      z-index: 3;
      box-shadow: 0 0 14px 4px rgba(103, 232, 249, 0.6);
    }
    .dot-bl {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 12px;
      height: 12px;
      background: var(--pop);
      border-radius: 50%;
      z-index: 3;
      box-shadow: 0 0 12px 4px rgba(255, 138, 101, 0.5);
    }
  }

  /* Experience badge overlay */
  .exp-badge {
    position: absolute;
    bottom: 12px;
    right: -16px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.6rem;
    background: rgba(10, 25, 41, 0.75);
    border: 1px solid rgba(103, 232, 249, 0.4);
    border-radius: 1.4rem;
    backdrop-filter: blur(16px);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(103, 232, 249, 0.08),
      inset 0 1px 0 rgba(255,255,255,0.06);
    transition: transform 0.3s, border-color 0.3s;
    cursor: default;

    &:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
    }

    .exp-number {
      font-size: 2.8rem;
      font-family: var(--font-heading);
      font-weight: 700;
      color: var(--primary);
      line-height: 1;
    }

    .exp-label {
      margin-top: 0.4rem;
      font-size: 1rem;
      font-family: var(--font-accent);
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      white-space: nowrap;
    }
  }

  /* ── RIGHT: Content ───────────────────────────────────── */
  .content-col {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-size: 5rem;
    font-family: var(--font-heading);
    line-height: 1.1;
    margin-bottom: 1.2rem;
    letter-spacing: -0.02em;
    background: linear-gradient(100deg, var(--primary) 0%, #e7f6fb 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .role-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.7rem 1.6rem;
    background: rgba(34, 211, 238, 0.08);
    border: 1px solid rgba(34, 211, 238, 0.25);
    border-radius: 999px;
    font-size: 1.3rem;
    font-family: var(--font-accent);
    font-weight: 600;
    color: var(--secondary);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 3rem;
    width: fit-content;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--secondary);
      border-radius: 50%;
      animation: blink 1.8s ease-in-out infinite;
    }
  }

  .intro {
    font-size: 1.85rem;
    line-height: 1.8;
    color: var(--text-muted);
    font-weight: 400;
    margin-bottom: 2.4rem;
    max-width: 580px;
  }

  .extended {
    font-size: 1.75rem;
    line-height: 1.8;
    color: var(--text-muted);
    max-width: 580px;
    margin-bottom: 4rem;
  }

  .call-link {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px dashed rgba(34, 211, 238, 0.5);
    transition: color 0.3s, border-color 0.3s;

    &:hover {
      color: var(--pop);
      border-color: var(--pop);
    }
  }

  .skills-label {
    font-size: 1.2rem;
    font-family: var(--font-accent);
    font-weight: 700;
    color: var(--pop);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '';
      width: 2.5rem;
      height: 2px;
      background: var(--pop);
    }
  }

  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    padding: 1rem 1.8rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 999px;
    font-size: 1.4rem;
    font-family: var(--font-accent);
    color: var(--text);
    font-weight: 500;
    transition: 0.3s;
    backdrop-filter: blur(var(--glass-blur));

    &:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
      background: rgba(34, 211, 238, 0.06);
      box-shadow: 0 8px 28px -8px rgba(34, 211, 238, 0.4);
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  /* ── Animations ───────────────────────────────────────── */
  @keyframes pulseGlow {
    from { opacity: 0.7; transform: scale(0.95); }
    to   { opacity: 1;   transform: scale(1.05); }
  }

  @keyframes spinRing {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  /* ── Responsive ───────────────────────────────────────── */
  @media (max-width: 1100px) {
    .about-grid {
      grid-template-columns: 320px 1fr;
      gap: 5rem;
    }
    .portrait-frame {
      width: 290px;
      height: 290px;
    }
  }

  @media (max-width: 820px) {
    margin-top: 8rem;

    .about-grid {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    .portrait-col {
      align-items: center;
    }

    .portrait-frame {
      width: 240px;
      height: 240px;
    }

    .content-col {
      align-items: center;
      text-align: center;
    }

    .role-badge {
      align-self: center;
    }

    .intro, .extended {
      max-width: 100%;
    }

    .skill-pills {
      justify-content: center;
    }

    .skills-label {
      justify-content: center;
    }

    .name {
      font-size: 4rem;
    }
  }
`;
