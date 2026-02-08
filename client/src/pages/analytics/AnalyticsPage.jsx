
// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { getStartupById } from "../../API/startupapi";
// import { getStartupAnalytics } from "../../API/analyticsapi";

// import Loader from "../../components/common/Loader";
// import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
// import ProgressChart from "../../components/dashboard/ProgressChart";

// const AnalyticsPage = () => {
//   const { startupId } = useParams();

//   const [startup, setStartup] = useState(null);
//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadAnalytics = async () => {
//     setLoading(true);
//     try {
//       const [startupRes, analyticsRes] = await Promise.all([
//         getStartupById(startupId),
//         getStartupAnalytics(startupId),
//       ]);

//       setStartup(startupRes);
//       setAnalytics(analyticsRes);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadAnalytics();
//   });//startupId

//   if (loading) return <Loader />;

//   if (!startup || !analytics) {
//     return (
//       <p className="text-sm text-gray-500">
//         Analytics not available for this startup.
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h1 className="text-2xl font-semibold">
//           Analytics — {startup.name}
//         </h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Measure execution, validation, and progress toward readiness.
//         </p>
//       </div>

//       {/* Key Metrics */}
//       <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <AnalyticsCard
//           title="Total Tasks"
//           value={analytics.totalTasks}
//         />
//         <AnalyticsCard
//           title="Tasks Completed"
//           value={analytics.tasksCompleted}
//           trend={analytics.taskCompletionTrend}
//           trendLabel="since last period"
//         />
//         <AnalyticsCard
//           title="Milestones Achieved"
//           value={analytics.milestonesCompleted}
//         />
//         <AnalyticsCard
//           title="Validation Score"
//           value={`${analytics.validationScore}%`}
//         />
//       </section>

//       {/* Execution Trend */}
//       <section className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-lg font-medium mb-3">
//           Execution Progress
//         </h2>
//         <ProgressChart
//           data={analytics.progressTimeline}
//           label="Completed Tasks Over Time"
//         />
//       </section>
//     </div>
//   );
// };

// export default AnalyticsPage;



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
  }, [startupId]);

  if (loading) return <Loader />;

  if (!startup || !analytics) {
    return (
      <>
        <style jsx>{`
          .error-state {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(15, 15, 35, 0.6) 0%, rgba(30, 30, 50, 0.6) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 24px;
            position: relative;
            overflow: hidden;
          }
          
          .error-content {
            text-align: center;
          }
          
          .error-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            opacity: 0.6;
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .error-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            color: #fca5a5;
            letter-spacing: 0.05em;
          }
        `}</style>
        
        <div className="error-state p-12">
          <div className="error-content">
            <div className="error-icon">📊</div>
            <p className="error-text">
              Analytics not available for this startup.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800&family=Inter:wght@400;500;600&family=Source+Code+Pro:wght@500;600&display=swap');
        
        .analytics-page {
          font-family: 'Inter', sans-serif;
        }
        
        .hero-header {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .hero-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
          background-size: 200% 100%;
          animation: gradient-scan 4s linear infinite;
        }
        
        @keyframes gradient-scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .hero-header:hover {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 
            0 25px 70px -20px rgba(59, 130, 246, 0.4),
            0 0 0 1px rgba(59, 130, 246, 0.1) inset;
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #93c5fd;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: 'Source Code Pro', monospace;
          margin-bottom: 1.25rem;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 12px #22c55e;
          animation: pulse-status 2s ease-in-out infinite;
        }
        
        @keyframes pulse-status {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        .page-title {
          font-family: 'Exo 2', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #e0e7ff;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        
        .startup-highlight {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .page-subtitle {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 42rem;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .section-container {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(30, 30, 50, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-container:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 20px 50px -15px rgba(59, 130, 246, 0.3);
        }
        
        .section-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.5) 50%, 
            transparent 100%
          );
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-bottom: 1.5rem;
        }
        
        .section-icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 14px;
          font-size: 1.5rem;
          position: relative;
        }
        
        .section-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .section-container:hover .section-icon-wrapper::before {
          opacity: 0.3;
        }
        
        .section-title {
          font-family: 'Exo 2', sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #e0e7ff;
          flex: 1;
        }
        
        .live-badge {
          font-size: 0.7rem;
          padding: 0.375rem 0.875rem;
          background: rgba(34, 197, 94, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 9999px;
          color: #86efac;
          font-family: 'Source Code Pro', monospace;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .divider-line {
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.3) 50%, 
            transparent 100%
          );
          margin: 2.5rem 0;
        }
        
        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        
        .accent-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          animation: float-orb 10s ease-in-out infinite;
        }
        
        .orb-1 {
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          bottom: -150px;
          left: -100px;
          animation-delay: 3s;
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        
        .fade-in {
          animation: fade-in 0.7s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
      `}</style>

      <div className="analytics-page space-y-10">
        {/* Hero Header */}
        <div className="hero-header p-8 fade-in delay-1">
          <div className="grid-background"></div>
          <div className="accent-orb orb-1"></div>
          
          <div className="relative z-10">
            <div className="header-badge">
              <span className="status-indicator"></span>
              ANALYTICS DASHBOARD
            </div>
            
            <h1 className="page-title">
              Analytics — <span className="startup-highlight">{startup.name}</span>
            </h1>
            
            <p className="page-subtitle">
              Measure execution, validation, and progress toward readiness. Track key performance indicators and visualize your startup's growth trajectory in real-time.
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <section className="fade-in delay-2">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-xl font-semibold text-white" style={{fontFamily: "'Exo 2', sans-serif"}}>
                Key Performance Metrics
              </h2>
            </div>
            <div className="divider-line"></div>
          </div>
          
          <div className="metrics-grid">
            <div className="fade-in delay-2">
              <AnalyticsCard
                title="Total Tasks"
                value={analytics.totalTasks}
              />
            </div>
            
            <div className="fade-in delay-3">
              <AnalyticsCard
                title="Tasks Completed"
                value={analytics.tasksCompleted}
                trend={analytics.taskCompletionTrend}
                trendLabel="since last period"
              />
            </div>
            
            <div className="fade-in delay-3">
              <AnalyticsCard
                title="Milestones Achieved"
                value={analytics.milestonesCompleted}
              />
            </div>
            
            <div className="fade-in delay-4">
              <AnalyticsCard
                title="Validation Score"
                value={`${analytics.validationScore}%`}
              />
            </div>
          </div>
        </section>

        {/* Execution Trend Chart */}
        <section className="section-container p-8 fade-in delay-4">
          <div className="grid-background"></div>
          <div className="accent-orb orb-2"></div>
          
          <div className="relative z-10">
            <div className="section-header">
              <div className="section-icon-wrapper">
                📈
              </div>
              <h2 className="section-title">
                Execution Progress
              </h2>
              <span className="live-badge">
                LIVE
              </span>
            </div>
            
            <ProgressChart
              data={analytics.progressTimeline}
              label="Completed Tasks Over Time"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsPage;