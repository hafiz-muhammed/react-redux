// import User from '../models/userModel.js';

// // Get all users (admin only)
// export const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users from database
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch users', error: err.message });
//   }
// };

// // Update a user (admin only)
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update user', error: err.message });
//   }
// };

// // Delete a user (admin only)
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to delete user', error: err.message });
//   }
// };

import User from '../models/userModel.js';

// Get all users (admin only)
export const getAllUsers = async (req, res) => {
  try {
    console.log('working get all users');
    
    const users = await User.find().select('-password'); // exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

// Update a user (admin only)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user', error: err.message });
  }
};

// Delete a user (admin only)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user', error: err.message });
  }
};

