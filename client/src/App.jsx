// import React from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";




// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/Register";
// import Home from "./pages/Home";
// import LandingPage from "./components/landing/LandingPage";
// import StartupList from "./components/startups/StartupList";
// function App() {
//   const { isAuthenticated, loading } = useSelector((state) => state.auth);

//   if (loading) {
//     return <div className="text-white text-center mt-20">Checking auth...</div>;
//   }

//   return (
//     <>
    
//     <Router>
//       <Routes>
//         {/* <Route
//           path="/"
//           element={isAuthenticated ? <Home/> : <Navigate to="/login" />}
//         /> */}
//         {/* <Route
//           path="/login"
//           element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
//         />
//         <Route
//           path="/signup"
//           element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
//         /> */}
//         <Route path="/" element={<LandingPage />} />
//    {/* <Route path="/login" element={<Login />} /> */}
//    <Route path="/startups" element={<StartupList />} />

//       </Routes>
//     </Router>
//     <ToastContainer position="top-right" autoClose={3000}/>
//     </>
    
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./components/landing/LandingPage";
// import LoginPage from "./components/pages/Login";
// import RegisterPage from "./components/pages/Register";
import StartupList from "./components/startups/StartupList";
import CreateStartup from "./components/startups/CreateStartup";
import StartupDashboard from "./components/startups/StartupDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} /> */}

          <Route path="/startups" element={<StartupList />} />
          <Route path="/startups/create" element={<CreateStartup />} />
          <Route path="/startups/:id" element={<StartupDashboard />} />

        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
