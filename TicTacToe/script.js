const STARTED = 0
const ENDED = 1

const playerSpan = document.getElementById(('player'))
const gameTable = document.getElementById('game')

const game = {
    state: STARTED,
    turn:'X',
    move: 0
}

function endGame(winner){
    if (winner) {
        window.alert('Game Over | Winner = ' + winner)
    }
    else {
        window.alert('Game Over | Draw')
    }
   game.state = ENDED
}

function resetGame(){
    if(Math.random() > 0.5) game.turn = 'O'
    else game.turn = 'X'

    game.state = STARTED
    game.move =0

    Array.from(document.getElementsByTagName('td')).forEach(cell => {
        cell.textContent = ''
    })
}

function nexTurn(){
    if(game.state == ENDED) return

    game.move++
    if(game.turn == 'X') game.turn ='O'
    else game.turn = 'X'

    if(game.move == 9){
        endGame()
    }

    playerSpan.textContent = game.turn
}

function boxClicked(row, col){

    if (game.state == ENDED){
        return window.alert('Game Over | Restart to play again')
    }
    let clickedBox = gameTable.children[0].children[row-1].children[col -1]
    clickedBox.textContent = game.turn

    isDiagCaptured(row, col)
    isColCaptured(col)
    isRowCaptured(row)
    nexTurn()
}

function isSeqCapturd(arrayof3cells){
    let WinningCombo = game.turn + game.turn + game.turn

    if( arrayof3cells.map(i => i.textContent).join('') == WinningCombo){
       endGame(game.turn)
    }
}

function isRowCaptured(row){
    let tableRow = Array.from(gameTable.children[0].children[row-1].children)
    
    isSeqCapturd(tableRow)
}

function isColCaptured(col){
    let tableCol = [
        gameTable.children[0].children[0].children[col - 1],
        gameTable.children[0].children[1].children[col - 1],
        gameTable.children[0].children[2].children[col - 1]
    ]
  
    isSeqCapturd(tableCol)
}

function isDiagCaptured(row, col){
    if( row != col && (row + col) != 4) return

    let diag1 = [
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2]   
    ]

    let diag2 = [
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]   
    ]

    isSeqCapturd(diag1)
    isSeqCapturd(diag2)
}