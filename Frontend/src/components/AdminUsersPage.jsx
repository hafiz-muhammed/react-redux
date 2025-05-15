// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import React from 'react';

// const AdminUsersPage = () => {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users', {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });

//       if (Array.isArray(response.data)) {
//         setUsers(response.data);
//       } else {
//         console.error('Expected an array but got:', response.data);
//         setUsers([]); // fallback to empty array
//       }
//     } catch (err) {
//       console.error('Failed to fetch users:', err);
//       setUsers([]); // avoid crash
//     }
//   };

//   fetchUsers();
// }, [user]);


//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
//       <table className="w-full table-auto border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u._id}>
//               <td className="border p-2">{u.name}</td>
//               <td className="border p-2">{u.email}</td>
//               <td className="border p-2">{u.role}</td>
//             </tr>
//           ))}


          
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsersPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const AdminUsersPage = () => {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users', {
//           // headers: { Authorization: `Bearer ${users.token}` },
//           headers: { Authorization: `Bearer ${user.token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setUsers(response.data);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setUsers([]); // fallback to empty array
//         }
//       } catch (err) {
//         console.error('Failed to fetch users:', err);
//         setUsers([]); // avoid crash
//       }
//     };

//     fetchUsers();
//   }, [user]);

//   const handleEdit = (userData) => {
//     // Add your logic to handle user edit
//     console.log('Edit user:', userData);
//   };

//   const handleDelete = async (userId) => {
//     try {
//       await axios.delete(`/api/users/users${userId}`, {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });

//       // Update UI after successful delete
//       setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userId));
//     } catch (err) {
//       console.error('Failed to delete user:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
//       <table className="w-full table-auto border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u._id}>
//               <td className="border p-2">{u.name}</td>
//               <td className="border p-2">{u.email}</td>
//               <td className="border p-2">{u.role}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => handleEdit(u)}
//                   className="text-blue-600 hover:underline mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(u._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsersPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const AdminUsersPage = () => {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!user?.token) return;

//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users/users', {
//           headers: { Authorization: `Bearer ${user.token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setUsers(response.data);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setUsers([]);
//         }
//       } catch (err) {
//         console.error('Failed to fetch users:', err);
//         setUsers([]);
//       }
//     };

//     fetchUsers();
//   }, [user?.token]);

//   const handleEdit = async (userData) => {
//     const newRole = prompt(`Edit role for ${userData.name} (user/admin):`, userData.role);

//     if (!newRole || !['user', 'admin'].includes(newRole.toLowerCase())) {
//       alert('Invalid role. Only "user" or "admin" allowed.');
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `/api/users/${userData._id}`,
//         { role: newRole.toLowerCase() },
//         {
//           headers: { Authorization: `Bearer ${user.token}` },
//         }
//       );

//       // Update the user list with edited user
//       setUsers((prevUsers) =>
//         prevUsers.map((u) => (u._id === response.data._id ? response.data : u))
//       );
//     } catch (err) {
//       console.error('Failed to update user:', err);
//       alert('Failed to update user.');
//     }
//   };

//   const handleDelete = async (userId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmDelete) return;

//     try {
//       // await axios.delete(`/api/users/${userId}`, {
//       //   headers: { Authorization: `Bearer ${user.token}` },
//       // });

//       await axios.delete(`/api/users/users/${userId}`, {
//       headers: { Authorization: `Bearer ${user.token}` },
//       });


//       setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userId));
//     } catch (err) {
//       console.error('Failed to delete user:', err);
//       alert('Failed to delete user.');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
//       <table className="w-full table-auto border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u._id}>
//               <td className="border p-2">{u.name}</td>
//               <td className="border p-2">{u.email}</td>
//               <td className="border p-2 capitalize">{u.role}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => handleEdit(u)}
//                   className="text-blue-600 hover:underline mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(u._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsersPage; 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const AdminUsersPage = () => {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [editingUser, setEditingUser] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', role: '' });

//   useEffect(() => {
//     if (!user?.token) return;

//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users/users', {
//           headers: { Authorization: `Bearer ${user.token}` },
//         });

//         if (Array.isArray(response.data)) {
//           setUsers(response.data);
//         } else {
//           console.error('Expected an array but got:', response.data);
//           setUsers([]);
//         }
//       } catch (err) {
//         console.error('Failed to fetch users:', err);
//         setUsers([]);
//       }
//     };

//     fetchUsers();
//   }, [user?.token]);

//   const handleEditClick = (userData) => {
//     setEditingUser(userData);
//     setFormData({
//       name: userData.name,
//       email: userData.email,
//       role: userData.role,
//     });
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/api/users/users/${editingUser._id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       setUsers((prevUsers) =>
//         prevUsers.map((u) =>
//           u._id === editingUser._id ? { ...u, ...formData } : u
//         )
//       );

//       setEditingUser(null);
//     } catch (err) {
//       console.error('Failed to update user:', err);
//     }
//   };

//   const handleDelete = async (userId) => {
//     try {
//       await axios.delete(`/api/users/users/${userId}`, {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });

//       setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userId));
//     } catch (err) {
//       console.error('Failed to delete user:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>

//       <table className="w-full table-auto border mb-6">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u._id}>
//               <td className="border p-2">{u.name}</td>
//               <td className="border p-2">{u.email}</td>
//               <td className="border p-2">{u.role}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => handleEditClick(u)}
//                   className="text-blue-600 hover:underline mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(u._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editingUser && (
//         <div className="border p-4 rounded shadow-md bg-gray-100 max-w-md">
//           <h3 className="text-lg font-semibold mb-2">Edit User</h3>
//           <form onSubmit={handleEditSubmit} className="space-y-3">
//             <div>
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Role</label>
//               <select
//                 value={formData.role}
//                 onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditingUser(null)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminUsersPage;


// src/components/AdminUsersPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './LogoutButton';

const AdminUsersPage = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (!user?.token) return;

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/users', {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setUsers([]);
        }
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setUsers([]);
      }
    };

    fetchUsers();
  }, [user?.token]);

  const handleEditClick = (userData) => {
    setEditingUser(userData);
    setFormData({
      name: userData.name,
      email: userData.email,
      role: userData.role,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/users/${editingUser._id}`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === editingUser._id ? { ...u, ...formData } : u
        )
      );

      setEditingUser(null);
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/users/${userId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userId));
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin - Manage Users</h2>
        <LogoutButton />
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="bg-white">
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.role}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEditClick(u)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <div className="border p-4 rounded shadow-md bg-white max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Edit User</h3>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;
