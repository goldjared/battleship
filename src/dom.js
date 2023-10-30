import { doc } from "prettier";

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
    boardSpot.textContent = spot.data;
    boardContainer.append(boardSpot);
  });
  container.append(boardContainer);
}

function shipDragNDrop() {
  let shipLengthVal = 0;
  const playerBoard = document.getElementById("player");
  const shipMenuGUI = document.createElement("div");
  shipMenuGUI.classList.add("ship-menu");

  // square tracer code
  const square = document.createElement("div");
  square.classList.add("mouse-tracer");
  let gameBoardSquareHeight = playerBoard.firstChild.offsetHeight;
  let gameBoardSquareWidth = playerBoard.firstChild.offsetWidth;

  const ship5 = document.createElement("button");
  ship5.dataset.length = 5;
  ship5.textContent = "ship5";

  shipMenuGUI.append(ship5);
  container.append(shipMenuGUI);
  // listener on menu for what ship is clicked
  shipMenuGUI.addEventListener("click", (e) => {
    if (e.target.localName === "button") {
      console.log(e.target.textContent);
      e.target.disabled = true; //disable button after clicked
      playerBoard.classList.toggle("selected");
      shipLengthVal = e.target.dataset.length;
      shipHoverMouse(shipLengthVal);

      playerBoard.addEventListener("click", pBoardListener);
    }
  });

  function pBoardListener(e) {
    let baseCoord = e.target.dataset.coord.split(",").map(Number);
    let direction = "";
    if (gameBoardSquareHeight > gameBoardSquareWidth) {
      console.log("VERTICAL");
      direction = "vertical";
      console.log(shipLengthVal);
    } else {
      console.log("HORIZONTAL");
      direction = "horizontal";
    }
    calculateShipArr(direction, baseCoord);
  }

  function calculateShipArr(direction, baseCoord) {
    /*

    */
    //  console.log(baseCoord);
    const arrHolder = [];
    const coordLengthVal = Math.floor(shipLengthVal / 2);
    if (direction === "vertical") {
      for (
        let i = baseCoord[0] + coordLengthVal;
        i >= baseCoord[0] - coordLengthVal;
        i--
      ) {
        const tempCalculatedCoord = [i, baseCoord[1]];
        arrHolder.push(tempCalculatedCoord);
      }
    } else if (direction === "horizontal") {
      for (
        let j = baseCoord[1] + coordLengthVal;
        j >= baseCoord[1] - coordLengthVal;
        j--
      ) {
        const tempCalculatedCoord = [baseCoord[0], j];
        arrHolder.push(tempCalculatedCoord);
      }
    }
    console.log(arrHolder);
  }

  function shipHoverMouse(shipLength) {
    gameBoardSquareHeight *= shipLength;
    square.style.height = `${gameBoardSquareHeight}px`;
    square.style.width = `${gameBoardSquareWidth}px`;

    container.append(square);
    document.addEventListener("mousemove", (e) => {
      // e page value, subtracting the l or w of game cell / by 2,
      // in order to place hover at center mouse
      square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;
      square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;
      square.style.visibility = "visible";
    });
    // listen on document for right click, recalculate dimensions for rotation
    // (document since square has point-events style turned off)
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (gameBoardSquareHeight > gameBoardSquareWidth) {
        gameBoardSquareHeight /= shipLength;
        gameBoardSquareWidth *= shipLength;
      } else {
        gameBoardSquareHeight *= shipLength;
        gameBoardSquareWidth /= shipLength;
      }
      square.style.height = `${gameBoardSquareHeight}px`;
      square.style.width = `${gameBoardSquareWidth}px`;
      square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;
      square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;
    });

    // document.addEventListener("click", (e => {
    //   e.preventDefault();
    //   pBoardListener(e);

    // }))
  }
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

export { gameBoardDisplay, gameOverDisplay, attackDisplay, shipDragNDrop };
