import React from "react";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Button from "../common/Button";
import {
  getMilestones,
  // updateMilestoneStatus,
} from "../../API/milstoneapi";

const statusMap = {
  PLANNED: "bg-gray-200 text-gray-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
};

const MilestoneList = ({ startupId }) => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMilestones = async () => {
    setLoading(true);
    try {
      const data = await getMilestones(startupId);
      setMilestones(data);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (milestoneId, status) => {
    await updateMilestoneStatus(milestoneId, status);
    loadMilestones();
  };

  // useEffect(() => {
  //   loadMilestones();
  // }, [startupId]);

  useEffect(() => {
    loadMilestones();
  });


  if (loading) return <Loader />;

  if (!milestones.length) {
    return (
      <p className="text-sm text-gray-500">
        No milestones created yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {milestones.map((milestone) => (
        <div
          key={milestone._id}
          className="bg-white p-4 rounded-lg shadow space-y-2"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{milestone.title}</h4>

            <span
              className={`text-xs px-2 py-1 rounded ${
                statusMap[milestone.status]
              }`}
            >
              {milestone.status}
            </span>
          </div>

          {milestone.description && (
            <p className="text-sm text-gray-500">
              {milestone.description}
            </p>
          )}

          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>
              {new Date(milestone.startDate).toLocaleDateString()} –{" "}
              {new Date(milestone.endDate).toLocaleDateString()}
            </span>

            {milestone.status !== "COMPLETED" && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() =>
                  handleStatusChange(
                    milestone._id,
                    "COMPLETED"
                  )
                }
              >
                Mark Complete
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MilestoneList;
