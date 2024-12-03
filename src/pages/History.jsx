import React from 'react';
import PageHeader from '../components/PageHeader';

function History() {
  return (
    <div>
      <PageHeader 
        title="History of Marijuana" 
        subtitle="A journey through time exploring marijuana's cultural and medicinal significance"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Ancient Origins</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">The earliest recorded use of marijuana dates back to ancient China, where it was used for fiber, food, and medicine.</p>
              <ul className="list-disc pl-6">
                <li className="mb-2">2737 BCE: First recorded medicinal use by Emperor Shen Nung</li>
                <li className="mb-2">Ancient Egypt: Used for medicinal purposes and religious ceremonies</li>
                <li className="mb-2">India: Sacred plant in Hindu traditions</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Modern Era</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">The 20th century saw significant changes in marijuana's legal status and cultural perception.</p>
              <ul className="list-disc pl-6">
                <li className="mb-2">1937: Marijuana Tax Act effectively criminalizes marijuana in the US</li>
                <li className="mb-2">1970s: Counter-culture movement embraces marijuana</li>
                <li className="mb-2">2012: Colorado and Washington become first US states to legalize recreational use</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default History;