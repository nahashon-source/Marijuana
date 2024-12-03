import React from 'react';

function CannabinoidCard({ name, fullName, effects, medicalUses, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{fullName}</p>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-green-700">Effects:</h4>
          <ul className="list-disc pl-5">
            {effects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-700">Medical Uses:</h4>
          <ul className="list-disc pl-5">
            {medicalUses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CannabinoidCard;