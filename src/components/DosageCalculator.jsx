import React, { useState } from 'react';

function DosageCalculator() {
  const [weight, setWeight] = useState('');
  const [tolerance, setTolerance] = useState('low');
  const [dosage, setDosage] = useState(null);

  const calculateDosage = () => {
    const baseRate = {
      low: 0.1,
      medium: 0.15,
      high: 0.2
    };
    
    const calculatedDosage = weight * baseRate[tolerance];
    setDosage(calculatedDosage.toFixed(1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">THC Dosage Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tolerance Level</label>
          <select
            value={tolerance}
            onChange={(e) => setTolerance(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          onClick={calculateDosage}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Calculate Dosage
        </button>
        {dosage && (
          <div className="mt-4 p-4 bg-green-50 rounded">
            <p className="text-center">
              Recommended THC dosage: <span className="font-bold">{dosage}mg</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DosageCalculator;