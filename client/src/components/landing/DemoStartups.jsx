import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaLeaf,
  FaHeartbeat,
  FaFilter,
  FaExternalLinkAlt,
} from "react-icons/fa";

const demoData = [
  {
    name: "EduTech AI",
    industry: "Education",
    stage: "MVP",
    role: "Founder",
    icon: <FaRocket className="text-blue-600" />,
    description:
      "AI powered learning platform helping students prepare smarter.",
  },
  {
    name: "Greenify",
    industry: "Environment",
    stage: "Idea",
    role: "Student",
    icon: <FaLeaf className="text-green-600" />,
    description:
      "Sustainable lifestyle tracking app for reducing carbon footprint.",
  },
  {
    name: "HealthSync",
    industry: "Healthcare",
    stage: "Growth",
    role: "Mentor",
    icon: <FaHeartbeat className="text-red-600" />,
    description:
      "Digital healthcare record management for clinics and patients.",
  },
];

const DemoStartups = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? demoData
      : demoData.filter((d) => d.role === filter);

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white">

      {/* HEADER */}
      <div className="text-center mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-4"
        >
          Explore Demo Startups
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          See how StartupOps organizes real startup workflows with analytics,
          tasks and structured growth.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Founder", "Mentor", "Student"].map((r) => (
          <button
            key={r}
            onClick={() => setFilter(r)}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl transition ${
              filter === r
                ? "bg-blue-600 text-white"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaFilter size={12} />
            {r}
          </button>
        ))}
      </div>

      {/* CARDS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {filteredData.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition border border-gray-100 flex flex-col justify-between"
          >

            <div>
              {/* ICON */}
              <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 text-2xl">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold mb-1">
                {s.name}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {s.description}
              </p>

              <p className="text-gray-500">
                Industry: <span className="font-medium">{s.industry}</span>
              </p>

              <div className="mt-3 inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                Stage: {s.stage}
              </div>
            </div>

            {/* ACTION */}
            <div className="mt-6">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-xl hover:opacity-90 transition">
                View Demo
                <FaExternalLinkAlt size={12} />
              </button>
            </div>

          </motion.div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No demo startups available for this role.
        </p>
      )}

    </section>
  );
};

export default DemoStartups;
