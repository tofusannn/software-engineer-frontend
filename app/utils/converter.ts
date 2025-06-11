import { AlienNumeral } from "../types";
import { ALIEN_NUMERAL_VALUES, SUBTRACTABLE_PAIRS } from "../constants/values";

export function convertAlienNumeral(input: string): number | null {
  let total = 0;
  let i = 0;

  while (i < input.length) {
    const current = input[i] as AlienNumeral;
    const next = input[i + 1] as AlienNumeral;

    const currentValue = ALIEN_NUMERAL_VALUES[current];
    const nextValue = next ? ALIEN_NUMERAL_VALUES[next] : undefined;

    if (currentValue === undefined || (next && nextValue === undefined)) {
      return null;
    }

    if (
      next &&
      nextValue !== undefined &&
      currentValue < nextValue &&
      SUBTRACTABLE_PAIRS[current]?.includes(next)
    ) {
      total += nextValue - currentValue;
      i += 2;
    } else {
      total += currentValue;
      i += 1;
    }
  }

  return total;
}



