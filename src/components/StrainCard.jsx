import React from 'react';

function StrainCard({ name, type, effects, description }) {
  const typeColors = {
    indica: 'bg-purple-100 text-purple-800',
    sativa: 'bg-green-100 text-green-800',
    hybrid: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${typeColors[type.toLowerCase()]}`}>
          {type}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold">Effects:</h4>
        <ul className="list-disc pl-5">
          {effects.map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StrainCard;