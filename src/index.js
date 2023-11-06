import "./style.css";
import {
  gameBoardDisplay,
  gameOverDisplay,
  attackDisplay,
  placeShipOnBoard,
} from "./dom";
import shipDomPlacement from "./shipDomPlacement";

function ship(x) {
  const length = x;
  let sunken = false;
  let hits = 0;

  const getShip = () => ({
    length,
    sunken,
    hits,
  });

  const isSunk = () => {
    if (hits >= length) sunken = true;
  };

  const hit = () => {
    hits += 1;
    isSunk();
  };

  return { hit, isSunk, getShip };
}

function gameBoard() {
  const board = [];
  const boardShips = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.push({ data: [i, j], ship: false, marked: false });
    }
  }
  const getBoard = () => board;
  const searchBoard = (coord) => {
    const target = board.find(
      (position) =>
        position.data[0] === coord[0] && position.data[1] === coord[1]
    );
    return target;
  };

  function placeShip(arrayOfCoords) {
    const queue = [];
    const originalCoordLength = arrayOfCoords.length;
    while (arrayOfCoords.length > 0) {
      const currentCoord = arrayOfCoords.shift();
      const coordObj = searchBoard(currentCoord);
      if (coordObj.ship === false) {
        queue.push(coordObj);
      } else {
        return;
      }
    }
    if (queue.length === originalCoordLength) {
      const newShipObj = ship(originalCoordLength);
      boardShips.push(newShipObj);

      while (queue.length > 0) {
        const linkingToShip = queue.shift();
        linkingToShip.ship = newShipObj;
      }
    }
    placeShipOnBoard(player1Board);
  }

  function isBoardShipsSunk() {
    return boardShips.every((boardShip) => boardShip.getShip().sunken === true);
  }

  function receiveAttack(target) {
    const targetPosition = searchBoard(target);
    if (!targetPosition.marked) targetPosition.marked = true;
    if (targetPosition.ship !== false) {
      targetPosition.ship.hit();
      return true;
    }
    return false;
  }

  return {
    placeShip,
    getBoard,
    searchBoard,
    receiveAttack,
    isBoardShipsSunk,
  };
}

function player(name) {
  const playerObj = {
    name,
    score: 0,
    turn: false,
  };

  function attack(coord, enemyBoard) {
    return enemyBoard.receiveAttack(coord);
  }

  const getPlayer = () => playerObj;

  return { attack, getPlayer };
}
function generateMove(playerBoard) {
  let moveArray = [];
  while (moveArray.length < 2) {
    const randomNumber = Math.floor(Math.random() * 10);
    moveArray.push(randomNumber);
    if (moveArray.length > 1 && playerBoard.searchBoard(moveArray).marked) {
      console.log("HITHITHIT");
      moveArray = [];
      // note: there is inf loop here.
    }
  }

  return moveArray;
}

const player1Board = gameBoard();

function game() {
  function checkEndGame(board, playerName) {
    if (board.isBoardShipsSunk()) {
      // game();
      return gameOverDisplay(playerName);
    }
    return false;
  }

  const player1 = player("player");

  gameBoardDisplay(player1Board, "player");
  shipDomPlacement(player1Board);

  const cpu1 = player("cpu");
  const cpu1Board = gameBoard();

  // WIP, pre made CPU ships for now
  cpu1Board.placeShip([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
  cpu1Board.placeShip([
    [0, 8],
    [0, 9],
  ]);
  cpu1Board.placeShip([
    [4, 6],
    [4, 7],
    [4, 8],
    [4, 9],
  ]);
  cpu1Board.placeShip([
    [7, 1],
    [7, 2],
    [7, 3],
  ]);
  cpu1Board.placeShip([
    [7, 9],
    [8, 9],
    [9, 9],
  ]);
  gameBoardDisplay(cpu1Board, "cpu");

  const enemyBoardContainer = document.getElementById("cpu");
  enemyBoardContainer.addEventListener("click", (e) => {
    const shipMenuGUI = document.querySelector(".ship-menu");
    // make sure shipMenuGUI is gone before attacking can start.
    if (shipMenuGUI !== null) return;

    const clickedSpot = e.target.dataset.coord.split(",").map(Number);
    if (cpu1Board.searchBoard(clickedSpot).marked) {
      return;
    }
    const player1AttackBoolean = player1.attack(clickedSpot, cpu1Board);
    attackDisplay(e.target, player1AttackBoolean);
    checkEndGame(cpu1Board, "player1"); // think this goes here?

    const cpu1RandomMove = generateMove(player1Board);
    const cpu1AttackBoolean = cpu1.attack(cpu1RandomMove, player1Board);
    const playerBoardDom = document.getElementById("player");
    const cpu1AttackedSquareElement = playerBoardDom.querySelectorAll(
      `:scope > [data-coord="${cpu1RandomMove[0]},${cpu1RandomMove[1]}"]`
    );
    attackDisplay(cpu1AttackedSquareElement[0], cpu1AttackBoolean);

    checkEndGame(player1Board, "cpu");
  });
}

game();

export { ship, gameBoard, player, generateMove };
