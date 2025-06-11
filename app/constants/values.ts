import { AlienNumeral } from "../types";

export const ALIEN_NUMERAL_VALUES: Record<AlienNumeral, number> = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
} as const;

export const SUBTRACTABLE_PAIRS: Record<string, string[]> = {
  A: ['B', 'Z'],
  Z: ['L', 'C'],
  C: ['D', 'R'],
} as const;