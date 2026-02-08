import React from "react";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Button from "../common/Button";
import { getFeedbacks, deleteFeedback } from "../../API/feedbackapi";

const badgeStyles = {
  INTERNAL: "bg-blue-100 text-blue-700",
  EXTERNAL: "bg-purple-100 text-purple-700",
};

const FeedbackList = ({ startupId }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFeedbacks = async () => {
    setLoading(true);
    try {
      const data = await getFeedbacks(startupId);
      setFeedbacks(data);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (feedbackId) => {
    await deleteFeedback(feedbackId);
    loadFeedbacks();
  };

  useEffect(() => {
    loadFeedbacks();
  }, [startupId]);

  if (loading) return <Loader />;

  if (!feedbacks.length) {
    return (
      <p className="text-sm text-gray-500">
        No feedback submitted yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {feedbacks.map((fb) => (
        <div
          key={fb._id}
          className="bg-white p-4 rounded-lg shadow space-y-2"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{fb.ideaName}</h4>

            <span
              className={`text-xs px-2 py-1 rounded ${
                badgeStyles[fb.feedbackType]
              }`}
            >
              {fb.feedbackType}
            </span>
          </div>

          <p className="text-sm text-gray-600">
            {fb.comment || "No comment provided."}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Rating: {fb.rating}/5</span>

            <Button
              size="sm"
              variant="danger"
              onClick={() => handleDelete(fb._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
