import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Ready to turn confusion into clarity?</p>
        <h3>Start asking questions and get simple explanations today!</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button
          type="button"
          onClick={() => document.getElementById("home").scrollIntoView()}
        >
          Try It Now
        </button>
      </div>
    </div>
  );
};

export default Cta;
