// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import React from 'react';


// const ProtectedRoute = ({ children, adminOnly = false }) => {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" />;

//   if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" />;

//   return children;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user } = useAuth();

  console.log(user);
  

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
