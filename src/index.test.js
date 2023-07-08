import { ship, gameBoard } from "./index.js";
const testShip = ship(2);

test("should return object with ship length, hits, and whether sunk/or not", () => {
  expect(testShip.getShip()).toEqual({
    length: 2,
    hits: 0,
    sunken: false
  });
});
 test('after hitting testShip twice, testShip.hit should be 2', () => {
  testShip.hit()
  testShip.hit()
  expect(testShip.getShip().hits).toBe(2);
})

test('isSunk is true after 2 ship hit on length 2 ship', () => {
  testShip.isSunk();
  expect(testShip.getShip().sunken).toBe(true)
})

let testBoard = gameBoard().build();
test('gameBoard func create 100 obj', () => {
  expect(testBoard.length).toBe(100);
})

test('[0] in gameBoard should match template obj', () => {
  expect(testBoard[0]).toEqual({data: [0,0], ship: false});

  expect(testBoard[4]).toEqual({data: [0,4], ship: false});
})

test('gameBoard func should place ship length 2 at [0,0] and 2nd half at [0,1] or [1,0] ', () => {
  expect(testBoard[0].ship).toBe(true);
})
