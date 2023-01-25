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

import { unshiftMethod } from "./functions";
describe("Given a function", () => {
  describe("When we have an array [1, 2]", () => {
    test("Then if item is 'a', it should return ['a', 1, 2].", () => {
      // Arrange
      const a = [1, 2];
      const b = "a";
      const expected = ["a", 1, 2];
      // Act
      const result = unshiftMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if array = [] and last item is 1, it should return [1].", () => {
      // Arrange
      const a = [];
      const b = 1;
      const expected = [1];
      // Act
      const result = unshiftMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

import { shiftMethod } from "./functions";
describe("Given a function", () => {
  describe("When we have an array", () => {
    test("Then if array = [1,2], it should return 1.", () => {
      // Arrange
      const a = [1, 2];

      const expected = 1;
      // Act
      const result = shiftMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if array = [] it should return undefined.", () => {
      // Arrange
      const a = [];
      const expected = undefined;
      // Act
      const result = shiftMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});
