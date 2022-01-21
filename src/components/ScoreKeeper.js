import { useSelector } from 'react-redux';

import '../styling/score-keeper.css';

function ScoreKeeper() {
    // collect data from redux store
    let player = useSelector((state) => { return state.playerWins });
    let computer = useSelector((state) => { return state.computerWins });
    let nameOfPlayer = useSelector((state) => { return state.nameOfPlayer });


    // body of score keeper component
    return (
        <section className='score-keeper-field'>'
            <h1 className='score-title'>Score Keeper</h1>
            <div>
                <span className='score'> <p>{nameOfPlayer.toUpperCase()}: {player} </p> </span>
                <span className='score'> <p> - </p> </span>
                <span className='score' ><p> COMPUTER: {computer}</p></span>
            </div>


        </section>
    )
}

export default ScoreKeeper;