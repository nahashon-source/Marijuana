import React from 'react';
import PageHeader from '../components/PageHeader';
import ConsumptionMethod from '../components/ConsumptionMethod';

function Consumption() {
  const methods = [
    {
      title: 'Smoking & Vaping',
      description: 'Traditional methods of consuming marijuana through inhalation.',
      icon: 'smoking',
      pros: [
        'Quick onset of effects',
        'Easy to control dosage',
        'Most common method'
      ],
      cons: [
        'Potential respiratory issues',
        'Smell can be strong',
        'May irritate throat'
      ]
    },
    {
      title: 'Edibles',
      description: 'Food and beverages infused with marijuana.',
      icon: 'edibles',
      pros: [
        'Long-lasting effects',
        'No respiratory risks',
        'Discreet consumption'
      ],
      cons: [
        'Slower onset',
        'Harder to dose accurately',
        'Effects can be very strong'
      ]
    },
    {
      title: 'Tinctures',
      description: 'Liquid extracts taken under the tongue.',
      icon: 'tinctures',
      pros: [
        'Precise dosing',
        'Fast absorption',
        'Long shelf life'
      ],
      cons: [
        'Can be expensive',
        'May have strong taste',
        'Effects vary by person'
      ]
    },
    {
      title: 'Topicals',
      description: 'Creams, lotions, and balms for external use.',
      icon: 'topicals',
      pros: [
        'Localized relief',
        'No psychoactive effects',
        'Easy to apply'
      ],
      cons: [
        'Limited to external use',
        'May be less effective',
        'Can be expensive'
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Consumption Methods" 
        subtitle="Different ways to consume marijuana and their effects"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <ConsumptionMethod key={index} {...method} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consumption;