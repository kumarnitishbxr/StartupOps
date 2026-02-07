import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHome,
  FaLightbulb,
  FaTasks,
  FaChartPie,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    name: "My Startups",
    path: "/startups",
    icon: <FaLightbulb />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <FaTasks />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FaChartPie />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaUserCog />,
  },
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="h-screen w-64 bg-white border-r shadow fixed left-0 top-0 flex flex-col"
    >
      {/* Logo Section */}
      <div className="p-6 text-2xl font-bold text-blue-600 border-b">
        StartupOps
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 text-red-600 hover:bg-red-50 p-3 rounded-lg w-full">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
