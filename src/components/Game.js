import { useState, useEffect } from 'react';
import { addGameHistory } from '../actions/gameActions';
import { setPlayerWin } from '../actions/gameActions';
import { setComputerWin } from '../actions/gameActions';
import { useDispatch, useSelector } from 'react-redux';

import '../styling/game.css'

function Game({ name }) {
    //dipatch to activate gameActions
    let dispatch = useDispatch();

    //states for setting Players move and Computers move
    let [computerMove, setComputerMove] = useState();
    let [playerMove, setPlayerMove] = useState();

    //booleans to decide winner
    let playerIsAWinner = false;
    let tie = false;

    let winner = '';


    /*
    * MOVE OPTIONS
    * '0' - ROCK
    * '1' - SCISSORS
    * '2' - PAPER
    */
    let moveOptions = [0, 1, 2];


    // handle  click event for rock, scissors and paper button. Updates states for Players move and Computers move
    function handleClick(event) {
        setComputerMove(Math.floor(Math.random() * moveOptions.length));
        setPlayerMove(event.target.value);
    }

    // determines the winner of the game
    function determineWinner() {
        if (playerMove === 0 && computerMove === 1) {
            playerIsAWinner = true;
            winner = 'Player'

        } else if (playerMove === 1 && computerMove === 2) {
            playerIsAWinner = true;
            winner = 'Player'

        } else if (playerMove == 2 && computerMove === 0) {
            playerIsAWinner = true;
            winner = 'Player'

        } else if (computerMove === 0 && playerMove === 1) {
            playerIsAWinner = false;
            winner = 'Computer'

        } else if (computerMove === 1 && playerMove === 2) {
            playerIsAWinner = false;
            winner = 'Computer'

        } else if (computerMove == 2 && playerMove === 0) {
            playerIsAWinner = false;
            winner = 'Computer'

        } else if (playerMove === computerMove) {
            tie = true;
            winner = 'Both - None'

        }
    }

    function printResults() {
        console.log(" '0' - ROCK ");
        console.log("'1' - SCISSORS");
        console.log(" '2' - PAPER");
        if (playerIsAWinner) {
            console.log(`computer's move: ${computerMove}`);
            console.log(`player's move: ${playerMove}`);
            console.log('THE PLAYER WINS');
            winner = 'player'
            dispatch(setPlayerWin())
        } else if (tie) {
            console.log(`computer's move: ${computerMove}`);
            console.log(`player's move: ${playerMove}`);
            console.log('IT IS A DRAW')
            winner = 'both'
            dispatch(setComputerWin())
            dispatch(setPlayerWin())
        } else {
            console.log(`computer's move: ${computerMove}`);
            console.log(`player's move: ${playerMove}`);
            console.log('THE COMPUTER WINS');
            winner = 'computer'
            dispatch(setComputerWin())
        }

    }

    // function to generate new game history
    function generateGameHistory(playerName, playerMove, computerMove, winner, tie) {
        return {
            player: playerName,
            playerMove: playerMove,
            computerMove: computerMove,
            winner: winner,
            tie: tie,

        }
    }

    useEffect(() => {
        determineWinner();
        printResults();
        dispatch(addGameHistory(generateGameHistory(name, playerMove, computerMove, winner, tie)))

    }, [computerMove])



    return (
        <section>
            <button className='move-options' onClick={handleClick} value='0' >Rock</button>
            <button className='move-options' onClick={handleClick} value='1' >Scissors</button>
            <button className='move-options' onClick={handleClick} value='2' >Paper</button>
        </section>
    )
}

export default Game;