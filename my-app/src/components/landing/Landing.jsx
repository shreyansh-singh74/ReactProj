import React from "react";
import "./landing.css";

const Landing = ({ onContinue }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Easy Explainer</h1>
        <h2 className="landing-subtitle">Understanding Made Simple</h2>

        <div className="landing-description">
          <p>Ask me anything and I'll explain it like you're 15!</p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-emoji">🧠</span>
              <span>Complex topics made simple</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">💡</span>
              <span>Real-world examples you can relate to</span>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">⚡</span>
              <span>Instant explanations powered by AI</span>
            </div>
          </div>

          <p className="examples-text">
            Try asking about: Black holes, WiFi, DNA, Cryptocurrency, AI, or
            anything else!
          </p>
        </div>

        <button className="continue-button" onClick={onContinue}>
          Start Learning →
        </button>
      </div>
    </div>
  );
};

export default Landing;
