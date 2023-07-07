import { ship } from "./index.js";
const testShip = ship(2);

test("should return object with ship length, hits, and whether sunk/or not", () => {
  expect(testShip.getShip()).toEqual({
    length: 2,
    hits: 0,
    sunken: false
  });
});
 test('hit will hit for value of 1', () => {
  expect(testShip.hit()).toBe(1);
})

test('isSunk is false after no ship hit on length 2 ship', () => {
  expect(testShip.isSunk()).toBe(false)
})
