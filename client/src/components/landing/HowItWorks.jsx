import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUserPlus,
  FaRocket,
  FaTasks,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Your Account",
    short: "Sign up on StartupOps and build your founder profile.",
    details: [
      "Register using email or social login",
      "Complete founder profile",
      "Choose your role (Founder/Mentor)",
      "Access personalized dashboard",
    ],
    color: "text-blue-600",
  },
  {
    icon: <FaRocket />,
    title: "Register Your Startup",
    short: "Add business details and set up your startup workspace.",
    details: [
      "Enter startup information",
      "Upload logo and branding",
      "Define stage and industry",
      "Create your first roadmap",
    ],
    color: "text-purple-600",
  },
  {
    icon: <FaTasks />,
    title: "Manage Operations",
    short: "Organize tasks and collaborate with your team.",
    details: [
      "Create task boards",
      "Assign team members",
      "Track milestones",
      "Collaborate with mentors",
    ],
    color: "text-green-600",
  },
  {
    icon: <FaChartLine />,
    title: "Track Progress",
    short: "Use analytics to monitor startup growth.",
    details: [
      "View performance metrics",
      "Analyze growth trends",
      "Generate reports",
      "Plan next milestones",
    ],
    color: "text-indigo-600",
  },
];

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-2"
        >
          How StartupOps Works
        </motion.h2>

        <p className="text-center text-gray-600 mb-14">
          Click on any step to explore details
        </p>

        <div className="relative">

          {/* PERFECT CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-gray-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative mb-16 flex items-center justify-between"
            >

              {/* ICON NODE - PERFECT CENTER */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-200 rounded-full h-14 w-14 flex items-center justify-center z-10 shadow">
                <span className={`text-2xl ${step.color}`}>
                  {step.icon}
                </span>
              </div>

              {/* LEFT SIDE CARD */}
              {index % 2 === 0 && (
                <div className="w-[46%] pr-10">
                  <div
                    onClick={() => toggleStep(index)}
                    className="p-6 bg-white rounded-2xl shadow cursor-pointer hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mt-1">
                          {step.short}
                        </p>
                      </div>

                      <div className="text-gray-500">
                        {openIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-4 overflow-hidden"
                        >
                          <ul className="list-disc ml-5 text-gray-600 space-y-2">
                            {step.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>

                          <div className="mt-3 text-sm font-medium text-blue-600">
                            Step {index + 1} of {steps.length}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* EMPTY SPACE FOR ALIGNMENT */}
              <div className="w-[8%]"></div>

              {/* RIGHT SIDE CARD */}
              {index % 2 !== 0 && (
                <div className="w-[46%] pl-10">
                  <div
                    onClick={() => toggleStep(index)}
                    className="p-6 bg-white rounded-2xl shadow cursor-pointer hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mt-1">
                          {step.short}
                        </p>
                      </div>

                      <div className="text-gray-500">
                        {openIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-4 overflow-hidden"
                        >
                          <ul className="list-disc ml-5 text-gray-600 space-y-2">
                            {step.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>

                          <div className="mt-3 text-sm font-medium text-blue-600">
                            Step {index + 1} of {steps.length}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <a
            href="/signup"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Get Started Free
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
