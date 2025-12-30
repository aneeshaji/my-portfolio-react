import styled from "styled-components";

const CodeContainer = styled.div`
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  font-family: 'Fira Code', monospace;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
  }

  /* Header with Mac-style buttons */
  .window-header {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 2rem;
    
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }
    
    .red { background: #ff5f56; }
    .yellow { background: #ffbd2e; }
    .green { background: #27c93f; }
  }

  .code-content {
    color: var(--text);
    font-size: 1.6rem;
    line-height: 1.8;
    
    .keyword { color: #ff79c6; }
    .variable { color: var(--primary); }
    .string { color: #f1fa8c; }
    .property { color: #8be9fd; }
    .number { color: #bd93f9; }
    .boolean { color: #ff5555; }
    .bracket { color: var(--text); }
  }
`;

export function HeroCode() {
    return (
        <CodeContainer className="hero-code">
            <div className="window-header">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
            </div>
            <div className="code-content">
                <div>
                    <span className="keyword">const</span> <span className="variable">developer</span> <span className="keyword">=</span> <span className="bracket">{`{`}</span>
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">firstName</span>: <span className="string">"Aneesh"</span>,
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">lastName</span>: <span className="string">"Ajithkumar"</span>,
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">role</span>: <span className="string">"Software Developer"</span>,
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">skills</span>: <span className="bracket">[</span><span className="string">"React"</span>, <span className="string">"Angular"</span>, <span className="string">"PHP"</span><span className="bracket">]</span>,
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">hardWorker</span>: <span className="boolean">true</span>,
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="property">quickLearner</span>: <span className="boolean">true</span>,
                </div>
                <div>
                    <span className="variable">problemSolver</span>: <span className="keyword">function</span>() <span className="bracket">{`{`}</span>
                </div>
                <div style={{ paddingLeft: '2rem' }}>
                    <span className="keyword">return</span> <span className="string">"Solutions Delivered"</span>;
                </div>
                <div>
                    <span className="bracket">{`}`}</span>;
                </div>
            </div>
        </CodeContainer>
    );
}
