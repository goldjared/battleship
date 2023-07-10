import { ship, gameBoard } from "./index.js";
const testShip = ship(2);

test("should return object with ship length, hits, and whether sunk/or not", () => {
  expect(testShip.getShip()).toEqual({
    length: 2,
    hits: 0,
    sunken: false,
  });
});
test("after hitting testShip twice, testShip.hit should be 2", () => {
  testShip.hit();
  testShip.hit();
  expect(testShip.getShip().hits).toBe(2);
});

test("isSunk is true after 2 ship hit on length 2 ship", () => {
  testShip.isSunk();
  expect(testShip.getShip().sunken).toBe(true);
});

let testBoard = gameBoard();
test("gameBoard func create 100 obj", () => {
  expect(testBoard.getBoard().length).toBe(100);
});

test("[0] in gameBoard should match template obj", () => {
  expect(testBoard.getBoard()[0]).toEqual({ data: [0, 0], ship: false });

  expect(testBoard.getBoard()[4]).toEqual({ data: [0, 4], ship: false });
});

test("placeShip will connect the ship objs to their coords", () => {
  //placeship at coords
  //check
  testBoard.placeShip([0, 0], [1, 0], [2, 0], [3, 0], [4, 0]);
  expect(testBoard.searchBoard([0, 0]).ship).not.toBe(false);
  expect(testBoard.searchBoard([1, 0]).ship).not.toBe(false);
  expect(testBoard.searchBoard([5, 0]).ship).toBe(false);
});

test("check if testboard[0] is working properply and still shows it has a ship", () => {
  expect(testBoard.getBoard()[0].ship.getShip()).not.toBe(false);
});

test("gameBoard method receiveAttack check if attack hits a ship", () => {
  expect(testBoard.receiveAttack([0, 0])).toBe(true);
});

test("gameBoard method receiveAttack check if attack NOT hit a ship", () => {
  expect(testBoard.receiveAttack([2, 4])).toBe(false);
});

test('receiveattack if hits a ship, should send a hit to said ship.', () => {
  testBoard.receiveAttack([0,0])
  expect(testBoard.searchBoard([0,0]).ship.getShip().hits).toBe(2);
})

test('receiveattack push a missed hit coord to array', () => {
  testBoard.receiveAttack([3,4])
  expect(testBoard.getMissedAttacks().length).toBe(2);
})

