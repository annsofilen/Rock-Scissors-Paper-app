import { resetScoreBoard } from '../actions/gameActions';
import { useDispatch } from 'react-redux';

import '../styling/game.css'

function Player({ getName, name }) {


    // dispatcher to activate gameActions
    let dispatch = useDispatch()

    let playerName = '';


    // function to get name information from the Player.js text input to App.js
    function getPlayerName(event) {
        playerName = event.target.value;
        //etName(playerName);

    }

    // set the name of a new player, reset the current score board
    function newPlayer() {
        dispatch(resetScoreBoard());
        getName(playerName);
    }


    return (
        <section>
            <h2 className='greeting'>Hello there, {name}!</h2>
            <input className='set-name' type='text' placeholder='your name' onKeyUp={getPlayerName}></input>
            <button className='set-name-button' onClick={newPlayer}>NEW PLAYER</button>
        </section>

    )

}

export default Player;