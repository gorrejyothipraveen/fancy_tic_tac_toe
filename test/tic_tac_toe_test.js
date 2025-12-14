import {assertEquals} from '@std/assert';
import { areRowsEqual } from "../src/tic_tac_toe.js";

Deno.test('is any row equals :', () => {
  const board = [
    [' ', ' ', ' '], 
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  assertEquals(areRowsEqual(board), false)
})