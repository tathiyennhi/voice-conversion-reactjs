import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./style.css"; // Assuming you have a CSS file for styling

const OutputPlayer = ({ audioFile }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleConvert = () => {
    // Perform conversion logic
    // For now, let's just set a dummy audio file
    setShowPlayer(true);
  };

  return (
    <div className="output-player-container">
      <div className="convert-button-container">
        <button className="convertButton" onClick={handleConvert} >Convert</button>
      </div>
      {showPlayer && (
        <div className="audio-player-container">
          <ReactAudioPlayer src={audioFile} controls />
        </div>
      )}
    </div>
  );
};

export default OutputPlayer;
