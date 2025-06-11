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

export function calculateSteps(input: string): Array<{
  position: number;
  current: string;
  next: string | undefined;
  calculation: string;
  runningTotal: number;
}> {
  const steps = [];
  let total = 0;
  let i = 0;

  while (i < input.length) {
    const current = input[i] as AlienNumeral;
    const next = input[i + 1] as AlienNumeral;

    const currentValue = ALIEN_NUMERAL_VALUES[current];
    const nextValue = next ? ALIEN_NUMERAL_VALUES[next] : undefined;

    if (currentValue === undefined) break;
    if (next && nextValue === undefined) break;

    let calculation = '';
    let value = 0;

    if (nextValue && currentValue < nextValue) {
      calculation = `${nextValue} - ${currentValue} = ${nextValue - currentValue}`;
      value = nextValue - currentValue;
      steps.push({
        position: i,
        current,
        next,
        calculation,
        runningTotal: total + value,
      });
      total += value;
      i += 2;
    } else {
      calculation = `${currentValue}`;
      value = currentValue;
      steps.push({
        position: i,
        current,
        next: undefined,
        calculation,
        runningTotal: total + value,
      });
      total += value;
      i += 1;
    }
  }

  return steps;
}
