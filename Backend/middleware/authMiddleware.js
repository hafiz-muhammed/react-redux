// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';

// // Protect route (for verifying if the user is logged in)
// export const protect = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Bearer token

//   if (!token) return res.status(401).json({ message: 'Not authorized, token failed' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select('-password'); // Attach user to request
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Not authorized, invalid token' });
//   }
// };

// // // Admin-only middleware
// // export const adminOnly = (req, res, next) => {
// //   if (req.user?.role !== 'admin') {
// //     return res.status(403).json({ message: 'Admins only' });
// //   }
// //   next();
// // };
    

// export const adminOnly = (req, res, next) => {
//   if (req.user && req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).json({ message: 'Access denied. Admins only.' });
//   }
// };


import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Middleware to protect routes (user must be logged in)
export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
  console.log(token, 'token');
  
  if (!token) return res.status(401).json({ message: 'Not authorized, no token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    console.log('working');
    
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

// Middleware to allow only admins
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};
