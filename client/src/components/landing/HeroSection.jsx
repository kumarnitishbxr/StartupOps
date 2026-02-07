import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-50">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
          filter: "blur(2px)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Manage Startups Like a Pro
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          The all-in-one platform for founders, students and mentors to plan ideas, manage tasks and track real growth.
        </p>

        <div className="space-x-4">
          <Link
            to="/startups/create"
            className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Create Startup
          </Link>

          <a
            href="#demo"
            className="border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            View Demo
          </a>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
