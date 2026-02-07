import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// FIX: Correct import name
import { fetchStartupById } from "../../redux/slices/startupSlice";

const StartupDashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { current } = useSelector((state) => state.startup);

  useEffect(() => {
    // FIX: Correct action name here as well
    dispatch(fetchStartupById(id));
  }, [dispatch, id]);

  if (!current) return "Loading...";

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        {current.name}
      </h1>

      <p className="mt-2">{current.description}</p>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="border p-4">
          Industry: {current.industry}
        </div>

        <div className="border p-4">
          Stage: {current.stage}
        </div>

        <div className="border p-4">
          Created: {new Date(current.createdAt).toDateString()}
        </div>

      </div>

      <div className="mt-6 border p-4">
        <h3 className="font-bold mb-2">Workspace Settings</h3>

        Editable: {current.workspaceSettings.isEditable ? "Yes" : "No"} <br />

        External Feedback:{" "}
        {current.workspaceSettings.allowExternalFeedback
          ? "Enabled"
          : "Disabled"}
      </div>

    </div>
  );
};

export default StartupDashboard;
