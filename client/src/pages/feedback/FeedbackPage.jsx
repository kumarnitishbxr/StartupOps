// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { getStartupById } from "../../API/startupapi";
// import FeedbackForm from "../../components/feedback/FeedbackForm";
// import FeedbackList from "../../components/feedback/FeedbackList";
// import Loader from "../../components/common/Loader";

// const FeedbackPage = () => {
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
//   });

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
//           Feedback & Validation — {startup.name}
//         </h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Collect insights to validate ideas and guide iteration.
//         </p>
//       </div>

//       {/* Submit Feedback */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-lg font-medium mb-3">
//           Submit Feedback
//         </h2>
//         <FeedbackForm startupId={startup._id} onSuccess={loadStartup} />
//       </div>

//       {/* Feedback List */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-lg font-medium mb-3">
//           Collected Feedback
//         </h2>
//         <FeedbackList startupId={startup._id} />
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;




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
  }, []);

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
            background: linear-gradient(135deg, rgba(15, 15, 35, 0.6) 0%, rgba(30, 30, 50, 0.6) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 24px;
            position: relative;
            overflow: hidden;
          }
          
          .error-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            opacity: 0.5;
          }
          
          .error-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            color: #fca5a5;
            text-align: center;
          }
        `}</style>
        
        <div className="error-container p-12">
          <div className="text-center">
            <div className="error-icon">⚠️</div>
            <p className="error-text">
              Startup not found or access denied.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .feedback-page {
          font-family: 'Inter', sans-serif;
        }
        
        .page-header {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 24px;
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
          padding: 0.375rem 0.875rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 1rem;
        }
        
        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #a78bfa;
          border-radius: 50%;
          box-shadow: 0 0 8px #a78bfa;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
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
        
        .page-description {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .section-card {
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(30, 30, 50, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 15px 40px -10px rgba(139, 92, 246, 0.25);
        }
        
        .section-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.4) 50%, 
            transparent 100%
          );
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
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
          color: #e0e7ff;
          flex: 1;
        }
        
        .section-count {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 9999px;
          color: #c4b5fd;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.3) 50%, 
            transparent 100%
          );
          margin: 2rem 0;
        }
        
        .fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fade-in {
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
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
      `}</style>

      <div className="feedback-page space-y-8">
        {/* Header */}
        <div className="page-header p-8 fade-in delay-100">
          <div className="grid-overlay"></div>
          <div className="relative z-10">
            <div className="header-badge">
              <span className="pulse-dot"></span>
              FEEDBACK SYSTEM
            </div>
            
            <h1 className="page-title">
              Feedback & Validation — <span className="startup-name">{startup.name}</span>
            </h1>
            
            <p className="page-description">
              Collect insights to validate ideas and guide iteration. Gather feedback from users, stakeholders, and team members to make data-driven decisions.
            </p>
          </div>
        </div>

        {/* Submit Feedback Section */}
        <div className="section-card p-8 fade-in delay-200">
          <div className="grid-overlay"></div>
          <div className="relative z-10">
            <div className="section-header">
              <div className="section-icon">
                ✍️
              </div>
              <h2 className="section-title">
                Submit Feedback
              </h2>
            </div>
            
            <FeedbackForm startupId={startup._id} onSuccess={loadStartup} />
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Feedback List Section */}
        <div className="section-card p-8 fade-in delay-300">
          <div className="grid-overlay"></div>
          <div className="relative z-10">
            <div className="section-header">
              <div className="section-icon">
                💬
              </div>
              <h2 className="section-title">
                Collected Feedback
              </h2>
              <span className="section-count">
                ACTIVE
              </span>
            </div>
            
            <FeedbackList startupId={startup._id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackPage;