// import React from "react";
// import { useEffect, useState } from "react";
// import { getStartupById } from "../../API/startupapi";
// import { getStartupAnalytics } from "../../API/analyticsapi";

// import Loader from "../../components/common/Loader";
// import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
// import ProgressChart from '../../components/dashboard/ProgressChart'

// import TaskList from '../../components/tasks/TaskCard'
// import TaskForm from "../../components/tasks/TaskForm";

// import MilestoneList from "../../components/milestones/MilestoneList";
// import MilestoneForm from "../../components/milestones/MilestoneForm";

// import FeedbackList from "../../components/feedback/FeedbackList";
// import FeedbackForm from "../../components/feedback/FeedbackForm";

// const Dashboard = () => {
//   const [startup, setStartup] = useState(null);
//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadDashboardData = async () => {
//     setLoading(true);
//     try {
//       const [startupRes, analyticsRes] = await Promise.all([
//         getStartupById(),
//         getStartupAnalytics(),
//       ]);

//       setStartup(startupRes);
//       setAnalytics(analyticsRes);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadDashboardData();
//   }, []);

//   if (loading) return <Loader />;

//   if (!startup) {
//     return (
//       <p className="text-sm text-gray-500">
//         No startup workspace found.
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-semibold">
//           {startup.name}
//         </h1>
//         <p className="text-sm text-gray-500">
//           Central execution & validation workspace
//         </p>
//       </div>

//       {/* Analytics Section */}
//       <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <AnalyticsCard
//           title="Tasks Completed"
//           value={analytics.tasksCompleted}
//           trend={analytics.taskCompletionTrend}
//         />
//         <AnalyticsCard
//           title="Milestones Achieved"
//           value={analytics.milestonesCompleted}
//         />
//         <AnalyticsCard
//           title="Feedback Count"
//           value={analytics.feedbackCount}
//         />
//         <AnalyticsCard
//           title="Idea Validation Score"
//           value={`${analytics.validationScore}%`}
//         />
//       </section>

//       {/* Progress Chart */}
//       <section className="bg-white rounded-lg shadow p-4">
//         <h2 className="text-lg font-medium mb-2">
//           Execution Progress
//         </h2>
//         <ProgressChart data={analytics.progressTimeline} />
//       </section>

//       {/* Tasks & Milestones */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <h2 className="text-lg font-medium">Tasks</h2>
//           <TaskForm startupId={startup._id} onSuccess={loadDashboardData} />
//           <TaskList startupId={startup._id} />
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-lg font-medium">Milestones</h2>
//           <MilestoneForm startupId={startup._id} onSuccess={loadDashboardData} />
//           <MilestoneList startupId={startup._id} />
//         </div>
//       </section>

//       {/* Feedback & Validation */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <h2 className="text-lg font-medium">Submit Feedback</h2>
//           <FeedbackForm
//             startupId={startup._id}
//             onSuccess={loadDashboardData}
//           />
//         </div>

//         <div className="space-y-4">
//           <h2 className="text-lg font-medium">Collected Feedback</h2>
//           <FeedbackList startupId={startup._id} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;




