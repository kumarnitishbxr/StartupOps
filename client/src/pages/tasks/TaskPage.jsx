// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import TaskCard from "../../components/tasks/TaskCard";
// import TaskForm from "../../components/tasks/TaskForm";
// import Loader from "../../components/common/Loader";
// import { getStartupById } from "../../API/startupapi";

// const TasksPage = () => {
//   const { startupId } = useParams();

//   const [startup, setStartup] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadStartup = async () => {
//     setLoading(true);
//     try {
//       const data = await getStartupById(startupId);
//       setStartup(data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadStartup();
//   },[startupId]);

//   if (loading) return <Loader />;

//   if (!startup) {
//     return (
//       <p className="text-sm text-gray-500">
//         Startup not found or access denied.
//       </p>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h1 className="text-2xl font-semibold">
//           Tasks — {startup.name}
//         </h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Break down execution into actionable steps.
//         </p>
//       </div>

//       {/* Create Task */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-lg font-medium mb-3">
//           Create New Task
//         </h2>
//         <TaskForm startupId={startup._id} onSuccess={loadStartup} />
//       </div>

//       {/* Task List */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-lg font-medium mb-3">
//           All Tasks
//         </h2>
//         <TaskCard startupId={startup._id} />
//       </div>
//     </div>
//   );
// };

// export default TasksPage;




import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../../components/tasks/TaskCard";
import TaskForm from "../../components/tasks/TaskForm";
import Loader from "../../components/common/Loader";
import { getStartupById } from "../../API/startupapi";

const TasksPage = () => {
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
  }, [startupId]);

  if (loading) return <Loader />;

  if (!startup) {
    return (
      <>
        <style jsx>{`
          .error-container {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
            border-radius: 24px;
            border: 1px solid rgba(239, 68, 68, 0.3);
            padding: 3rem;
          }
          
          .error-content {
            text-align: center;
          }
          
          .error-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            filter: grayscale(100%);
            opacity: 0.5;
          }
          
          .error-text {
            font-family: 'Space Mono', monospace;
            font-size: 0.875rem;
            color: #94a3b8;
            letter-spacing: 0.05em;
          }
        `}</style>
        
        <div className="error-container">
          <div className="error-content">
            <div className="error-icon">🚫</div>
            <p className="error-text">
              STARTUP_NOT_FOUND // ACCESS_DENIED
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        
        .tasks-page-container {
          font-family: 'Inter', sans-serif;
          position: relative;
        }
        
        .page-header {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
          background-size: 200% 100%;
          animation: gradient-flow 3s linear infinite;
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .page-header:hover {
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 20px 60px -15px rgba(139, 92, 246, 0.3);
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 9999px;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: #a78bfa;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .badge-indicator {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px #22c55e;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
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
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #e0e7ff;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        
        .startup-name {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .page-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        
        .section-card {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(30, 30, 50, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .section-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }
        
        .section-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 15px 40px -10px rgba(139, 92, 246, 0.2);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .section-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 12px;
          font-size: 1.25rem;
        }
        
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #c4b5fd;
          letter-spacing: 0.02em;
        }
        
        .section-divider {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, 
            rgba(139, 92, 246, 0.3) 0%, 
            transparent 100%
          );
        }
        
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
        
        .fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        .accent-corner {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .corner-tl { top: 0; left: 0; }
        .corner-br { bottom: 0; right: 0; }
      `}</style>

      <div className="tasks-page-container space-y-8">
        {/* Header */}
        <div className="page-header fade-in delay-100">
          <div className="header-badge">
            <span className="badge-indicator"></span>
            Task Management
          </div>
          
          <h1 className="page-title">
            Tasks — <span className="startup-name">{startup.name}</span>
          </h1>
          
          <p className="page-subtitle">
            Break down execution into actionable steps.
          </p>
        </div>

        {/* Create Task Section */}
        <div className="section-card fade-in delay-200">
          <div className="accent-corner corner-tl"></div>
          
          <div className="section-header">
            <div className="section-icon">✨</div>
            <h2 className="section-title">Create New Task</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="content-wrapper">
            <TaskForm startupId={startup._id} onSuccess={loadStartup} />
          </div>
        </div>

        {/* Task List Section */}
        <div className="section-card fade-in delay-300">
          <div className="accent-corner corner-br"></div>
          
          <div className="section-header">
            <div className="section-icon">📋</div>
            <h2 className="section-title">All Tasks</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="content-wrapper">
            <TaskCard startupId={startup._id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksPage;