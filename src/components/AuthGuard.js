import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

function AuthGuard({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email.endsWith('@vitstudent.ac.in')) {
        setIsAuthorized(true);
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!isAuthorized) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Verifying authentication...</p>
      </div>
    );
  }

  return children;
}

export default AuthGuard;