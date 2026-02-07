import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStartups } from "../../stores/startupSlice";
import { Link } from "react-router-dom";

import DashboardLayout from "../dashboard/DashboardLayout";
import StartupCard from "./StartupCard";

const StartupList = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector((state) => state.startup);

  useEffect(() => {
    dispatch(fetchStartups());
  }, [dispatch]);

  return (
    <DashboardLayout>

      <div className="p-6">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            My Startups
          </h1>

          <Link
            to="/startups/create"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition shadow-md"
          >
            + Create Startup
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-gray-600">
            Loading your startups...
          </p>
        )}

        {/* Error State */}
        {error && (
          <p className="text-red-600">
            {error}
          </p>
        )}

        {/* Empty State */}
        {!loading && list && list.length === 0 && (
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              You haven’t created any startups yet.
            </p>

            <Link
              to="/startups/create"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Create Your First Startup
            </Link>
          </div>
        )}

        {/* Startup Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {list &&
            list.map((startup) => (
              <StartupCard
                key={startup._id}
                startup={startup}
              />
            ))}

        </div>

      </div>

    </DashboardLayout>
  );
};

export default StartupList;
