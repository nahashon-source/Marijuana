import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Education First</h2>
            <p>Discover accurate, well-researched information about marijuana, its uses, and effects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Global Perspective</h2>
            <p>Learn about marijuana's legal status and cultural significance around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Growing Guide</h2>
            <p>Understand the basics of marijuana cultivation and best practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;