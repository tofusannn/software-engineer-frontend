import { ALIEN_NUMERAL_VALUES } from "../constants/values";

export default function AlienNumeralValues() {
  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black text-center">
        Alien Numeral Values
      </h2>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse min-w-[300px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="border p-2 sm:p-3 text-center text-black rounded-tl-lg">
                Alien Numeral
              </th>
              <th className="border p-2 sm:p-3 text-center text-black rounded-tr-lg">
                Decimal Value
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(ALIEN_NUMERAL_VALUES).map(([numeral, value], index, array) => (
              <tr key={numeral} className="hover:bg-gray-50">
                <td className={`border p-2 sm:p-3 font-mono text-black text-center text-base sm:text-lg ${index === array.length - 1 ? 'rounded-bl-lg' : ''}`}>
                  {numeral}
                </td>
                <td className={`border p-2 sm:p-3 text-black text-center ${index === array.length - 1 ? 'rounded-br-lg' : ''}`}>
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 