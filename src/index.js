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

export { ship };
