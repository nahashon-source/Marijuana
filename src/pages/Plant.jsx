import React from 'react';

function Plant() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">The Marijuana Plant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Types of Strains</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Indica: Known for relaxing effects</li>
            <li className="mb-2">Sativa: Associated with energizing effects</li>
            <li className="mb-2">Hybrid: Combination of both varieties</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Components</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">THC: Primary psychoactive compound</li>
            <li className="mb-2">CBD: Non-psychoactive compound with medical benefits</li>
            <li className="mb-2">Terpenes: Aromatic compounds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plant;