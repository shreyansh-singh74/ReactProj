import React, { useState } from "react";
import Landing from "./components/landing/Landing";
import ChatInterface from "./components/chat/ChatInterface";
import "./App.css";
import "./index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");

  const goToChat = () => setCurrentPage("chat");
  const goToLanding = () => setCurrentPage("landing");

  return (
    <div className="App">
      {currentPage === "landing" ? (
        <Landing onContinue={goToChat} />
      ) : (
        <ChatInterface onBack={goToLanding} />
      )}
    </div>
  );
};

export default App;
