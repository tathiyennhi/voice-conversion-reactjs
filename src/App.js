import React from "react";
import AudioPlayer from "./AudioPlayer/AudioPlayer"; 
import "./App.css";
import OutputPlayer from "./OutputPlayer/OutputPlayer";

function App() {
  return (
    <div className="App">
      <h1>Voice Conversion App</h1>
      <AudioPlayer />
      <br></br>
      <AudioPlayer />
      {/* <button className="convertButton">Convert</button> */}
      <OutputPlayer/>
    </div>
  );
}

export default App;
