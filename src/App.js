import React from "react";
import AudioPlayer from "./AudioPlayer/AudioPlayer"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Voice Conversion App</h1>
      <AudioPlayer />
      <br></br>
      <AudioPlayer />
      <button className="convertButton">Convert</button>
    </div>
  );
}

export default App;
