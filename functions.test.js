import { lengthMethod } from "./functions";

describe("Given an array of undetermined length", () => {
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
