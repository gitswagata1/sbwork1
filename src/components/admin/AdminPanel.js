import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import QuestionManager from './QuestionManager';
import ParticipantList from './ParticipantList';
import Dashboard from './Dashboard';

function AdminPanel() {
  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/questions">Questions</Link>
        <Link to="/admin/participants">Participants</Link>
      </nav>

      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/questions" element={<QuestionManager />} />
          <Route path="/participants" element={<ParticipantList />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;