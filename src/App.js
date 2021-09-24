 import React, {useState} from "react";
 import './Styles/App.scss';
 import Song from "./Components/Songs";
 import Player from './Components/Player';
 import data from './util.js';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
