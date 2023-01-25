import { lengthMethod } from "./functions";

describe.skip("Given an array of undetermined length", () => {
  describe("When we have an array", () => {
    test("Then if length is 4, it should return 4.", () => {
      // Arrange
      const a = [1, null, "hola", 0];
      const expected = 4;
      // Act
      const result = lengthMethod(a);
      // Asert
      expect(result).toBe(expected);
    });
  });
});

import { popMethod } from "./functions";
describe("Given a function", () => {
  describe("When we have an array", () => {
    test("Then if last item is 1, it should return 1.", () => {
      // Arrange
      const a = [1, null, "hola", 1];
      const expected = 1;
      // Act
      const result = popMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if last item is 1, it should return 1.", () => {
      // Arrange
      const a = [];
      const expected = undefined;
      // Act
      const result = popMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});
