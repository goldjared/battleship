function gameBoardDisplay(board) {
  const container = document.querySelector('.container')
  board.getBoard().forEach(spot => {
    const boardSpot = document.createElement('div')
    boardSpot.textContent = spot.data;
    container.append(boardSpot);
  })
}

export { gameBoardDisplay }