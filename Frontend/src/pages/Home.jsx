import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">
          Welcome
        </h1>
        <p className="text-gray-500 mb-6">
          Please login or register
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;