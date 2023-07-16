function gameBoardDisplay(board) {
  const container = document.createElement('div')
  container.classList.add('container')
  const body = document.querySelector('body')
  board.getBoard().forEach(spot => {
    const boardSpot = document.createElement('div')
    boardSpot.classList.add('game-square')
    boardSpot.dataset.coord = spot.data
    boardSpot.textContent = spot.data;
    container.append(boardSpot);
  })
  body.append(container);
}

export { gameBoardDisplay }