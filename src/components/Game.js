import { useState, useEffect } from 'react';
import { addGameHistory } from '../actions/gameActions';
import { setPlayerWin } from '../actions/gameActions';
import { setComputerWin } from '../actions/gameActions';
import { useDispatch } from 'react-redux';

import '../styling/game.css'

function Game({ name }) {
    //dipatch to activate gameActions
    let dispatch = useDispatch();

    //states for setting Players move and Computers move
    let [computerMove, setComputerMove] = useState();
    let [playerMove, setPlayerMove] = useState();

    console.log('type of: ' + typeof (playerMove))

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




    // handle  click event for rock, scissors and paper button. Updates states for Players move and Computers move
    function handleMove(event) {
        setComputerMove(Math.floor(Math.random() * 3));
        // setComputerMove(Math.floor(Math.random() * moveOptions.length));
        setPlayerMove(parseInt(event.target.value));


    }

    // determines the winner of the game
    function determineWinner() {
        if (playerMove === 0 && computerMove === 1) {
            playerIsAWinner = true;
            winner = 'Player'
            dispatch(setPlayerWin())

        } else if (playerMove === 1 && computerMove === 2) {
            playerIsAWinner = true;
            winner = 'Player'
            dispatch(setPlayerWin())

        } else if (playerMove === 2 && computerMove === 0) {
            playerIsAWinner = true;
            winner = 'Player'
            dispatch(setPlayerWin())

        } else if (computerMove === 0 && playerMove === 1) {
            playerIsAWinner = false;
            winner = 'Computer'
            dispatch(setComputerWin())

        } else if (computerMove === 1 && playerMove === 2) {
            playerIsAWinner = false;
            winner = 'Computer'
            dispatch(setComputerWin())

        } else if (computerMove === 2 && playerMove === 0) {
            playerIsAWinner = false;
            winner = 'Computer'
            dispatch(setComputerWin())

        } else if (playerMove === computerMove) {
            tie = true;
            winner = 'Both - None'
            dispatch(setPlayerWin())
            dispatch(setComputerWin())

        }
    }



    // function to generate new game history
    function generateGameHistory(nameUser, playerMove, computerMove, winner, tie) {
        return {
            player: nameUser,
            playerMove: playerMove,
            computerMove: computerMove,
            winner: winner,
            tie: tie,

        }
    }

    useEffect(() => {
        determineWinner();
        //printResults();
        console.log(winner)
        dispatch(addGameHistory(generateGameHistory(name, playerMove, computerMove, winner, tie)))

    }, [handleMove])


    // body of Game component
    return (
        <section>
            <button className='move-options' onClick={handleMove} value='0' >Rock</button>
            <button className='move-options' onClick={handleMove} value='1' >Scissors</button>
            <button className='move-options' onClick={handleMove} value='2' >Paper</button>
        </section>
    )
}

export default Game;