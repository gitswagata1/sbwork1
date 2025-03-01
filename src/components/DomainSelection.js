import React, { useState } from 'react';

function DomainSelection({ onDomainSelect }) {
  const [selectedDomains, setSelectedDomains] = useState([]);
  
  const domains = [
    'Technical',
    'Design',
    'Editorial',
    'Management'
  ];

  const handleDomainSelect = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter(d => d !== domain));
    } else if (selectedDomains.length < 2) {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  return (
    <div className="domain-selection">
      <h2>Select Your Domains (Maximum 2)</h2>
      <div className="domains-grid">
        {domains.map(domain => (
          <button
            key={domain}
            className={`domain-button ${selectedDomains.includes(domain) ? 'selected' : ''}`}
            onClick={() => handleDomainSelect(domain)}
            disabled={selectedDomains.length >= 2 && !selectedDomains.includes(domain)}
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DomainSelection;