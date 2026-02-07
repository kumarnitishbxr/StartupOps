import React, { useState } from "react";
import TaskList from "../../components/tasks/TaskList";

const TasksPage = () => {

  const [tasks] = useState([
    { title: "Build UI", status: "In Progress" },
    { title: "Design DB", status: "Done" },
    { title: "Create Pitch", status: "Pending" }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
