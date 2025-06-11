"use client";
import { useState } from "react";
import InputSection from "./components/InputSection";
import AlienNumeralValues from "./components/AlienNumeralValues";
import CalculationSteps from "./components/CalculationSteps";

export default function Home() {
  const [result, setResult] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const handleResultChange = (newResult: number | null, newInput: string) => {
    setResult(newResult);
    setInput(newInput);
  };

  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full bg-white p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-black">
          Alien Numeral Converter
        </h1>
        <div className="max-w-2xl mx-auto mb-8">
          <InputSection onResultChange={handleResultChange} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-5">
            <AlienNumeralValues />
          </div>
          <div className="lg:col-span-7">
            <CalculationSteps input={input} result={result} />
          </div>
        </div>
      </div>
    </main>
  );
}
