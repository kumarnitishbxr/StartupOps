import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStartups } from "../../redux/slices/startupSlice";
import { Link } from "react-router-dom";

import StartupCard from "./StartupCard";

const StartupList = () => {
  const dispatch = useDispatch();

  // Get data from redux store
  const { list } = useSelector((state) => state.startup);

  useEffect(() => {
    // Fetch startups from backend when page loads
    dispatch(fetchStartups());
  }, [dispatch]);

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Startups</h1>

        <Link
          to="/startups/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Startup
        </Link>
      </div>

      {list && list.length === 0 && (
        <p className="text-gray-600">
          No startups created yet.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list &&
          list.map((startup) => (
            <StartupCard
              key={startup._id}
              startup={startup}
            />
          ))}
      </div>

    </div>
  );
};

export default StartupList;
