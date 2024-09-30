import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [response, setResponse] = useState(null);

  const handleProposalClick = () => {
    setShowSurprise(true);
  };

  const handleYesClick = () => {
    setResponse("She said YES! 💍🎉");
  };

  const handleNoClick = () => {
    setResponse("That’s okay, love is patient ❤️");
  };

  return (
    <div className="App">
      {!showSurprise && !response && (
        <div className="container">
          <h1>Hey Love,</h1>
          <p>
            From the moment I met you, my world became brighter. Every day with
            you is a blessing, and I can’t imagine my life without you. Will you
            spend 2nd October with me?
          </p>
          <button onClick={handleProposalClick}>Click for a surprise</button>
        </div>
      )}

      {showSurprise && !response && (
        <div className="surprise">
          <h2>You complete me ❤️</h2>
          <h3>Date pe chalo?</h3>
          <button onClick={handleYesClick}>YES!</button>
          <button onClick={handleNoClick}>Maybe later?</button>
        </div>
      )}

      {response && (
        <div className="response">
          <h2>{response}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
