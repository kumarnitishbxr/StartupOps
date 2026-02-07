import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";



import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import Home from "./pages/Home";
import api from "./API/authapi";



function App() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div className="text-white text-center mt-20">Checking auth...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard/> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
        />
      </Routes>
    </Router>
  );


}


export default App;




// import React from "react";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import useAuth from "./hooks/useAuth";
// import ProtectedRoute from "./components/layout/ProtectedRoute";
// import Navbar from './components/layout/Navbar'
// import Sidebar from "./components/layout/Sidebar";
// import Loader from "./components/common/Loader";

// /* Pages */
// import Dashboard from "./pages/Dashboard";
// import CreateStartup from "./pages/startup/CreateStartup";
// import StartupWorkspace from "./pages/startup/StartupWorkspace";
// import TasksPage from "./pages/tasks/TaskPage";
// import FeedbackPage from "./pages/feedback/FeedbackPage";
// import AnalyticsPage from "./pages/analytics/AnalyticsPage";



// // const AppLayout = ({ children }) => {
// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <Sidebar />
// //       <div className="flex-1">
// //         <Navbar />
// //         <main className="p-6">{children}</main>
// //       </div>
// //     </div>
// //   );
// // };
// import Home from './pages/Home'

// const App = () => {
//   // const { loading, authenticated } = useAuth();

//   // if (loading) return <Loader fullScreen />;

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route
//           path="/"
//           element={
//             authenticated ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />

//         <Route
//           element={<ProtectedRoute authenticated={authenticated} />}
//         >
//           <Route element={<AppLayout />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/startup/create" element={<CreateStartup />} />
//             <Route path="/startup/:startupId" element={<StartupWorkspace />} />
//             <Route path="/startup/:startupId/tasks" element={<TasksPage />} />
//             <Route path="/startup/:startupId/feedback" element={<FeedbackPage />} />
//             <Route path="/startup/:startupId/analytics" element={<AnalyticsPage />} />
//           </Route>
//         </Route> */}

//         {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

//         <Route path="/" element={<Home/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
