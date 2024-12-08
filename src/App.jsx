// App.jsx
import React from "react";
import PlayersList from "./components/playersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <div className="player-list">
        <PlayersList />
      </div>
      <footer className="footer">
        © 2024 FIFA Player Cards. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
