import React from 'react';
import PageHeader from '../components/PageHeader';
import CannabinoidCard from '../components/CannabinoidCard';

function Science() {
  const cannabinoids = [
    {
      name: 'THC',
      fullName: 'Tetrahydrocannabinol',
      description: 'The primary psychoactive compound in marijuana.',
      effects: [
        'Euphoria',
        'Relaxation',
        'Altered perception',
        'Increased appetite'
      ],
      medicalUses: [
        'Pain relief',
        'Nausea reduction',
        'Sleep aid',
        'Appetite stimulation'
      ]
    },
    {
      name: 'CBD',
      fullName: 'Cannabidiol',
      description: 'Non-psychoactive compound with various therapeutic benefits.',
      effects: [
        'Anxiety reduction',
        'Anti-inflammatory',
        'Neuroprotective',
        'Anti-seizure'
      ],
      medicalUses: [
        'Epilepsy treatment',
        'Anxiety management',
        'Pain relief',
        'Inflammation reduction'
      ]
    },
    {
      name: 'CBG',
      fullName: 'Cannabigerol',
      description: 'Known as the "mother cannabinoid," precursor to other cannabinoids.',
      effects: [
        'Anti-inflammatory',
        'Neuroprotective',
        'Antibacterial',
        'Appetite stimulation'
      ],
      medicalUses: [
        'Glaucoma treatment',
        'Cancer therapy',
        'Inflammatory bowel disease',
        'Bacterial infections'
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="The Science of Cannabinoids" 
        subtitle="Understanding the chemical compounds in marijuana"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cannabinoids.map((cannabinoid, index) => (
            <CannabinoidCard key={index} {...cannabinoid} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Science;