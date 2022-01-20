import gameActions from '../actions/gameActions';

const initializeState = {
    gameHistory: [],
    playerWins: 0,
    computerWins: 0,
    nameOfPlayer: 'PLAYER'
}

const gameReducer = (state = initializeState, action) => {
    switch (action.type) {
        case 'ADD_GAME_HISTORY':
            console.log(action.payload)
            return {
                ...state,
                gameHistory: [action.payload, ...state.gameHistory]
            }

        case 'PLAYER_WIN':
            return {
                ...state,
                playerWins: state.playerWins + 1
            }

        case 'COMPUTER_WIN':
            return {
                ...state,
                computerWins: state.computerWins + 1
            }

        case 'RESET':
            return {
                ...state,
                playerWins: 0,
                computerWins: 0
            }

        case 'CURRENT_PLAYER':
            return {
                ...state,
                nameOfPlayer: action.payload
            }

        default: {
            return state
        }
    }
}

export default gameReducer;
