export type AlienNumeral = "A" | "B" | "Z" | "L" | "C" | "D" | "R";

export interface CalculationStep {
  position: number;
  current: string;
  next: string | undefined;
  calculation: string;
  runningTotal: number;
}

export interface InputSectionProps {
  onResultChange: (result: number | null, input: string) => void;
}

export interface CalculationStepsProps {
  input: string;
  result: number | null;
} 