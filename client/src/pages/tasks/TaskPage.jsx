import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TaskCard from "../../components/tasks/TaskCard";
import TaskForm from "../../components/tasks/TaskForm";
import Loader from "../../components/common/Loader";
import { getStartupById } from "../../API/startupapi";

const TasksPage = () => {
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
  },[startupId]);

  if (loading) return <Loader />;

  if (!startup) {
    return (
      <p className="text-sm text-gray-500">
        Startup not found or access denied.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h1 className="text-2xl font-semibold">
          Tasks — {startup.name}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Break down execution into actionable steps.
        </p>
      </div>

      {/* Create Task */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">
          Create New Task
        </h2>
        <TaskForm startupId={startup._id} onSuccess={loadStartup} />
      </div>

      {/* Task List */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">
          All Tasks
        </h2>
        <TaskCard startupId={startup._id} />
      </div>
    </div>
  );
};

export default TasksPage;
