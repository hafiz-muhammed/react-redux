// import express from 'express';
// import { protect, adminOnly } from '../middleware/authMiddleware.js';
// import { getAllUsers, updateUser, deleteUser } from '../controllers/userController.js';

// const userRouter = express.Router();

// // router.get('/', protect, adminOnly, getAllUsers); // GET /api/users

// // Admin-only route to get all users
// // userRouter.get('/users', protect, adminOnly, getAllUsers);
// userRouter.get('/users', protect, adminOnly, getAllUsers);

// // Admin-only route to update a user
// userRouter.put('/users/:id', protect, adminOnly, updateUser);

// // Admin-only route to delete a user
// userRouter.delete('/users/:id', protect, adminOnly, deleteUser);

// export default userRouter;


import express from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import {
  getAllUsers,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const userRouter = express.Router();

// Admin-only route to get all users
userRouter.get('/users', protect, adminOnly, getAllUsers);

// Admin-only route to update a user
userRouter.put('/users/:id', protect, adminOnly, updateUser);

// Admin-only route to delete a user
userRouter.delete('/users/:id', protect, adminOnly, deleteUser);

export default userRouter;
