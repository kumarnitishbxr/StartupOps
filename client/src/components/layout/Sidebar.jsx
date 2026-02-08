// import React from "react";
// import { NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import clsx from "clsx";

// const Sidebar = () => {
//   const { user } = useAuth();

//   const links = [
//     { label: "Dashboard", path: "/dashboard" },
//     { label: "Tasks", path: "/tasks" },
//     { label: "Milestones", path: "/milestones" },
//     { label: "Feedback", path: "/feedback" },
//   ];

//   if (user?.globalRole === "FOUNDER") {
//     links.push(
//       { label: "Analytics", path: "/analytics" },
//       { label: "Team", path: "/team" }
//     );
//   }

//   return (
//     <aside className="w-60 h-screen bg-gray-50 border-r p-4">
//       <ul className="space-y-2">
//         {links.map((link) => (
//           <li key={link.path}>
//             <NavLink
//               to={link.path}
//               className={({ isActive }) =>
//                 clsx(
//                   "block px-4 py-2 rounded-md text-sm",
//                   isActive
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-700 hover:bg-gray-200"
//                 )
//               }
//             >
//               {link.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;




import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import clsx from "clsx";

const Sidebar = () => {
  const { user } = useAuth();

  const links = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Tasks", path: "/tasks", icon: "✓" },
    { label: "Milestones", path: "/milestones", icon: "🎯" },
    { label: "Feedback", path: "/feedback", icon: "💬" },
  ];

  if (user?.globalRole === "FOUNDER") {
    links.push(
      { label: "Analytics", path: "/analytics", icon: "📈" },
      { label: "Team", path: "/team", icon: "👥" }
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        .sidebar-container {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.95) 0%, rgba(15, 15, 25, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(139, 92, 246, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .sidebar-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.6) 50%, 
            transparent 100%
          );
          animation: scan 4s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .sidebar-header {
          padding: 1.5rem 1rem;
          border-bottom: 1px solid rgba(139, 92, 246, 0.15);
          margin-bottom: 1.5rem;
        }
        
        .user-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .user-badge:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateX(2px);
        }
        
        .user-avatar-small {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          color: white;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }
        
        .user-info {
          flex: 1;
          min-width: 0;
        }
        
        .user-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #e0e7ff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .user-role {
          font-size: 0.65rem;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
        }
        
        .nav-list {
          list-style: none;
          padding: 0 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #8b5cf6, #ec4899);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        
        .nav-link-inactive {
          color: #94a3b8;
          background: transparent;
        }
        
        .nav-link-inactive:hover {
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.1);
          transform: translateX(4px);
        }
        
        .nav-link-inactive:hover::before {
          transform: scaleY(1);
        }
        
        .nav-link-active {
          color: white;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
          border: 1px solid rgba(139, 92, 246, 0.4);
          box-shadow: 
            0 4px 15px rgba(139, 92, 246, 0.2),
            0 0 0 1px rgba(139, 92, 246, 0.1) inset;
        }
        
        .nav-link-active::before {
          transform: scaleY(1);
        }
        
        .nav-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        
        .nav-link:hover .nav-icon {
          transform: scale(1.2);
        }
        
        .nav-label {
          flex: 1;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 0.02em;
        }
        
        .nav-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-link-active .nav-indicator {
          opacity: 1;
          animation: pulse-indicator 2s ease-in-out infinite;
        }
        
        @keyframes pulse-indicator {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .sidebar-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 1rem;
          border-top: 1px solid rgba(139, 92, 246, 0.15);
        }
        
        .version-info {
          text-align: center;
          font-size: 0.7rem;
          color: #64748b;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          opacity: 0.5;
        }
        
        .accent-glow {
          position: absolute;
          top: 50%;
          left: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          transform: translateY(-50%);
          pointer-events: none;
          animation: float-glow 8s ease-in-out infinite;
        }
        
        @keyframes float-glow {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(20px);
          }
        }
      `}</style>

      <aside className="sidebar-container w-60 h-screen relative">
        {/* Grid Pattern Background */}
        <div className="grid-pattern"></div>
        
        {/* Accent Glow */}
        <div className="accent-glow"></div>

        {/* User Badge Header */}
        <div className="sidebar-header relative z-10">
          <div className="user-badge">
            <div className="user-avatar-small">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div className="user-info">
              <div className="user-name">
                {user?.name || "User"}
              </div>
              <div className="user-role">
                {user?.globalRole || "Member"}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="relative z-10">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      "nav-link",
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    )
                  }
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-indicator"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer relative z-10">
          <div className="version-info">
            STARTUP OPS v2.0
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;