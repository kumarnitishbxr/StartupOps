import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStartupById } from "../../API/startupapi";
import Loader from "../../components/common/Loader";
import Dashboard from "../dashboard/Dashboard";

const StartupWorkspace = () => {
  const { startupId } = useParams();
  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadStartup = async () => {
    setLoading(true);
    try {
      const data = await getStartupById(startupId);
      setStartup(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStartup();
  },[startupId]); //startupid

  if (loading) return <Loader />;

  if (!startup) {
    return (
      <p className="text-sm text-gray-500">
        Startup workspace not found.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Workspace Header */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h1 className="text-2xl font-semibold">
          {startup.name}
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          {startup.description}
        </p>

        <div className="mt-3 flex gap-2 text-xs">
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">
            {startup.stage}
          </span>

          <span className="px-2 py-1 bg-gray-100 rounded">
            Team: {startup.teamCount}
          </span>
        </div>
      </div>

      {/* Dashboard */}
      <Dashboard startupId={startup._id} />
    </div>
  );
};

export default StartupWorkspace;
