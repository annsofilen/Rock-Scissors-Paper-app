import Game from "./Game"
import { useSelector } from 'react-redux';

import '../styling/game-statistics.css';



function GameStatistics() {
    let history = useSelector((state) => { return state.gameHistory })
    let player = useSelector((state) => { return state.playerWins });
    let computer = useSelector((state) => { return state.computerWins });
    let nameOfPlayer = useSelector((state) => { return state.nameOfPlayer });

    // count the number each move has been set for the player
    function moveStatistics() {
        let rockCount = 0;
        let paperCount = 0;
        let scissorsCount = 0;
        for (let game of history) {
            if (game.playerMove === 0) {
                rockCount += 1;
            } else if (game.playerMove === 1) {
                scissorsCount += 1;
            } else if (game.playerMove === 2) {
                paperCount += 1;
            }
        }
        return [rockCount, scissorsCount, paperCount];
    }

    // count the number each move has been set for the computer
    function moveStatistiComputer() {
        let rockCount = 0;
        let paperCount = 0;
        let scissorsCount = 0;
        for (let game of history) {
            if (game.computerMove === 0) {
                rockCount += 1;
            } else if (game.computerMove === 1) {
                scissorsCount += 1;
            } else if (game.computerMove === 2) {
                paperCount += 1;
            }
        }
        return [rockCount, scissorsCount, paperCount];
    }




    return (
        <div className="stat-parent">
            <h2>Game Statistics</h2>
            <div className="position-parent">

                <div className="all-user">
                    <h3>User´s Wins</h3>
                    <span className='score'> <p>{nameOfPlayer.toUpperCase()}:  {Math.round(player / (player + computer + 0.000001) * 100)}% </p> </span>

                    <div>
                        <h3>User´s Moves</h3>
                        <h4>Rock</h4>
                        <p>{
                            Math.round(moveStatistics()[0] / (player + computer + 0.000001) * 100)
                        } %</p>

                        <h4>Scissors</h4>
                        <p>{
                            Math.round(moveStatistics()[1] / (player + computer + 0.000001) * 100)
                        } %</p>

                        <h4>Paper</h4>
                        <p>{
                            Math.round(moveStatistics()[2] / (player + computer + 0.000001) * 100)
                        } %</p>

                    </div>
                </div>


                <div className="all-computer">
                    <h3>Computer´s  Wins</h3>
                    <span className='score' ><p> COMPUTER:   {Math.round(computer / (player + computer + 0.000001) * 100)}% </p></span>

                    <div>
                        <h3>Computer´s  Moves</h3>
                        <h4>Rock</h4>
                        <p> {Math.round(moveStatistiComputer()[0] / (player + computer + 0.000001) * 100)} %</p>

                        <h4>Scissors</h4>
                        <p> {Math.round(moveStatistiComputer()[1] / (player + computer + 0.000001) * 100)} %</p>

                        <h4>Paper</h4>
                        <p> {Math.round(moveStatistiComputer()[2] / (player + computer + 0.000001) * 100)} %</p>

                    </div>

                </div>


            </div>




        </div>
    )
}

export default GameStatistics;