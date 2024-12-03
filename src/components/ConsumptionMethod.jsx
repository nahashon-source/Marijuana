import React from 'react';
import { FaSmokingBan, FaCookie, FaLeaf, FaPrescriptionBottle } from 'react-icons/fa';

function ConsumptionMethod({ title, description, pros, cons, icon }) {
  const icons = {
    smoking: <FaSmokingBan className="w-8 h-8" />,
    edibles: <FaCookie className="w-8 h-8" />,
    tinctures: <FaPrescriptionBottle className="w-8 h-8" />,
    topicals: <FaLeaf className="w-8 h-8" />
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="text-green-600 mr-4">
          {icons[icon]}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-green-700">Pros:</h4>
          <ul className="list-disc pl-5">
            {pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-700">Cons:</h4>
          <ul className="list-disc pl-5">
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConsumptionMethod;