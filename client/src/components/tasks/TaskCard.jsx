import Button from "../common/Button";
import clsx from "clsx";

const statusStyles = {
  TODO: "bg-gray-200 text-gray-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  DONE: "bg-green-100 text-green-700",
  BLOCKED: "bg-red-100 text-red-700",
};

const TaskCard = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <div className="flex justify-between items-start">
        <h4 className="font-medium">{task.title}</h4>

        <span
          className={clsx(
            "text-xs px-2 py-1 rounded",
            statusStyles[task.status]
          )}
        >
          {task.status}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-500">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-400">
          Assigned to: {task.assignedTo?.name || "Unassigned"}
        </span>

        <div className="flex gap-2">
          {task.status !== "DONE" && (
            <Button
              size="sm"
              variant="secondary"
              onClick={() =>
                onStatusChange(task._id, "DONE")
              }
            >
              Mark Done
            </Button>
          )}

          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
