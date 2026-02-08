// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../common/Button";
// import { logoutUser } from "../../features/authSlice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// const Navbar = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//  const {user} = useSelector(s=>s.auth)
//   const handleLogout = () => {
//     dispatch(logoutUser())
//   };

//   return (
//     <nav className="h-14 bg-white border-b px-6 flex items-center justify-between">
//       <h1
//         className="text-lg font-semibold cursor-pointer"
//         onClick={() => navigate("/dashboard")}
//       >
//         StartupOps
//       </h1>

//       <div className="flex items-center gap-4">
//         <span className="text-sm text-gray-600">
//           {user?.name}
//         </span>

//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={handleLogout}
//         >
//           Logout
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { logoutUser } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(s => s.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .navbar-container {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          position: relative;
          z-index: 50;
        }
        
        .navbar-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.5) 50%, 
            transparent 100%
          );
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .brand-logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.05em;
        }
        
        .brand-logo::before {
          content: '◆';
          position: absolute;
          left: -1.5rem;
          color: #8b5cf6;
          animation: rotate-diamond 4s linear infinite;
        }
        
        @keyframes rotate-diamond {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        
        .brand-logo:hover {
          filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
          transform: translateY(-1px);
        }
        
        .user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          color: white;
          border: 2px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .user-avatar:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
          border-color: rgba(139, 92, 246, 0.6);
        }
        
        .user-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #c4b5fd;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .user-name-text {
          color: #e0e7ff;
        }
        
        .user-status {
          font-size: 0.65rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .status-indicator {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-status 2s ease-in-out infinite;
        }
        
        @keyframes pulse-status {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .logout-button-wrapper {
          position: relative;
        }
        
        .nav-divider {
          width: 1px;
          height: 24px;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.3) 50%, 
            transparent 100%
          );
        }
        
        .quick-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .action-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          color: #a78bfa;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }
        
        .action-icon:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
          color: #c4b5fd;
          transform: translateY(-2px);
        }
        
        @media (max-width: 640px) {
          .user-name {
            display: none;
          }
          .quick-actions {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar-container h-16 px-6 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-8">
          <h1
            className="brand-logo"
            onClick={() => navigate("/dashboard")}
          >
            StartupOps
          </h1>
          <h3
            className="brand-logo"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </h3>
          
          {/* Quick Actions */}
          <div className="quick-actions">
            <button 
              className="action-icon"
              title="Dashboard"
              onClick={() => navigate("/dashboard")}
            >
              📊
            </button>
            <button 
              className="action-icon"
              title="Notifications"
            >
              🔔
            </button>
            <button 
              className="action-icon"
              title="Settings"
            >
              ⚙️
            </button>
          </div>
        </div>

        {/* Right Section - User Profile */}
        <div className="user-profile">
          {/* User Info */}
          
          <div className="user-name">
            <span className="user-name-text">
              {user?.name || "User"}
            </span>
            <span className="user-status">
              <span className="status-indicator"></span>
              Online
            </span>
          </div>

          {/* Avatar */}
          <div className="user-avatar" title={user?.name}>
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          {/* Divider */}
          <div className="nav-divider"></div>

          {/* Logout Button */}
          <div className="logout-button-wrapper">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;