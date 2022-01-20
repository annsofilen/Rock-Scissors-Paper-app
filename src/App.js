import './styling/game.css'

import { useState } from "react";

import Player from "./components/Player";
import Game from "./components/Game";
import GameHistory from "./components/GameHistory";
import ScoreKeeper from "./components/ScoreKeeper";
import NavBar from "./components/NavBar";
import Rules from './components/Rules';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  let [name, setName] = useState('Stranger');
  function getPlayerName(name) {
    setName(name);
    console.log('NAME: ' + name)
  }
  return (
    <div className="App">
      <h1 className='app-title'>Rock Papper Scissors</h1>
      <div className='app-parent'>
        <div className='left'><NavBar /> </div>
        <div className='right'>
          <div className="game-field">
            <Player getName={getPlayerName} name={name} />
            <ScoreKeeper />
            <Game name={name} />

          </div>

          <div className='routes-field'>

            <Routes>
              <Route path='/history' element={<GameHistory />} />
              <Route path='/rules' element={<Rules />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
