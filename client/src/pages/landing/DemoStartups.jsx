import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaLeaf,
  FaHeartbeat,
  FaFilter,
  FaExternalLinkAlt,
  FaUsers,
  FaTrophy,
  FaChartLine,
  FaStar,
  FaClock,
  FaGraduationCap,
  FaLightbulb,
  FaMobileAlt,
} from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";

const demoData = [
  {
    name: "EduTech AI",
    industry: "Education",
    stage: "MVP",
    role: "Founder",
    icon: <FaRocket />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    description:
      "AI-powered learning platform helping students prepare smarter with personalized study paths.",
    metrics: {
      users: "2.5K",
      growth: "+156%",
      funding: "$250K",
    },
    tags: ["AI/ML", "EdTech", "SaaS"],
    founded: "2024",
  },
  {
    name: "Greenify",
    industry: "Environment",
    stage: "Idea",
    role: "Student",
    icon: <FaLeaf />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    description:
      "Sustainable lifestyle tracking app for reducing carbon footprint with gamification.",
    metrics: {
      users: "500",
      growth: "+89%",
      funding: "Bootstrapped",
    },
    tags: ["Sustainability", "Mobile", "Impact"],
    founded: "2025",
  },
  {
    name: "HealthSync",
    industry: "Healthcare",
    stage: "Growth",
    role: "Mentor",
    icon: <FaHeartbeat />,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    description:
      "Digital healthcare record management for clinics and patients with HIPAA compliance.",
    metrics: {
      users: "12K",
      growth: "+234%",
      funding: "$1.2M",
    },
    tags: ["HealthTech", "B2B", "Enterprise"],
    founded: "2023",
  },
  {
    name: "CodeMentor Pro",
    industry: "Education",
    stage: "Scaling",
    role: "Founder",
    icon: <FaGraduationCap />,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    description:
      "Connect aspiring developers with industry mentors for real-world project guidance.",
    metrics: {
      users: "8.5K",
      growth: "+178%",
      funding: "$500K",
    },
    tags: ["EdTech", "Marketplace", "Community"],
    founded: "2024",
  },
  {
    name: "FinFlow",
    industry: "FinTech",
    stage: "MVP",
    role: "Student",
    icon: <FaChartLine />,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    description:
      "Smart expense tracking and budgeting app designed specifically for college students.",
    metrics: {
      users: "3.2K",
      growth: "+112%",
      funding: "Pre-Seed",
    },
    tags: ["FinTech", "Mobile First", "Gen-Z"],
    founded: "2025",
  },
  {
    name: "TechLaunch",
    industry: "B2B SaaS",
    stage: "Growth",
    role: "Mentor",
    icon: <FaLightbulb />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    description:
      "All-in-one platform helping tech startups launch and scale faster with automation.",
    metrics: {
      users: "15K",
      growth: "+289%",
      funding: "$2M",
    },
    tags: ["SaaS", "B2B", "Automation"],
    founded: "2023",
  },
];

const stageColors = {
  Idea: "bg-gray-100 text-gray-700",
  MVP: "bg-blue-100 text-blue-700",
  Growth: "bg-green-100 text-green-700",
  Scaling: "bg-purple-100 text-purple-700",
};

const DemoStartups = () => {
  const [filter, setFilter] = useState("All");
  const [selectedStartup, setSelectedStartup] = useState(null);

  const filteredData =
    filter === "All"
      ? demoData
      : demoData.filter((d) => d.role === filter);

  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-60 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
          >
            <HiSparkles className="text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Live Demo Startups</span>
          </motion.div>

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Explore Real
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how StartupOps organizes real startup workflows with analytics, tasks, and structured growth tracking.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Founder", "Mentor", "Student"].map((r, index) => (
            <motion.button
              key={r}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(r)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                filter === r
                  ? "shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {filter === r && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <FaFilter className={`text-xs ${filter === r ? 'relative z-10 text-white' : ''}`} />
              <span className={`${filter === r ? 'relative z-10 text-white' : ''}`}>{r}</span>
              {r !== "All" && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === r ? "relative z-10 bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                }`}>
                  {demoData.filter(d => d.role === r).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { label: "Active Startups", value: "6+", icon: FaRocket },
            { label: "Total Users", value: "42K+", icon: FaUsers },
            { label: "Avg Growth", value: "+168%", icon: HiTrendingUp },
            { label: "Success Rate", value: "94%", icon: FaTrophy },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <stat.icon className="text-2xl text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CARDS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredData.map((startup, i) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 flex flex-col overflow-hidden"
              >
                {/* GRADIENT OVERLAY ON HOVER */}
                <div className={`absolute inset-0 bg-gradient-to-br ${startup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

                {/* GRADIENT TOP BORDER */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${startup.color} rounded-t-2xl`}></div>

                {/* ICON & STAGE BADGE */}
                <div className="relative flex items-start justify-between mb-4 mt-2">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`h-14 w-14 rounded-xl ${startup.bgColor} flex items-center justify-center text-2xl ${startup.textColor} shadow-sm`}
                  >
                    {startup.icon}
                  </motion.div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${stageColors[startup.stage]}`}>
                    {startup.stage}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative flex-1">
                  <div className="mb-3">
                    <h3 className={`text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 ${
                      startup.color === 'from-blue-500 to-cyan-500' ? 'group-hover:text-blue-600' :
                      startup.color === 'from-green-500 to-emerald-500' ? 'group-hover:text-green-600' :
                      startup.color === 'from-red-500 to-pink-500' ? 'group-hover:text-red-600' :
                      startup.color === 'from-purple-500 to-indigo-500' ? 'group-hover:text-purple-600' :
                      startup.color === 'from-orange-500 to-amber-500' ? 'group-hover:text-orange-600' :
                      'group-hover:text-teal-600'
                    }`}>
                      {startup.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{startup.industry}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        Est. {startup.founded}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {startup.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {startup.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200 group-hover:bg-white group-hover:border-gray-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Users</p>
                      <p className="text-sm font-bold text-gray-900">{startup.metrics.users}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Growth</p>
                      <p className="text-sm font-bold text-green-600">{startup.metrics.growth}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Funding</p>
                      <p className="text-sm font-bold text-purple-600">{startup.metrics.funding}</p>
                    </div>
                  </div>

                  {/* ROLE BADGE */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      startup.role === 'Founder' ? 'bg-blue-100 text-blue-700' :
                      startup.role === 'Mentor' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {startup.role} Journey
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedStartup(startup)}
                  className={`relative w-full flex items-center justify-center gap-2 bg-gradient-to-r ${startup.color} text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all group/button`}
                >
                  View Demo Dashboard
                  <FaExternalLinkAlt className="text-xs group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* EMPTY STATE */}
        {filteredData.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-4xl text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium">
              No demo startups available for this role.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try selecting a different filter above.
            </p>
          </motion.div>
        )}

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Launch Your Startup?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 12,000+ founders building the future. Get started in minutes, no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Start Building Free
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Learn More
              </motion.a>
            </div>
          </div>
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

export default DemoStartups;