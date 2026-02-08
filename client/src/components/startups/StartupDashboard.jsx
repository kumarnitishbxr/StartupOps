import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

// import StartupFinance from "./finance/StartupFinance"
import { fetchStartupById } from "../../stores/startupSlice";

// Finance Module
import { StartupFinanceProvider } from "./finance/StartupFinanceContext";
import StartupFinance from "./finance/StartupFinance";

const StartupDashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("overview");

  const { current, loading, error } = useSelector(
    (state) => state.startup
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchStartupById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading Startup Data...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Failed to load startup details.
      </div>
    );
  }

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2>No Startup Found</h2>
      </div>
    );
  }

  return (
    <StartupFinanceProvider>
      <div className="min-h-screen bg-gray-50 p-6">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-md border mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800">
            {current.name}
          </h1>

          <p className="mt-2 text-gray-600">
            {current.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="border p-4 rounded-xl bg-blue-50"
            >
              <span className="font-semibold">Industry:</span> {current.industry}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="border p-4 rounded-xl bg-green-50"
            >
              <span className="font-semibold">Stage:</span> {current.stage}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="border p-4 rounded-xl bg-purple-50"
            >
              <span className="font-semibold">Created:</span>{" "}
              {new Date(current.createdAt).toDateString()}
            </motion.div>

          </div>
        </motion.div>

        {/* TAB NAVIGATION */}
        <div className="bg-white rounded-xl shadow border p-3 mb-6">
          <div className="flex flex-wrap gap-3">

            {["overview", "finance"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab === "overview" ? "Overview" : "Expenditure Tracker"}
              </motion.button>
            ))}

          </div>
        </div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">

          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="bg-white rounded-xl p-6 shadow border"
            >

              <h3 className="text-xl font-bold mb-4">
                Startup Overview
              </h3>

              {current.workspaceSettings && (
                <div className="border p-4 rounded-xl bg-gray-50">
                  <h4 className="font-bold mb-2">Workspace Settings</h4>

                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Editable:</span>{" "}
                      {current.workspaceSettings.isEditable
                        ? "Yes"
                        : "No"}
                    </p>

                    <p>
                      <span className="font-semibold">
                        External Feedback:
                      </span>{" "}
                      {current.workspaceSettings.allowExternalFeedback
                        ? "Enabled"
                        : "Disabled"}
                    </p>
                  </div>
                </div>
              )}

            </motion.div>
          )}

          {activeTab === "finance" && (
            <motion.div
              key="finance"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <StartupFinance startup={current} />
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </StartupFinanceProvider>
  );
};

export default StartupDashboard;
