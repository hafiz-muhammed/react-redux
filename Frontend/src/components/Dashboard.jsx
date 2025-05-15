// // src/components/Dashboard.jsx
// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Dashboard = () => {
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//           Welcome<br/>
//          {user?.name}
//         </h1>
//         <p className="text-gray-600">You have successfully logged in.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './LogoutButton';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome<br />
          {user?.name}
        </h1>
        <p className="text-gray-600 mb-6">You have successfully logged in.</p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;

