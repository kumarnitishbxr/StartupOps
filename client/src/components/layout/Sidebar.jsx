import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import clsx from "clsx";

const Sidebar = () => {
  const { user } = useAuth();

  const links = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Tasks", path: "/tasks" },
    { label: "Milestones", path: "/milestones" },
    { label: "Feedback", path: "/feedback" },
  ];

  if (user?.globalRole === "FOUNDER") {
    links.push(
      { label: "Analytics", path: "/analytics" },
      { label: "Team", path: "/team" }
    );
  }

  return (
    <aside className="w-60 h-screen bg-gray-50 border-r p-4">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "block px-4 py-2 rounded-md text-sm",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                )
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
