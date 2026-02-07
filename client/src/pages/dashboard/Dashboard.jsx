import React from "react";
import { useEffect, useState } from "react";
import { getStartupById } from "../../API/startupapi";
import { getStartupAnalytics } from "../../API/analyticsapi";

import Loader from "../../components/common/Loader";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import ProgressChart from '../../components/dashboard/ProgressChart'

import TaskList from '../../components/tasks/TaskCard'
import TaskForm from "../../components/tasks/TaskForm";

import MilestoneList from "../../components/milestones/MilestoneList";
import MilestoneForm from "../../components/milestones/MilestoneForm";

import FeedbackList from "../../components/feedback/FeedbackList";
import FeedbackForm from "../../components/feedback/FeedbackForm";

const Dashboard = () => {
  const [startup, setStartup] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [startupRes, analyticsRes] = await Promise.all([
        getStartupById(),
        getStartupAnalytics(),
      ]);

      setStartup(startupRes);
      setAnalytics(analyticsRes);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  if (loading) return <Loader />;

  if (!startup) {
    return (
      <p className="text-sm text-gray-500">
        No startup workspace found.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          {startup.name}
        </h1>
        <p className="text-sm text-gray-500">
          Central execution & validation workspace
        </p>
      </div>

      {/* Analytics Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <AnalyticsCard
          title="Tasks Completed"
          value={analytics.tasksCompleted}
          trend={analytics.taskCompletionTrend}
        />
        <AnalyticsCard
          title="Milestones Achieved"
          value={analytics.milestonesCompleted}
        />
        <AnalyticsCard
          title="Feedback Count"
          value={analytics.feedbackCount}
        />
        <AnalyticsCard
          title="Idea Validation Score"
          value={`${analytics.validationScore}%`}
        />
      </section>

      {/* Progress Chart */}
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-medium mb-2">
          Execution Progress
        </h2>
        <ProgressChart data={analytics.progressTimeline} />
      </section>

      {/* Tasks & Milestones */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Tasks</h2>
          <TaskForm startupId={startup._id} onSuccess={loadDashboardData} />
          <TaskList startupId={startup._id} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Milestones</h2>
          <MilestoneForm startupId={startup._id} onSuccess={loadDashboardData} />
          <MilestoneList startupId={startup._id} />
        </div>
      </section>

      {/* Feedback & Validation */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Submit Feedback</h2>
          <FeedbackForm
            startupId={startup._id}
            onSuccess={loadDashboardData}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Collected Feedback</h2>
          <FeedbackList startupId={startup._id} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
