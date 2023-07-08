function gameBoard() {
  const board = [];
  const build = () => {
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
      board.push({data: [i, j],
      ship: false})
    }
  }
  return board;
  }
return { build }
}

function placeShip(board) {

}

function ship(x) {
  const length = x;
  let sunken = false;
  let hits = 0;

  const getShip = () => ({
      length,
      sunken,
      hits
    })

  const hit = () => {
    hits += 1;
  }

  const isSunk = () => {
    if(hits >= length) sunken = true;
  }
  return { hit, isSunk, getShip }
}

export { ship, gameBoard };
