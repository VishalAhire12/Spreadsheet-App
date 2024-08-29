// components/Spreadsheet.tsx
"use client";
import React from 'react';
import useSheetStore from '../store/useSheetStore';

const Spreadsheet: React.FC = () => {
  const { cells, updateCell } = useSheetStore();
  const rows = 100; // Number of rows
  const cols = 10; // Number of columns

  const handleInputChange = (id: string, value: string) => {
    updateCell(id, value);
  };

  return (
    <div className="relative overflow-auto w-full h-full">
      <table className="border-collapse border border-black w-full h-full">
        <thead>
          <tr>
            {Array.from({ length: cols }, (_, i) => (
              <th
                key={`header-${i}`} // Unique key for column headers
                className="border border-black bg-gray-200 p-2 text-center"
              >
                {String.fromCharCode(65 + i)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, row) => (
            <tr key={`row-${row}`}> {/* Unique key for each row */}
              {Array.from({ length: cols }, (_, col) => {
                const cellId = `${String.fromCharCode(65 + col)}${row + 1}`; // e.g., A1, B2
                return (
                  <td
                    key={cellId} // Unique key for each cell
                    className="border border-black p-2 text-left bg-white"
                    contentEditable
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleInputChange(cellId, e.currentTarget.textContent || '')}
                  >
                    {cells[cellId] || ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
