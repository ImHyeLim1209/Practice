const { test, expect } = require("@jest/globals");
const add = require("./add");

test("is it right?", () => {
  expect(add(2, 5)).toBe(7);
});
