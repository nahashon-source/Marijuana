import React from 'react';
import PageHeader from '../components/PageHeader';

function Growing() {
  return (
    <div>
      <PageHeader 
        title="Growing Guide" 
        subtitle="Learn about the cultivation process and best practices"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Growing Conditions</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Temperature: 20-30°C (68-86°F)</li>
              <li className="mb-2">Humidity: 40-60% during growing</li>
              <li className="mb-2">Light: 18-24 hours during vegetative stage</li>
              <li className="mb-2">Soil pH: 6.0-7.0</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Growth Timeline</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Germination: 3-10 days</li>
              <li className="mb-2">Seedling: 2-3 weeks</li>
              <li className="mb-2">Vegetative: 3-16 weeks</li>
              <li className="mb-2">Flowering: 8-11 weeks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growing;