import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import { explainTopic } from "../../services/geminiService";

const ChatInterface = ({ onBack }) => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hi! I'm Easy Explainer. Ask me anything and I'll break it down into simple terms with real examples. What would you like to understand today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    // Add user message to chat
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Get AI response
      const aiResponse = await explainTopic(userMessage);
      setMessages((prev) => [...prev, { type: "ai", content: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "Sorry, I'm having trouble right now. Can you try asking again?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-interface">
      {/* Header */}
      <div className="chat-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h2>Easy Explainer</h2>
        <div></div> {/* For flexbox spacing */}
      </div>

      {/* Messages Container */}
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.type === "user" ? "user-message" : "ai-message"
            }`}
          >
            <div className="message-avatar">
              {message.type === "user" ? "👤" : "🤖"}
            </div>
            <div className="message-content">
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="message ai-message">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything... (e.g., How do black holes work?)"
            className="message-input"
            rows="1"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="send-button"
          >
            ↗️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
