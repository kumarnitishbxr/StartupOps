import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          StartupOps
        </div>

        <div className="space-x-8 flex items-center">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </a>

          <a href="#demo" className="text-gray-700 hover:text-blue-600 transition">
            Demo
          </a>

          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition shadow-md"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
