// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const ProgressChart = ({
//   data,
//   xKey = "date",
//   yKey = "completedTasks",
//   label = "Tasks Completed",
// }) => {
//   return (
//     <div className="bg-white p-5 rounded-lg shadow">
//       <h3 className="text-sm font-medium mb-4 text-gray-600">
//         {label}
//       </h3>

//       <ResponsiveContainer width="100%" height={260}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey={xKey} />
//           <YAxis />

//           <Tooltip />

//           <Line
//             type="monotone"
//             dataKey={yKey}
//             strokeWidth={2}
//             dot={{ r: 4 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ProgressChart;



import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProgressChart = ({
  data,
  xKey = "date",
  yKey = "completedTasks",
  label = "Tasks Completed",
}) => {
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-value">
            {payload[0].value} tasks
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .chart-container {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .chart-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
          background-size: 200% 100%;
          animation: gradient-slide 3s linear infinite;
        }
        
        @keyframes gradient-slide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .chart-container:hover {
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 
            0 20px 60px -15px rgba(139, 92, 246, 0.3),
            0 0 0 1px rgba(139, 92, 246, 0.1) inset;
        }
        
        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        
        .chart-title {
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #c4b5fd;
          font-family: 'JetBrains Mono', monospace;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .chart-title::before {
          content: '';
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        .chart-badge {
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 9999px;
          color: #a78bfa;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
        }
        
        .chart-wrapper {
          position: relative;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.1);
        }
        
        .chart-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          border-radius: 12px;
        }
        
        /* Custom Tooltip Styles */
        .custom-tooltip {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.4);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .tooltip-label {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 0.25rem;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .tooltip-value {
          font-size: 1.125rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Recharts Custom Styles */
        .recharts-cartesian-grid-horizontal line,
        .recharts-cartesian-grid-vertical line {
          stroke: rgba(139, 92, 246, 0.1);
          stroke-dasharray: 3 3;
        }
        
        .recharts-text {
          fill: #94a3b8;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .recharts-line-curve {
          filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.5));
        }
        
        .recharts-dot {
          filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.6));
        }
        
        .metric-stats {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .stat-item {
          flex: 1;
        }
        
        .stat-label {
          font-size: 0.65rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #e0e7ff;
        }
      `}</style>

      <div className="chart-container p-6 rounded-2xl">
        {/* Header */}
        <div className="chart-header">
          <h3 className="chart-title">
            {label}
          </h3>
          <span className="chart-badge">
            LIVE DATA
          </span>
        </div>

        {/* Chart */}
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" />
              
              <XAxis 
                dataKey={xKey}
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
                tickLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
              />
              
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
                tickLine={{ stroke: 'rgba(139, 92, 246, 0.2)' }}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              <Line
                type="monotone"
                dataKey={yKey}
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ 
                  r: 5, 
                  fill: '#8b5cf6',
                  stroke: '#fff',
                  strokeWidth: 2
                }}
                activeDot={{ 
                  r: 7,
                  fill: '#ec4899',
                  stroke: '#fff',
                  strokeWidth: 2
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Footer */}
        {data && data.length > 0 && (
          <div className="metric-stats">
            <div className="stat-item">
              <div className="stat-label">Total Points</div>
              <div className="stat-value">{data.length}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Latest</div>
              <div className="stat-value">
                {data[data.length - 1]?.[yKey] || 0}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Peak</div>
              <div className="stat-value">
                {Math.max(...data.map(d => d[yKey] || 0))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProgressChart;