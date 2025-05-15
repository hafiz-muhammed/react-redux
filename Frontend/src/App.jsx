// App.jsx
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AdminUsersPage from './components/AdminUsersPage';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/Home';
import React from 'react';

function App() {
  const token = localStorage.getItem('token'); 
  console.log(token);
  

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            token ? (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/admin/users"
          element={
            token ? (
              <ProtectedRoute adminOnly={true}>
                <AdminUsersPage />
              </ProtectedRoute>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
