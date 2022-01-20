import '../styling/history.css'

function GameRow({ id, player, winner, playerMove, computerMove }) {

    function correctMove(move) {
        if (move === 0) {
            return 'ROCK';
        } else if (move === 1) {
            return 'SCISSORS'
        } else if (move === 2) {
            return 'PAPER'
        }
    }

    function correctPlayerMove(move) {
        if (move === 0) {
            return 'ROCK';
        } else if (move === 1) {
            return 'SCISSORS'
        } else if (move === 2) {
            return 'PAPER'
        }
    }

    //<p className='item' > | Player´s move: {correctPlayerMove(playerMove)} | </p>
    //<p className='item' > |Computer´s move: {correctMove(computerMove)} |</p>

    return (

        <div className='row-parent'>

            <p className='item' > | Name of player: {player}  | </p>

            <p className='item' > |Winner: {winner} | </p>
        </div>
    )
}

export default GameRow;