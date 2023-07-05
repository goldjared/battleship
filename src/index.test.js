import { ship } from "./index.js";

test("should return object with ship length, hits, and whether sunk/or not", () => {
  expect(ship()).toEqual({
    length: 0,
    hits: 0,
    sunken: false
  });
});
