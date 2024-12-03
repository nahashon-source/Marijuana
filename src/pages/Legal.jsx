import React from 'react';
import PageHeader from '../components/PageHeader';

function Legal() {
  return (
    <div>
      <PageHeader 
        title="Legal Status" 
        subtitle="Current legal landscape of marijuana around the world"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Legal Countries</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc pl-6">
                <li className="mb-2">Canada: Fully legal for medical and recreational use</li>
                <li className="mb-2">Uruguay: First country to fully legalize</li>
                <li className="mb-2">Netherlands: Tolerated in coffee shops</li>
                <li className="mb-2">Thailand: Recently legalized medical use</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Medical Use</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">Many countries have legalized medical marijuana:</p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Germany: Prescription-based medical program</li>
                <li className="mb-2">Israel: Pioneer in medical research</li>
                <li className="mb-2">Australia: Medical cannabis program</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Legal;