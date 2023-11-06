const container = document.querySelector(".container");

function gameBoardDisplay(board, playerOrCpu) {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  boardContainer.id = playerOrCpu;
  board.getBoard().forEach((spot) => {
    const boardSpot = document.createElement("div");
    boardSpot.classList.add("game-square");
    boardSpot.dataset.coord = spot.data;

    if (spot.ship !== false && playerOrCpu === "player") {
      boardSpot.id = "ship";
    }
    // numerical values on board display for debug
    // // boardSpot.textContent = spot.data;
    boardContainer.append(boardSpot);
  });
  container.append(boardContainer);
}

function placeShipOnBoard(board) {
  board.getBoard().forEach((spot) => {
    if (spot.ship !== false) {
      const shipCoordElement = document.querySelector(
        `[data-coord='${spot.data[0]},${spot.data[1]}']`
      );
      shipCoordElement.id = "ship";
    }
  });
}

function gameOverDisplay(winner) {
  const displayWinner = document.createElement("div");
  displayWinner.id = "winner";
  displayWinner.textContent = `${winner} won! Game over.`;

  container.append(displayWinner);
}

function attackDisplay(targetHtmlElement, attackBoolean) {
  const boardSquareElement = targetHtmlElement;

  if (attackBoolean) {
    // square bg color on hit
    boardSquareElement.style.backgroundColor = "rgb(255, 0, 43)";
  } else {
    // square bg color on miss
    boardSquareElement.style.backgroundColor = "rgb(146, 136, 136)";
  }
}

export { gameBoardDisplay, gameOverDisplay, attackDisplay, placeShipOnBoard };
