import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStartupById } from "../../API/startupapi";
import FeedbackForm from "../../components/feedback/FeedbackForm";
import FeedbackList from "../../components/feedback/FeedbackList";
import Loader from "../../components/common/Loader";

const FeedbackPage = () => {
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
  });

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
          Feedback & Validation — {startup.name}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Collect insights to validate ideas and guide iteration.
        </p>
      </div>

      {/* Submit Feedback */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">
          Submit Feedback
        </h2>
        <FeedbackForm startupId={startup._id} onSuccess={loadStartup} />
      </div>

      {/* Feedback List */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">
          Collected Feedback
        </h2>
        <FeedbackList startupId={startup._id} />
      </div>
    </div>
  );
};

export default FeedbackPage;
