import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { StartupProvider } from "./context/StartupContext";

import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";
import Home from "./components/pages/Home";
 import DashboardPage from "./components/pages/DashboradPage";

function App() {
  // const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // if (loading) {
  //   return <div className="text-white text-center mt-20">Checking auth...</div>;
  // }

  return (
    // <Router>
    //   <Routes>
    //     {/* <Route
    //       path="/"
    //       element={isAuthenticated ? <Home/> : <Navigate to="/login" />}
    //     />
    //     <Route
    //       path="/login"
    //       element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
    //     />
    //     <Route
    //       path="/signup"
    //       element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
    //     /> */}
    //     <Route path="/dashboard" element={<DashboardPage></DashboardPage>}>
        
    //     </Route>
    //   </Routes>
    // </Router>
    <DashboardPage></DashboardPage>
  );
}

export default App;


