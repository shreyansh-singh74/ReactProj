import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Ask anything. Understand everything.</h4>
        <h1 className="gradient_text">
          The power to make any topic simple is in your hands
        </h1>
        <p>
          Whether you're curious about black holes, confused about
          cryptocurrency, or wondering how your smartphone actually works - Easy
          Explainer transforms complex topics into "aha!" moments. Our AI breaks
          down anything into bite-sized, relatable explanations that stick.
        </p>
        <h4>Start exploring today and turn confusion into clarity.</h4>
      </div>
    </div>
  );
};

export default Possibility;
