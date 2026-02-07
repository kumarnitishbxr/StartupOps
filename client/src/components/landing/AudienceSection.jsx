import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUserGraduate, FaLightbulb } from "react-icons/fa";

const audiences = [
  {
    title: "For Founders",
    icon: <FaLightbulb />,
    color: "text-blue-600",
    points: [
      "Manage multiple startups in one place",
      "Track progress with analytics",
      "Organize tasks and milestones",
      "Collaborate with mentors easily",
    ],
  },
  {
    title: "For Mentors",
    icon: <FaUserTie />,
    color: "text-purple-600",
    points: [
      "Monitor startup performance",
      "Guide students with structured flow",
      "Review progress in real time",
      "Provide feedback efficiently",
    ],
  },
  {
    title: "For Students",
    icon: <FaUserGraduate />,
    color: "text-green-600",
    points: [
      "Convert projects into startups",
      "Track hackathon ideas",
      "Build entrepreneurial portfolio",
      "Learn startup management skills",
    ],
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="text-center mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-4"
        >
          Built for Everyone in the Startup Ecosystem
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          StartupOps adapts to your role and gives you the exact tools you need to succeed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {audiences.map((a, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="bg-gray-50 rounded-2xl p-6 border hover:shadow-lg transition"
          >
            <div
              className={`text-4xl mb-4 ${a.color}`}
            >
              {a.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {a.title}
            </h3>

            <ul className="space-y-2 text-gray-600">
              {a.points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default AudienceSection;
