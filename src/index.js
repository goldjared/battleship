import "./style.css";
import { gameBoardDisplay } from "./dom";

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
  const missedAttackCoords = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.push({ data: [i, j], ship: false });
    }
  }
  const getMissedAttacks = () => missedAttackCoords;
  const getBoard = () => board;
  const searchBoard = (coord) => {
    const target = board.find(
      (position) =>
        position.data[0] === coord[0] && position.data[1] === coord[1]
    );
    return target;
  };

  function placeShip(...coords) {
    const queue = [];
    const originalCoordLength = coords.length;
    while (coords.length > 0) {
      const currentCoord = coords.shift();
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
  }

  function isBoardShipsSunk() {
    return boardShips.every((boardShip) => boardShip.getShip().sunken === true);
  }

  function receiveAttack(target) {
    const targetPosition = searchBoard(target);
    if (targetPosition.ship !== false) {
      targetPosition.ship.hit();
      return true;
    }
    missedAttackCoords.push(target);
    return false;
  }

  return {
    placeShip,
    getBoard,
    searchBoard,
    receiveAttack,
    getMissedAttacks,
    isBoardShipsSunk,
  };
}

function player() {
  return {
    name: "Player",
    score: 0,
    turn: null,
  };
}

function computer() {
  const computerObj = {
    name: "Computer",
    score: 0,
    turn: null,
  };

  function generateMove() {
    const moveArray = [];
    while (moveArray.length < 2) {
      const randomNumber = Math.floor(Math.random() * 10);
      moveArray.push(randomNumber);
    }
    return moveArray;
  }

  const getComputer = () => computerObj;
  return { getComputer, generateMove };
}

function game() {
  const player1 = player();
  const player1Board = gameBoard();
  player1Board.placeShip([0, 0], [1, 0], [2, 0], [3, 0], [4, 0]);
  player1Board.placeShip([0, 8], [0, 9]);
  player1Board.placeShip([4, 6], [4, 7], [4, 8], [4, 9]);
  player1Board.placeShip([7, 3]);
  player1Board.placeShip([7, 9], [8, 9], [9, 9]);
  gameBoardDisplay(player1Board);

  const cpu1 = computer();
  const cpu1Board = gameBoard();
  cpu1Board.placeShip([0, 0], [1, 0], [2, 0], [3, 0], [4, 0]);
  cpu1Board.placeShip([0, 8], [0, 9]);
  cpu1Board.placeShip([4, 6], [4, 7], [4, 8], [4, 9]);
  cpu1Board.placeShip([7, 3]);
  cpu1Board.placeShip([7, 9], [8, 9], [9, 9]);
}

game();
export { ship, gameBoard, player, computer, game };
