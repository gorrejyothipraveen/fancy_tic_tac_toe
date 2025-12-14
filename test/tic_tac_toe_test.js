import { assertEquals } from "@std/assert";
import { areColEquals, areDiagonalEqualsFromLToR, areDiagonalEqualsFromRToL, areRowsEqual } from "../src/tic_tac_toe.js";

Deno.test("is any row equals :", () => {
  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  assertEquals(areRowsEqual(board), false);
});

Deno.test("first row is equal :", () => {
  const board = [
    ["O", "O", "O"],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  assertEquals(areRowsEqual(board), true);
});

Deno.test("second row is equal:", () => {
  const board = [
    [" ", " ", " "],
    ["O", "O", "O"],
    [" ", " ", " "],
  ];
  assertEquals(areRowsEqual(board), true);
});

Deno.test("no rows are equal:", () => {
  const board = [
    [" ", " ", " "],
    ["O", "X", "O"],
    [" ", " ", " "],
  ];
  assertEquals(areRowsEqual(board), false);
});

Deno.test("1st column elements are equal:", () => {
  const board = [
    ["O", " ", " "],
    ["O", "X", "O"],
    ["O", " ", " "],
  ];
  assertEquals(areColEquals(board), true);
});

Deno.test("2st column elements are equal:", () => {
  const board = [
    ["O", "X", " "],
    ["O", "X", "O"],
    ["X", "X", " "],
  ];
  assertEquals(areColEquals(board), true);
});

Deno.test("diagonal elements are not equal: from L to R", () => {
  const board = [
    ["X", "X", " "],
    ["O", " ", "O"],
    ["X", "X", "X"],
  ];
  assertEquals(areDiagonalEqualsFromLToR(board), false);
});

Deno.test("diagonal elements are not equal: from L to R", () => {
  const board = [
    ["X", "X", " "],
    ["O", " ", "O"],
    ["X", "X", "X"],
  ];
  assertEquals(areDiagonalEqualsFromLToR(board), false);
});

Deno.test("diagonal elements are not equal: from L to R", () => {
  const board = [
    ["O", "X", " "],
    ["O", "O", "O"],
    ["X", "X", "X"],
  ];
  assertEquals(areDiagonalEqualsFromLToR(board), false);
});

Deno.test("diagonal elements are equal: from L to R", () => {
  const board = [
    ["O", "X", " "],
    ["O", "O", "O"],
    ["X", "X", "O"],
  ];
  assertEquals(areDiagonalEqualsFromLToR(board), true);
});

Deno.test("diagonal elements are not equal: from R to L", () => {
  const board = [
    ["O", "X", " "],
    ["O", "O", "O"],
    ["X", "X", "O"],
  ];
  assertEquals(areDiagonalEqualsFromRToL(board), false);
});

Deno.test("diagonal elements are not equal: from R to L", () => {
  const board = [
    ["O", "X", "O"],
    ["O", "O", "O"],
    ["O", "X", "O"],
  ];
  assertEquals(areDiagonalEqualsFromRToL(board), true);
});
