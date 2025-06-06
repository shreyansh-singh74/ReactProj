import React, { useState } from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { explainTopic } from "../../services/geminiService";

const Header = () => {
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const result = await explainTopic(question);
      setExplanation(result);
    } catch (error) {
      setExplanation(
        "Sorry, I couldn't explain that right now. Please try again!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleExplain();
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient_text">
          Easy Explainer - Understanding Made Simple
        </h1>
        <p>
          Ask me anything and I'll explain it like you're 15! From quantum
          physics to social media algorithms, I break down complex topics into
          simple, relatable explanations with real-world examples.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="text"
            placeholder="Ask me anything... (e.g., How does WiFi work?)"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="button" onClick={handleExplain} disabled={isLoading}>
            {isLoading ? "Thinking..." : "Explain It!"}
          </button>
        </div>
        {explanation && (
          <div className="explanation-result">
            <h3>Here's your explanation:</h3>
            <p>{explanation}</p>
          </div>
        )}
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Over 2,500 topics explained simply this month</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
