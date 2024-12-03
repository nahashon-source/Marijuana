import React from 'react';
import PageHeader from '../components/PageHeader';
import InfoCard from '../components/InfoCard';

function Resources() {
  return (
    <div>
      <PageHeader 
        title="Resources" 
        subtitle="Educational materials and helpful links"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard 
            title="Research Papers"
            content="Access peer-reviewed studies on marijuana's effects, medical benefits, and social impact."
          />
          <InfoCard 
            title="Medical Information"
            content="Find detailed information about medical applications and treatment options."
          />
          <InfoCard 
            title="Legal Resources"
            content="Stay updated with current laws and regulations in different jurisdictions."
          />
          <InfoCard 
            title="Growing Guides"
            content="Detailed guides for cultivation, from beginner to advanced techniques."
          />
          <InfoCard 
            title="Support Groups"
            content="Connect with communities for support and responsible use guidance."
          />
          <InfoCard 
            title="News & Updates"
            content="Latest developments in marijuana research, legislation, and culture."
          />
        </div>
      </div>
    </div>
  );
}

export default Resources;