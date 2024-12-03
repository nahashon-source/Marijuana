import React from 'react';
import PageHeader from '../components/PageHeader';
import StrainCard from '../components/StrainCard';

function Strains() {
  const strains = [
    {
      name: 'Blue Dream',
      type: 'Hybrid',
      effects: ['Relaxation', 'Creativity', 'Mild euphoria'],
      description: 'A balanced hybrid strain known for its sweet berry aroma and gentle effects.'
    },
    {
      name: 'OG Kush',
      type: 'Indica',
      effects: ['Pain relief', 'Stress reduction', 'Sleep aid'],
      description: 'A classic indica strain with strong relaxing properties and earthy flavors.'
    },
    {
      name: 'Sour Diesel',
      type: 'Sativa',
      effects: ['Energy boost', 'Focus', 'Mood elevation'],
      description: 'An energizing sativa with a distinctive fuel-like aroma and uplifting effects.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Popular Strains" 
        subtitle="Explore different varieties and their unique properties"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strains.map((strain, index) => (
            <StrainCard key={index} {...strain} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strains;