import { useSelector } from 'react-redux';

import GameRow from '../components/GameRow';

import '../styling/history.css'

function GameHistory() {

    // get gameHistory information from the redux store
    let history = useSelector((state) => { return state.gameHistory })
    history.unshift();

    // add an ID to all played games, to be used for looping out the game history of the redux store
    for (let i = 0; i < history.length; i++) {
        history[i].id = i;
    }

    return (
        <section className='game-history-field'>
            <h1 className='hist-title'>Game History</h1>

            {
                history.map((oneGame) => {
                    return <GameRow key={oneGame.id} id={oneGame.id} player={oneGame.player} winner={oneGame.winner} computerMove={oneGame.computerMove} playerMove={oneGame.playerMove} />
                })
            }

        </section>
    )
}

export default GameHistory;