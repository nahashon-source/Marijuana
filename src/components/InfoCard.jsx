import React from 'react';

function InfoCard({ title, content, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-green-800">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default InfoCard;