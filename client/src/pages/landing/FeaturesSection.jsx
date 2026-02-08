import React from "react";
import { motion } from "framer-motion";

import {
  FaRocket,
  FaChartLine,
  FaTasks,
  FaUsers,
  FaBullseye,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-blue-600 text-4xl" />,
    title: "Startup Management",
    desc: "Create and manage multiple startups from one unified dashboard with structured workflows.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: <FaChartLine className="text-purple-600 text-4xl" />,
    title: "Smart Analytics",
    desc: "Track progress, milestones and growth metrics in an easy to understand visual format.",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    icon: <FaTasks className="text-green-600 text-4xl" />,
    title: "Task Tracking",
    desc: "Organize tasks, assign priorities and monitor completion in real-time.",
    gradient: "from-green-50 to-green-100",
  },
  {
    icon: <FaUsers className="text-yellow-600 text-4xl" />,
    title: "Collaboration",
    desc: "Work together with mentors and team members to build better startups.",
    gradient: "from-yellow-50 to-yellow-100",
  },
  {
    icon: <FaBullseye className="text-pink-600 text-4xl" />,
    title: "Goal Planning",
    desc: "Define startup milestones and stay focused on what truly matters.",
    gradient: "from-pink-50 to-pink-100",
  },
  {
    icon: <FaLock className="text-indigo-600 text-4xl" />,
    title: "Secure Platform",
    desc: "Role based access and authentication to keep your startup data safe.",
    gradient: "from-indigo-50 to-indigo-100",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl font-extrabold mb-4">
          Everything You Need in One Platform
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          StartupOps provides powerful tools for both founders and students to transform ideas into structured, manageable and scalable startups.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {features.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-r ${f.gradient} p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition duration-300 hover:-translate-y-2`}
          >

            <div className="mb-4">
              {f.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {f.title}
            </h3>

            <p className="text-gray-600">
              {f.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeaturesSection;