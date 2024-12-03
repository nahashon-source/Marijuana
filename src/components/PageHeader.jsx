import React from 'react';

function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-green-700 text-white py-12 mb-8">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </div>
  );
}

export default PageHeader;