import React from "react";
import "./features.css";
import { Feature } from "../../components";

const Features = () => {
  const featuresData = [
    {
      title: "Smart Analogies",
      text: "Every complex topic gets compared to something familiar - like explaining DNA as a recipe book or WiFi as invisible mail delivery.",
    },
    {
      title: "Teen-Friendly Language",
      text: "No confusing jargon or academic words. Just clear, simple explanations that make sense the first time you read them.",
    },
    {
      title: "Real-World Examples",
      text: "Learn about gravity through skydiving, understand economics through video game markets, and grasp physics through sports.",
    },
    {
      title: "Instant Understanding",
      text: "Get explanations in seconds, not hours. Ask about anything from quantum physics to social media algorithms and understand immediately.",
    },
  ];

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient_text">
          Making Complex Simple is Our Superpower. Every Topic Becomes Crystal
          Clear in Minutes
        </h1>
        <p>Discover What Makes Easy Explainer Special</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
