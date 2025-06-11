import { useState } from "react";
import { InputSectionProps } from "../types";
import { convertAlienNumeral } from "../utils/converter";

export default function InputSection({ onResultChange }: InputSectionProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleConvert = () => {
    const output = convertAlienNumeral(input);
    if (output === null) {
      setError("Invalid alien numeral");
      onResultChange(null, input);
    } else {
      setError("");
      onResultChange(output, input);
    }
  };

  const handleClear = () => {
    setInput("");
    onResultChange(null, "");
    setError("");
  };

  return (
    <div className="border-t pt-4 sm:pt-6">
      <div className="relative">
        <input
          type="text"
          className="border w-full p-2 sm:p-3 mb-2 uppercase text-black text-center text-base sm:text-lg
                     rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                     transition-all duration-200"
          placeholder="Enter alien numeral (e.g., RCRZCAB)"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
        <button
          onClick={handleConvert}
          className="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base
                   hover:bg-blue-700 active:bg-blue-800 transform hover:scale-[1.02]
                   transition-all duration-200 shadow-sm"
        >
          Convert
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-200 text-gray-700 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base
                   hover:bg-gray-300 active:bg-gray-400 transform hover:scale-[1.02]
                   transition-all duration-200 shadow-sm"
        >
          Clear
        </button>
      </div>
      {error && (
        <p className="text-red-500 mt-2 sm:mt-3 text-center text-sm sm:text-base">
          {error}
        </p>
      )}
    </div>
  );
}
