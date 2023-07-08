function gameBoard() {
  const board = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.push({ data: [i, j], ship: false });
    }
  }

  const getShip = () => board;

  const placeShip = (coord, direction, size) => {
    const target = board.find(
      (position) =>
        position.data[0] === coord[0] && position.data[1] === coord[1]
    );
  };

  return { placeShip, getShip };
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
