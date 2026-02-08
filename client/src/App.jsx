// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Dashboard from "./pages/dashboard/Dashboard";
// import Home from "./pages/Home";
// import LoginPage from "./pages/auth/Login";
// import RegisterPage from "./pages/auth/Register";
// import { checkAuth } from "./features/authSlice";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from './components/layout/Sidebar'
// import MilestoneForm from "./components/milestones/MilestoneForm";

// const AppLayout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// function App() {
//   const dispatch = useDispatch();
//   const { isAuthenticated, loading } = useSelector((state) => state.auth);

//   // ✅ Auth bootstrap (runs once)
//   useEffect(() => {
//     dispatch(checkAuth());
//   }, [dispatch]);

//   if (loading) {
//     return <div className="text-white text-center mt-20">Checking auth...</div>;
//   }


//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={isAuthenticated ? <Dashboard/> : <Navigate to="/login" replace />}
//       />

//       <Route
//         path="/login"
//         element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />}
//       />


//       <Route
//           element={
        
//               <AppLayout />

//           }
//         />
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//       <Route
//         path="/signup"
//         element={isAuthenticated ? <Navigate to="/" replace /> : <RegisterPage />}
//       />
//     </Routes>
//   );
// }

// export default App;




// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Dashboard from "./pages/dashboard/Dashboard";
// import Home from "./pages/Home";
// import LoginPage from "./pages/auth/Login";
// import RegisterPage from "./pages/auth/Register";
// import MilestoneForm from "./components/milestones/MilestoneForm";
// import { checkAuth } from "./features/authSlice";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from "./components/layout/Sidebar";
// import TasksPage from './pages/tasks/TaskPage'
// import FeedbackPage from "./pages/feedback/FeedbackPage";
// import AnalyticsPage from "./pages/analytics/AnalyticsPage";
// import CreateStartup from "./pages/startup/CreateStartup";
// import StartupWorkspace from "./pages/startup/StartupWorkspace";

// const AppLayout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// function App() {
//   const dispatch = useDispatch();
//   const { isAuthenticated, loading } = useSelector((state) => state.auth);

//   // Bootstrap auth
//   useEffect(() => {
//     dispatch(checkAuth());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-gray-700 text-lg">
//         Checking authentication...
//       </div>
//     );
//   }

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route
//         path="/login"
//         element={
//           isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
//         }
//       />
//       <Route
//         path="/signup"
//         element={
//           isAuthenticated ? <Navigate to="/" replace /> : <RegisterPage />
//         }
//       />

//       {/* Protected Routes */}
//       <Route
//         path="/*"
//         element={
//           <ProtectedRoute isAuthenticated={isAuthenticated}>
//             <AppLayout>
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/milestones/new" element={<MilestoneForm />} />
//                 <Route path="/tasks/:startupId" element={<TasksPage />} />
//                 <Route
//                   path="/feedback/:startupId"
//                   element={<FeedbackPage />}
//                 />
//                 <Route
//                   path="/analytics/:startupId"
//                   element={<AnalyticsPage />}
//                 />
//                 <Route path="/startup/create" element={<CreateStartup />} />
//                 <Route
//                   path="/startup/:startupId"
//                   element={<StartupWorkspace />}
//                 />
//                 {/* Catch-all redirect */}
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </Routes>
//             </AppLayout>
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;





import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import MilestoneForm from "./components/milestones/MilestoneForm";
import { checkAuth } from "./features/authSlice";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import TasksPage from './pages/tasks/TaskPage'
import FeedbackPage from "./pages/feedback/FeedbackPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateStartup from "./pages/startup/CreateStartup";
import StartupWorkspace from "./pages/startup/StartupWorkspace";
import FeedbackForm from "./components/feedback/FeedbackForm";
import TaskForm from "./components/tasks/TaskForm";
import Pricing from "./pages/Pricing";
import LandingPage from "./pages/landing/LandingPage";

const AppLayout = ({ children }) => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        
        .app-container {
          font-family: 'Manrope', sans-serif;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
        }
        
        .main-content {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .content-wrapper {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          min-height: calc(100vh - 80px);
          position: relative;
          overflow: hidden;
        }
        
        .content-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
          pointer-events: none;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          bottom: -150px;
          left: -150px;
          animation-delay: 5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }
      `}</style>
      
      <div className="app-container flex min-h-screen">
        {/* Sidebar */}
        <div className="relative z-20">
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <div className="main-content flex-1 relative">
          {/* Navbar */}
          <div className="sticky top-0 z-10 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
            <Navbar />
          </div>
          
          {/* Content */}
          <div className="content-wrapper relative">
            {/* Floating Orbs */}
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            
            {/* Main Content */}
            <main className="relative z-10 p-8">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

// Protected Route wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // Bootstrap auth
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
          
          .loading-screen {
            background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
            font-family: 'JetBrains Mono', monospace;
          }
          
          .loading-spinner {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(139, 92, 246, 0.1);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .loading-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          .loading-text {
            background: linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s linear infinite;
          }
          
          @keyframes shimmer {
            to {
              background-position: 200% center;
            }
          }
        `}</style>
        
        <div className="loading-screen flex flex-col justify-center items-center h-screen">
          <div className="loading-spinner mb-6"></div>
          <div className="text-center space-y-2">
            <p className="loading-text text-xl font-semibold tracking-wide">
              Authenticating
            </p>
            <div className="flex gap-1 justify-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full loading-pulse" style={{animationDelay: '0s'}}></span>
              <span className="w-2 h-2 bg-purple-500 rounded-full loading-pulse" style={{animationDelay: '0.2s'}}></span>
              <span className="w-2 h-2 bg-purple-500 rounded-full loading-pulse" style={{animationDelay: '0.4s'}}></span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
        }
      />
      <Route
        path="/signup"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <RegisterPage />
        }
      />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AppLayout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/milestones" element={<MilestoneForm />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route
                  path="/feedback"
                  element={<FeedbackForm />}
                />
                <Route
                  path="/analytics"
                  element={<AnalyticsPage />}
                  
                />
                <Route
                  path="/pricing"
                  element={<Pricing />}
                />
                <Route path="/startup/create" element={<CreateStartup />} />
                <Route
                  path="/startup"
                  element={<StartupWorkspace />}
                />
                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;