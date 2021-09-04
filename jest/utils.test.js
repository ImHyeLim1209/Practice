import { test, expect, jest } from "@jest/globals";
import { getStudent, getPhoneNumber, isOne, drinkAll } from "./utils.js";

test("student ihl?", () => {
  expect(getStudent("ihl")).toEqual({ grade: 1, name: "ihl" });
});

test("Is it right PhoneNumber format?", () => {
  expect(getPhoneNumber()).toMatch(/^\d{3}-\d{3,4}-\d{4}$/);
});

test("배열에 대한 검증", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(arr).toContain(1);
  // expect(arr).not.toContain(1);
});

test("throw error?", () => {
  expect(() => isOne(2)).toThrow();
  expect(() => isOne(2)).toThrow("x is not One");
  expect(() => isOne(2)).toThrow(/One/);
});

describe("drinkAll() 함수에 대한 검증", () => {
  test("레몬맛을 먹었나요?", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("문어맛을 먹지 않았나요?", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
});
