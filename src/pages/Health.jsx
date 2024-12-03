import React from 'react';
import PageHeader from '../components/PageHeader';
import InfoCard from '../components/InfoCard';
import DosageCalculator from '../components/DosageCalculator';

function Health() {
  const benefits = [
    { title: 'Pain Management', content: 'Effective for chronic pain, arthritis, and inflammation.' },
    { title: 'Mental Health', content: 'May help with anxiety, PTSD, and depression symptoms.' },
    { title: 'Cancer Treatment', content: 'Can reduce nausea and improve appetite during chemotherapy.' },
    { title: 'Neurological Disorders', content: 'Benefits for epilepsy, multiple sclerosis, and Parkinson\'s.' }
  ];

  const risks = [
    { title: 'Cognitive Effects', content: 'May impact short-term memory and concentration.' },
    { title: 'Respiratory Issues', content: 'Smoking can affect lung health.' },
    { title: 'Dependency', content: 'Potential for psychological dependence.' },
    { title: 'Drug Interactions', content: 'Can interact with certain medications.' }
  ];

  return (
    <div>
      <PageHeader 
        title="Health Benefits & Risks" 
        subtitle="Understanding the medical applications and potential concerns"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Medical Benefits</h2>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <InfoCard key={index} {...benefit} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Potential Risks</h2>
            <div className="grid gap-4">
              {risks.map((risk, index) => (
                <InfoCard key={index} {...risk} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <DosageCalculator />
        </div>
      </div>
    </div>
  );
}

export default Health;