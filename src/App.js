import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DomainSelection from './components/DomainSelection';
import Quiz from './components/Quiz';
import Results from './components/Results';
import AuthGuard from './components/AuthGuard';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/domain-selection" 
          element={
            <AuthGuard>
              <DomainSelection />
            </AuthGuard>
          } 
        />
        <Route 
          path="/quiz/:domain" 
          element={
            <AuthGuard>
              <Quiz />
            </AuthGuard>
          } 
        />
        <Route 
          path="/results" 
          element={
            <AuthGuard>
              <Results />
            </AuthGuard>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;