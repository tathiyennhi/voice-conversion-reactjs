import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./style.css"; // Assuming you have a CSS file for styling

const AudioPlayer = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(URL.createObjectURL(file));
  };
  return (
    <div className="player-container">
      <div className="file-input-container">
        <div className="custom-file-label">
          Choose File
          <input
            type="file"
            accept=".wav"
            onChange={handleFileChange}
            className="custom-file-input"
          />
        </div>
      </div>
      {/* --- ở đây nè */}
      <div className="react-audio-player">
        {audioFile && <ReactAudioPlayer src={audioFile} controls />}
      </div>
    </div>
  );
};

export default AudioPlayer;
