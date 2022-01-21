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




    //

    return (

        <div className='row-parent'>
            <p className='item' >  Name of player: {player.toUpperCase()}  </p>
            <p className='item' >  Player´s move: {correctMove(playerMove)}  </p>
            <p className='item' > Computer´s move: {correctMove(computerMove)} </p>
            <p className='item' > Winner: {winner.toUpperCase()}  </p>
        </div>
    )
}

export default GameRow;