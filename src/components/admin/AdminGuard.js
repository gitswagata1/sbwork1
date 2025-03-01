import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase-config';

function AdminGuard({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdTokenResult();
        setIsAdmin(token.claims.admin === true);
      }
      setLoading(false);
    };

    checkAdminStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAdmin ? children : <Navigate to="/admin/login" />;
}

export default AdminGuard;