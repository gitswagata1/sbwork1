import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      
      if (!email.endsWith('@vitstudent.ac.in')) {
        await auth.signOut();
        setError('Please use your VIT student email');
        return;
      }
      
      navigate('/domain-selection');
    } catch (error) {
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>VIT Innovators Quest</h1>
        <p>Sign in with your VIT student email to continue</p>
        
        <button 
          className="google-signin-button"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>

        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default Login;