import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchStartupById } from "../../stores/startupSlice";

const StartupDashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { current, loading, error } = useSelector(
    (state) => state.startup
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchStartupById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="p-6">
        <h2>Loading Startup Data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Failed to load startup details.
      </div>
    );
  }

  if (!current) {
    return (
      <div className="p-6">
        <h2>No Startup Found</h2>
      </div>
    );
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        {current.name}
      </h1>

      <p className="mt-2">{current.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="border p-4 rounded">
          Industry: {current.industry}
        </div>

        <div className="border p-4 rounded">
          Stage: {current.stage}
        </div>

        <div className="border p-4 rounded">
          Created: {new Date(current.createdAt).toDateString()}
        </div>

      </div>

      {current.workspaceSettings && (
        <div className="mt-6 border p-4 rounded">
          <h3 className="font-bold mb-2">Workspace Settings</h3>

          Editable:{" "}
          {current.workspaceSettings.isEditable
            ? "Yes"
            : "No"}
          <br />

          External Feedback:{" "}
          {current.workspaceSettings.allowExternalFeedback
            ? "Enabled"
            : "Disabled"}
        </div>
      )}

    </div>
  );
};

export default StartupDashboard;
