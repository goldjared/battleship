function gameBoardDisplay(board, playerOrCpu) {
  const container = document.querySelector('.container')
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  boardContainer.id = playerOrCpu;
  board.getBoard().forEach((spot) => {
    const boardSpot = document.createElement("div");
    boardSpot.classList.add("game-square");
    boardSpot.dataset.coord = spot.data;

    if(spot.ship !== false && playerOrCpu === 'player') {
      boardSpot.id = 'ship'
    }
    boardSpot.textContent = spot.data;
    boardContainer.append(boardSpot);
  });
  container.append(boardContainer)
}

export { gameBoardDisplay };
