import { ALIEN_NUMERAL_VALUES } from "../constants/values";
import { AlienNumeral, CalculationStepsProps } from "../types";
import { calculateSteps } from "../utils/converter";

export default function CalculationSteps({
  input,
  result,
}: CalculationStepsProps) {
  const formatExplanation = (steps: ReturnType<typeof calculateSteps>) => {
    const parts: string[] = [];
    let i = 0;

    while (i < steps.length) {
      const step = steps[i];

      if (step.next) {
        const symbol = `${step.current}${step.next}`;
        const valueMatch = step.calculation.match(/(\d+)\s*$/);
        const value = valueMatch ? valueMatch[1] : "?";
        parts.push(`${symbol} = ${value}`);
        i += 1;
      } else {
        let group = step.current;
        let groupValue = ALIEN_NUMERAL_VALUES[step.current as AlienNumeral];
        let j = i + 1;

        while (
          j < steps.length &&
          !steps[j].next &&
          steps[j].current === step.current
        ) {
          group += steps[j].current;
          groupValue += ALIEN_NUMERAL_VALUES[steps[j].current as AlienNumeral];
          j++;
        }

        if (group.length > 1) {
          parts.push(`${group} = ${groupValue}`);
        } else {
          parts.push(`${step.current} = ${groupValue}`);
        }

        i = j;
      }
    }

    if (parts.length === 1) {
      return parts[0] + ".";
    }

    const last = parts.pop();
    return parts.join(", ") + " and " + last + ".";
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black text-center">
        Result
      </h2>
      {result !== null ? (
        <div className="border-1 border-black rounded-lg p-4">
          <div className="mb-2 text-black">
            <span className="font-medium">Input: </span>
            <span className="font-mono">s = "{input}"</span>
          </div>
          <div className="mb-2 text-black">
            <span className="font-medium">Output: </span>
            <span>{result}</span>
          </div>
          <div className="text-black">
            <span className="font-medium">Explanation: </span>
            <span>{formatExplanation(calculateSteps(input))}</span>
          </div>
        </div>
      ) : (
        <div className="border-1 border-black rounded-lg p-6 text-center text-black">
          Enter an alien numeral and click Convert to see the result
        </div>
      )}
    </div>
  );
}
