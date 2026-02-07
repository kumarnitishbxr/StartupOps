
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStartupById } from "../../API/startupapi";
import { getStartupAnalytics } from "../../API/analyticsapi";

import Loader from "../../components/common/Loader";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import ProgressChart from "../../components/dashboard/ProgressChart";

const AnalyticsPage = () => {
  const { startupId } = useParams();

  const [startup, setStartup] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const [startupRes, analyticsRes] = await Promise.all([
        getStartupById(startupId),
        getStartupAnalytics(startupId),
      ]);

      setStartup(startupRes);
      setAnalytics(analyticsRes);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics();
  });//startupId

  if (loading) return <Loader />;

  if (!startup || !analytics) {
    return (
      <p className="text-sm text-gray-500">
        Analytics not available for this startup.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h1 className="text-2xl font-semibold">
          Analytics — {startup.name}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Measure execution, validation, and progress toward readiness.
        </p>
      </div>

      {/* Key Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <AnalyticsCard
          title="Total Tasks"
          value={analytics.totalTasks}
        />
        <AnalyticsCard
          title="Tasks Completed"
          value={analytics.tasksCompleted}
          trend={analytics.taskCompletionTrend}
          trendLabel="since last period"
        />
        <AnalyticsCard
          title="Milestones Achieved"
          value={analytics.milestonesCompleted}
        />
        <AnalyticsCard
          title="Validation Score"
          value={`${analytics.validationScore}%`}
        />
      </section>

      {/* Execution Trend */}
      <section className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">
          Execution Progress
        </h2>
        <ProgressChart
          data={analytics.progressTimeline}
          label="Completed Tasks Over Time"
        />
      </section>
    </div>
  );
};

export default AnalyticsPage;
