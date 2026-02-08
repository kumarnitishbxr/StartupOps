// import React from "react";
// import clsx from "clsx";

// const AnalyticsCard = ({
//   title,
//   value,
//   subtitle,
//   trend,        // number (optional)
//   trendLabel,   // "vs last week" (optional)
//   loading = false,
// }) => {
//   if (loading) {
//     return (
//       <div className="p-5 bg-white rounded-lg shadow animate-pulse h-28" />
//     );
//   }

//   return (
//     <div className="p-5 bg-white rounded-lg shadow">
//       <p className="text-sm text-gray-500">{title}</p>

//       <h3 className="text-2xl font-semibold mt-1">
//         {value}
//       </h3>

//       {subtitle && (
//         <p className="text-xs text-gray-400 mt-1">
//           {subtitle}
//         </p>
//       )}

//       {trend !== undefined && (
//         <div className="mt-2 text-xs flex items-center gap-1">
//           <span
//             className={clsx(
//               trend >= 0 ? "text-green-600" : "text-red-600"
//             )}
//           >
//             {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
//           </span>
//           <span className="text-gray-400">
//             {trendLabel}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnalyticsCard;



import React from "react";
import clsx from "clsx";

const AnalyticsCard = ({
  title,
  value,
  subtitle,
  trend,        // number (optional)
  trendLabel,   // "vs last week" (optional)
  loading = false,
}) => {
  if (loading) {
    return (
      <>
        <style jsx>{`
          .loading-card {
            background: linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(30, 30, 50, 0.8) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(139, 92, 246, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .loading-shimmer {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(139, 92, 246, 0.2) 50%, 
              transparent 100%
            );
            animation: shimmer 2s infinite;
          }
          
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}</style>
        
        <div className="loading-card p-6 rounded-2xl h-32 relative">
          <div className="loading-shimmer"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        .analytics-card {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(30, 30, 50, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .analytics-card::before {
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
        
        .analytics-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 
            0 20px 40px -15px rgba(139, 92, 246, 0.4),
            0 0 0 1px rgba(139, 92, 246, 0.1) inset;
        }
        
        .analytics-card:hover .value-display {
          color: #c4b5fd;
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        .card-title {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          font-family: 'Space Mono', monospace;
        }
        
        .value-display {
          font-size: 2rem;
          font-weight: 700;
          color: #e0e7ff;
          transition: all 0.3s ease;
          line-height: 1.2;
        }
        
        .subtitle-text {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 400;
        }
        
        .trend-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: 'Space Mono', monospace;
          backdrop-filter: blur(10px);
          border: 1px solid;
        }
        
        .trend-positive {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #4ade80;
        }
        
        .trend-negative {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          color: #f87171;
        }
        
        .trend-arrow {
          font-size: 0.875rem;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        .trend-label {
          color: #64748b;
          font-size: 0.7rem;
          font-family: 'Space Mono', monospace;
        }
        
        .metric-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          opacity: 0.6;
        }
      `}</style>
      
      <div className="analytics-card p-6 rounded-2xl relative group">
        {/* Decorative Icon */}
        <div className="metric-icon">
          <span>📊</span>
        </div>
        
        {/* Title */}
        <p className="card-title mb-3">
          {title}
        </p>
        
        {/* Main Value */}
        <h3 className="value-display mb-2">
          {value}
        </h3>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="subtitle-text mb-3">
            {subtitle}
          </p>
        )}
        
        {/* Trend Indicator */}
        {trend !== undefined && (
          <div className="flex items-center gap-2 mt-4">
            <span
              className={clsx(
                "trend-badge",
                trend >= 0 ? "trend-positive" : "trend-negative"
              )}
            >
              <span className="trend-arrow">
                {trend >= 0 ? "↗" : "↘"}
              </span>
              {Math.abs(trend)}%
            </span>
            
            {trendLabel && (
              <span className="trend-label">
                {trendLabel}
              </span>
            )}
          </div>
        )}
        
        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>
    </>
  );
};

export default AnalyticsCard;