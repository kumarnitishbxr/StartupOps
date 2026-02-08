// import React from "react";
// import { useEffect, useState } from "react";
// import {  getUserStartups } from "../../API/startupapi";
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
//         getUserStartups(),
//         getStartupAnalytics("698762f707e29ec03fc6296a"),
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
//           subtittle = "dev"
//           trendLabel="trendleve"

//         />
//         <AnalyticsCard
//           title="Milestones Achieved"
//           value={analytics.milestonesCompleted}
//           trend={analytics.taskCompletionTrend}
//           subtittle = "dev"
//           trendLabel="trendleve"
//         />
//         <AnalyticsCard
//           title="Feedback Count"
//           value={analytics.feedbackCount}
//           trend={analytics.taskCompletionTrend}
//           subtittle = "dev"
//           trendLabel="trendleve"
//         />
//         <AnalyticsCard
//           title="Idea Validation Score"
//           value={`${analytics.validationScore}%`}
//           trend={analytics.taskCompletionTrend}
//           subtittle = "dev"
//           trendLabel="trendleve"
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
import { getUserStartups } from "../../API/startupapi";
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
        getUserStartups(),
        getStartupAnalytics("698762f707e29ec03fc6296a"),
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="text-center">
          <div className="inline-block p-6 bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl">
            <p className="text-slate-400 font-medium tracking-wide">
              No startup workspace found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .dashboard-root {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #0f0f23 100%);
          min-height: 100vh;
        }
        
        .mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .glass-card {
          background: rgba(15, 15, 35, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px -15px rgba(168, 85, 247, 0.3);
        }
        
        .glow-text {
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: -1px -1px;
        }
        
        .accent-gradient {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%);
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
          }
        }
        
        .float-in {
          animation: float-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(168, 85, 247, 0.5) 50%, 
            transparent 100%
          );
        }
        
        .metric-badge {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: 1px solid rgba(168, 85, 247, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="dashboard-root min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-12 grid-bg">
          
          {/* Header Section */}
          <header className="float-in delay-100">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 metric-badge rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                  <span className="mono text-xs text-purple-300 font-medium tracking-wider">
                    WORKSPACE ACTIVE
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white glow-text leading-tight">
                  {startup.name}
                </h1>
                
                <p className="text-lg text-slate-400 font-light tracking-wide max-w-2xl">
                  Central execution & validation workspace
                </p>
                
                <div className="accent-gradient h-1 w-32 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* Analytics Grid */}
          <section className="float-in delay-200">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Performance Metrics</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 hover-lift">
                <AnalyticsCard
                  title="Tasks Completed"
                  value={analytics.tasksCompleted}
                  trend={analytics.taskCompletionTrend}
                  subtittle="dev"
                  trendLabel="trendleve"
                />
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <AnalyticsCard
                  title="Milestones Achieved"
                  value={analytics.milestonesCompleted}
                  trend={analytics.taskCompletionTrend}
                  subtittle="dev"
                  trendLabel="trendleve"
                />
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <AnalyticsCard
                  title="Feedback Count"
                  value={analytics.feedbackCount}
                  trend={analytics.taskCompletionTrend}
                  subtittle="dev"
                  trendLabel="trendleve"
                />
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <AnalyticsCard
                  title="Idea Validation Score"
                  value={`${analytics.validationScore}%`}
                  trend={analytics.taskCompletionTrend}
                  subtittle="dev"
                  trendLabel="trendleve"
                />
              </div>
            </div>
          </section>

          {/* Progress Chart */}
          <section className="float-in delay-300">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Execution Progress</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="glass-card p-8">
              <ProgressChart data={analytics.progressTimeline} />
            </div>
          </section>

          {/* Tasks & Milestones */}
          <section className="float-in delay-400">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Execution Pipeline</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tasks */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 accent-gradient rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Tasks</h3>
                </div>
                
                <div className="glass-card p-6">
                  <TaskForm startupId={startup._id} onSuccess={loadDashboardData} />
                </div>
                
                <div className="space-y-4">
                  <TaskList startupId={startup._id} />
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 accent-gradient rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Milestones</h3>
                </div>
                
                <div className="glass-card p-6">
                  <MilestoneForm startupId={startup._id} onSuccess={loadDashboardData} />
                </div>
                
                <div className="space-y-4">
                  <MilestoneList startupId={startup._id} />
                </div>
              </div>
            </div>
          </section>

          {/* Feedback & Validation */}
          <section className="float-in delay-400">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Feedback & Validation</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Submit Feedback */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 accent-gradient rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Submit Feedback</h3>
                </div>
                
                <div className="glass-card p-6">
                  <FeedbackForm
                    startupId={startup._id}
                    onSuccess={loadDashboardData}
                  />
                </div>
              </div>

              {/* Collected Feedback */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 accent-gradient rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Collected Feedback</h3>
                </div>
                
                <div className="space-y-4">
                  <FeedbackList startupId={startup._id} />
                </div>
              </div>
            </div>
          </section>

          {/* Footer Accent */}
          <footer className="pt-12">
            <div className="section-divider mb-6"></div>
            <div className="text-center">
              <p className="mono text-xs text-slate-600 tracking-widest">
                POWERED BY INNOVATION • {new Date().getFullYear()}
              </p>
            </div>
          </footer>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;