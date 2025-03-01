import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Completion() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="completion-container">
      <div className="completion-card">
        <h1>Thank You for Participating!</h1>
        <p>Your responses have been recorded successfully.</p>
        <p>We will contact you at {user.email} with further details.</p>
        
        <button 
          className="view-results-button"
          onClick={() => navigate('/results')}
        >
          View Your Results
        </button>
      </div>
    </div>
  );
}

export default Completion;