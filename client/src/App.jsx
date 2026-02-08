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

/* FINANCE MODULE IMPORTS */
import { FinanceProvider } from "./pages/finance/FinanceContext";
import FinanceDashboard from "./pages/finance/FinanceDashboard";

function App() {
  return (
    <>
      <FinanceProvider>
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

            {/* NEW FINANCE ROUTE */}
            <Route path="/finance" element={<FinanceDashboard />} />

          </Routes>
        </Router>
      </FinanceProvider>

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
