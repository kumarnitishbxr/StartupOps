import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Landing & Auth Pages */
import LandingPage from "./components/landing/LandingPage";
// import LoginPage from "./components/pages/Login";
// import RegisterPage from "./components/pages/Register";

/* Startup Pages */
import StartupList from "./components/startups/StartupList";
import CreateStartup from "./components/startups/CreateStartup";
import StartupDashboard from "./components/startups/StartupDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} /> */}

          {/* Startup Routes */}
          <Route path="/startups" element={<StartupList />} />
          <Route path="/startups/create" element={<CreateStartup />} />
          <Route path="/startups/:id" element={<StartupDashboard />} />

        </Routes>
      </Router>

      {/* Global Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
