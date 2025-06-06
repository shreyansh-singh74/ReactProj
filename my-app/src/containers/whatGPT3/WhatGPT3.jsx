import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What is Easy Explainer"}
          text={
            "An AI-powered learning companion that breaks down complex topics into simple, engaging explanations. Using real-world examples and teenage-friendly language, it makes any subject easy to understand."
          }
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient_text">Learning made simple and fun</h1>
        <p>Explore How It Works</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Simple Language"}
          text={
            "Complex concepts explained using everyday words and phrases that make sense to everyone."
          }
        />
        <Feature
          title={"Real Examples"}
          text={
            "Every explanation comes with relatable examples from daily life, technology, and pop culture."
          }
        />
        <Feature
          title={"Interactive Learning"}
          text={
            "Ask follow-up questions and dive deeper into topics at your own pace with personalized responses."
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