import React from "react";
import { useEffect, useState } from "react";
import { getStartupById } from "../../API/startupapi";
import { getStartupAnalytics } from "../../API/analyticsapi"
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <p className="text-zinc-500 font-mono text-sm tracking-wider">
          NO_WORKSPACE_FOUND
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        
        .dashboard-container {
          font-family: 'Space Mono', monospace;
        }
        
        .headline {
          font-family: 'Syne', sans-serif;
        }
        
        .card-brutal {
          background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
          border: 3px solid #3f3f46;
          box-shadow: 8px 8px 0px #fbbf24;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-brutal:hover {
          transform: translate(-2px, -2px);
          box-shadow: 12px 12px 0px #fbbf24;
        }
        
        .accent-line {
          background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%);
          height: 4px;
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .stat-card {
          background: #18181b;
          border: 2px solid #3f3f46;
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.1), transparent);
          animation: slide 3s infinite;
        }
        
        @keyframes slide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(251, 191, 36, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .section-header {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
        }
        
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 60%;
          height: 3px;
          background: #fbbf24;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <div className="dashboard-container max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Header Section */}
        <header className="fade-in opacity-0 stagger-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="inline-block px-4 py-1 bg-fbbf24 text-zinc-950 font-bold text-xs mb-4 tracking-widest">
                ACTIVE WORKSPACE
              </div>
              <h1 className="headline text-6xl md:text-7xl font-extrabold mb-3 leading-none">
                {startup.name}
              </h1>
              <p className="text-zinc-500 text-sm tracking-wider uppercase font-mono">
                Central execution & validation workspace
              </p>
            </div>
          </div>
          <div className="accent-line mt-6"></div>
        </header>

        {/* Analytics Grid */}
        <section className="fade-in opacity-0 stagger-2">
          <h2 className="section-header text-2xl mb-8 text-zinc-100">
            Live Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card p-6 fade-in opacity-0 stagger-2">
              <div className="text-zinc-500 text-xs font-bold tracking-widest mb-3">TASKS_COMPLETE</div>
              <AnalyticsCard
                title="Tasks Completed"
                value={analytics.tasksCompleted}
                trend={analytics.taskCompletionTrend}
              />
            </div>
            <div className="stat-card p-6 fade-in opacity-0 stagger-3">
              <div className="text-zinc-500 text-xs font-bold tracking-widest mb-3">MILESTONES_HIT</div>
              <AnalyticsCard
                title="Milestones Achieved"
                value={analytics.milestonesCompleted}
              />
            </div>
            <div className="stat-card p-6 fade-in opacity-0 stagger-4">
              <div className="text-zinc-500 text-xs font-bold tracking-widest mb-3">FEEDBACK_RX</div>
              <AnalyticsCard
                title="Feedback Count"
                value={analytics.feedbackCount}
              />
            </div>
            <div className="stat-card p-6 fade-in opacity-0 stagger-4">
              <div className="text-zinc-500 text-xs font-bold tracking-widest mb-3">VALIDATION_INDEX</div>
              <AnalyticsCard
                title="Idea Validation Score"
                value={`${analytics.validationScore}%`}
              />
            </div>
          </div>
        </section>

        {/* Progress Chart */}
        <section className="fade-in opacity-0 stagger-3">
          <h2 className="section-header text-2xl mb-8 text-zinc-100">
            Execution Timeline
          </h2>
          <div className="card-brutal p-8 grid-pattern">
            <ProgressChart data={analytics.progressTimeline} />
          </div>
        </section>

        {/* Tasks & Milestones - Split Layout */}
        <section className="fade-in opacity-0 stagger-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Tasks - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="section-header text-2xl text-zinc-100">
                  Task Queue
                </h2>
                <div className="w-12 h-1 bg-fbbf24"></div>
              </div>
              <div className="card-brutal p-6">
                <TaskForm startupId={startup._id} onSuccess={loadDashboardData} />
              </div>
              <div className="space-y-4">
                <TaskList startupId={startup._id} />
              </div>
            </div>

            {/* Milestones - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="section-header text-2xl text-zinc-100">
                  Milestones
                </h2>
                <div className="w-12 h-1 bg-fbbf24"></div>
              </div>
              <div className="card-brutal p-6">
                <MilestoneForm startupId={startup._id} onSuccess={loadDashboardData} />
              </div>
              <div className="space-y-4">
                <MilestoneList startupId={startup._id} />
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section - Asymmetric Layout */}
        <section className="fade-in opacity-0 stagger-4">
          <h2 className="section-header text-2xl mb-8 text-zinc-100">
            Validation Lab
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feedback Form - Takes 1 column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card-brutal p-6 h-full">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-zinc-800 text-fbbf24 text-xs font-bold tracking-wider mb-3">
                    NEW_ENTRY
                  </div>
                </div>
                <FeedbackForm
                  startupId={startup._id}
                  onSuccess={loadDashboardData}
                />
              </div>
            </div>

            {/* Feedback List - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border-l-4 border-fbbf24 pl-6">
                <div className="text-zinc-500 text-xs font-bold tracking-widest mb-2">
                  COLLECTED_DATA
                </div>
                <FeedbackList startupId={startup._id} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Accent */}
        <div className="accent-line mt-16"></div>
        <div className="text-center text-zinc-600 font-mono text-xs tracking-widest py-8">
          DASHBOARD_ACTIVE // {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;