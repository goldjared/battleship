import { ship } from "./index.js";
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
