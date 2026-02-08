import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserPlus,
  FaRocket,
  FaTasks,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaArrowRight,
  FaPlay,
  FaStar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Your Account",
    short: "Sign up on StartupOps and build your founder profile.",
    details: [
      "Register using email or social login",
      "Complete founder profile in 2 minutes",
      "Choose your role (Founder/Mentor/Student)",
      "Access personalized dashboard instantly",
    ],
    color: "from-blue-500 to-cyan-500",
    badge: "Quick Setup",
    stat: "2 min",
    illustration: "👤",
  },
  {
    icon: <FaRocket />,
    title: "Register Your Startup",
    short: "Add business details and set up your startup workspace.",
    details: [
      "Enter startup information with AI assistance",
      "Upload logo and branding assets",
      "Define stage, industry, and target market",
      "Create your first roadmap with templates",
    ],
    color: "from-purple-500 to-pink-500",
    badge: "AI-Powered",
    stat: "5 min",
    illustration: "🚀",
  },
  {
    icon: <FaTasks />,
    title: "Manage Operations",
    short: "Organize tasks and collaborate with your team seamlessly.",
    details: [
      "Create Kanban boards and task lists",
      "Assign team members with role permissions",
      "Track milestones with smart notifications",
      "Collaborate with mentors in real-time",
    ],
    color: "from-green-500 to-emerald-500",
    badge: "Team Sync",
    stat: "Real-time",
    illustration: "✅",
  },
  {
    icon: <FaChartLine />,
    title: "Track Progress & Grow",
    short: "Use analytics to monitor startup growth and metrics.",
    details: [
      "View performance metrics and KPIs",
      "Analyze growth trends with AI insights",
      "Generate investor-ready reports",
      "Plan next milestones with confidence",
    ],
    color: "from-indigo-500 to-purple-500",
    badge: "Analytics",
    stat: "24/7",
    illustration: "📊",
  },
];

const benefits = [
  { icon: FaCheck, text: "Free for students" },
  { icon: FaCheck, text: "No credit card required" },
  { icon: FaCheck, text: "Cancel anytime" },
];

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
          >
            <HiSparkles className="text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Simple 4-Step Process</span>
          </motion.div>

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            How StartupOps
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transforms Your Journey
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to IPO, manage everything in one powerful platform. Click any step to explore details.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">

          {/* ANIMATED CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            />
          </div>

          {/* STEPS */}
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-20 last:mb-0"
              >
                {/* MOBILE/TABLET LAYOUT */}
                <div className="lg:hidden">
                  <div className="flex gap-4 items-start">
                    {/* ICON */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl shadow-lg`}
                    >
                      {step.icon}
                    </motion.div>

                    {/* CARD */}
                    <div className="flex-1">
                      <div
                        onClick={() => toggleStep(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                {step.badge}
                              </span>
                              <span className="text-xs font-bold text-blue-600">
                                {step.stat}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {step.short}
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-gray-400 ml-2"
                          >
                            <FaChevronDown />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-gray-100">
                                <ul className="space-y-3">
                                  {step.details.map((detail, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-start gap-3 text-gray-700 text-sm"
                                    >
                                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                                <div className="mt-4 flex items-center justify-between">
                                  <span className="text-xs font-semibold text-gray-400">
                                    STEP {index + 1} OF {steps.length}
                                  </span>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                                  >
                                    Learn more
                                    <FaArrowRight className="text-xs" />
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:flex items-center">
                  {/* LEFT SIDE */}
                  {isLeft && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02, x: -5 }}
                        className="w-[45%]"
                      >
                        <div
                          onClick={() => toggleStep(index)}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-100 mr-8"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-gray-700">
                                  {step.badge}
                                </span>
                                <span className="text-xs font-bold text-blue-600">
                                  ⚡ {step.stat}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600">
                                {step.short}
                              </p>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              className="text-gray-400 ml-4"
                            >
                              <FaChevronDown className="text-xl" />
                            </motion.div>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t border-gray-100">
                                  <ul className="space-y-3 mb-4">
                                    {step.details.map((detail, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-gray-700"
                                      >
                                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{detail}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                                      STEP {index + 1}/{steps.length}
                                    </span>
                                    <motion.button
                                      whileHover={{ scale: 1.05, x: 3 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                                    >
                                      Learn more
                                      <FaArrowRight className="text-xs" />
                                    </motion.button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      <div className="w-[10%] flex justify-center">
                        {/* CENTER ICON NODE */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          className="relative z-20"
                        >
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white`}>
                            {step.icon}
                          </div>
                          {/* FLOATING NUMBER */}
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-800 border-2 border-gray-100"
                          >
                            {index + 1}
                          </motion.div>
                        </motion.div>
                      </div>

                      <div className="w-[45%]"></div>
                    </>
                  )}

                  {/* RIGHT SIDE */}
                  {!isLeft && (
                    <>
                      <div className="w-[45%]"></div>

                      <div className="w-[10%] flex justify-center">
                        {/* CENTER ICON NODE */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          className="relative z-20"
                        >
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white`}>
                            {step.icon}
                          </div>
                          {/* FLOATING NUMBER */}
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-800 border-2 border-gray-100"
                          >
                            {index + 1}
                          </motion.div>
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="w-[45%]"
                      >
                        <div
                          onClick={() => toggleStep(index)}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-100 ml-8"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-gray-700">
                                  {step.badge}
                                </span>
                                <span className="text-xs font-bold text-purple-600">
                                  ⚡ {step.stat}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600">
                                {step.short}
                              </p>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              className="text-gray-400 ml-4"
                            >
                              <FaChevronDown className="text-xl" />
                            </motion.div>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t border-gray-100">
                                  <ul className="space-y-3 mb-4">
                                    {step.details.map((detail, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-gray-700"
                                      >
                                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{detail}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                                      STEP {index + 1}/{steps.length}
                                    </span>
                                    <motion.button
                                      whileHover={{ scale: 1.05, x: 3 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
                                    >
                                      Learn more
                                      <FaArrowRight className="text-xs" />
                                    </motion.button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>

                {/* CONNECTION LINE TO NEXT STEP */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-20 bg-gradient-to-b from-current to-transparent hidden lg:block"
                    style={{ color: steps[index + 1]?.color.split(' ')[1] }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          {/* BENEFITS */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <benefit.icon className="text-green-600 text-xs" />
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                Get Started Free
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:text-purple-600 transition-all flex items-center gap-2 shadow-sm"
            >
              <FaPlay className="text-sm" />
              Watch Demo
            </motion.a>
          </div>

          {/* SOCIAL PROOF */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 text-gray-600"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-sm font-medium">
                <span className="font-bold">4.9/5</span> from 2,500+ founders
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;