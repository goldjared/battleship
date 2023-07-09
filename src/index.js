function gameBoard() {
  const board = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.push({ data: [i, j], ship: false });
    }
  }

  const getBoard = () => board;

  function placeShip (...coords) {
    const queue = [];
    const originalCoordLength = coords.length;
    while(coords.length > 0) {
    const currentCoord = coords.shift();
    const coordObj = board.find(
      (position) =>
        position.data[0] === currentCoord[0] && position.data[1] === currentCoord[1]
    );
    if(coordObj.ship === false) {
      queue.push(coordObj)
    } else {
      return;
    }

  };
  if(queue.length === originalCoordLength) {
    const newShipObj = ship(originalCoordLength)
    while(queue.length > 0) {
      const linkingToShip = queue.shift();
      linkingToShip.ship = newShipObj;
    }
  }
}

  return { placeShip, getBoard };
}

function ship(x) {
  const length = x;
  let sunken = false;
  let hits = 0;

  const getShip = () => ({
    length,
    sunken,
    hits,
  });

  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    if (hits >= length) sunken = true;
  };
  return { hit, isSunk, getShip };
}

export { ship, gameBoard };
