import { resetScoreBoard } from '../actions/gameActions';
import { currentPlayer } from '../actions/gameActions';
import { useDispatch, useSelector } from 'react-redux';

import '../styling/game.css'

function Player({ getName, name }) {

    let playerName = '';
    let dispatch = useDispatch()

    function getPlayerName(event) {
        playerName = event.target.value;
        getName(playerName);
    }

    function newPlayer() {
        dispatch(resetScoreBoard());
        dispatch(currentPlayer(name))
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