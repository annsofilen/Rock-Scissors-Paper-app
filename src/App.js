import './styling/game.css'

import { useState } from "react";
import { currentPlayer } from './actions/gameActions';
import { useDispatch } from 'react-redux';

import Player from "./components/Player";
import Game from "./components/Game";
import GameHistory from "./components/GameHistory";
import ScoreKeeper from "./components/ScoreKeeper";
import NavBar from "./components/NavBar";
import Rules from './components/Rules';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  let dispatch = useDispatch();
  // state of player name
  let [name, setName] = useState('Stranger');

  // get the player´s name from the Player.js component, add the current player name to the redux store
  function getPlayerName(name) {
    setName(name);
    dispatch(currentPlayer(name))
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
