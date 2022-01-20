export const addGameHistory = (gameResult) => {
    return {
        type: 'ADD_GAME_HISTORY',
        payload: gameResult
    }
}

export const setPlayerWin = (win) => {
    return {
        type: 'PLAYER_WIN',
        payload: win
    }
}

export const setComputerWin = (win) => {
    return {
        type: 'COMPUTER_WIN',
        payload: win
    }
}

export const resetScoreBoard = (reset) => {
    return {
        type: 'RESET',
        payload: reset
    }
}

export const currentPlayer = (name) => {
    return {
        type: 'CURRENT_PLAYER',
        payload: name
    }
}
