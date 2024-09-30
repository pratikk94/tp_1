import React, { useState } from "react";
import './App.css';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [response, setResponse] = useState(null);

  const handleProposalClick = () => {
    setShowSurprise(true);
  };

  const handleYesClick = () => {
    setResponse("yes");
  };

  const handleNoClick = () => {
    setResponse("no");
  };

  return (
    <div className="App">
      {!showSurprise && !response && (
        <div className="container">
          <h1>Hey Love,</h1>
          <p>
            From the moment I met you, my world became brighter. Every day with
            you is a blessing, and I can’t imagine my life without you. Will you
            spend 2nd Oct with me ?
          </p>
          <button onClick={handleProposalClick}>Click for a surprise</button>
        </div>
      )}

      {showSurprise && !response && (
        <div className="surprise">
          <h2>You complete me ❤️</h2>
          <h3>Date pe chaloge?</h3>
          <button onClick={handleYesClick}>YES!</button>
          <button onClick={handleNoClick}>Maybe later?</button>
        </div>
      )}

      {response === "yes" && (
        <div className="response">
          <h2>She said YES! 💍🎉</h2>
          <div className="image-placeholder">
            <img
              src="../yes.jpg"
              alt="Placeholder for your engagement image"
            />
          </div>
        </div>
      )}

      {response === "no" && (
        <div className="response">
          <h2>That’s okay, love is patient ❤️</h2>
          <div className="image-placeholder">
            <video
              src="../no.mp4"
              alt="Placeholder for patient love image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
