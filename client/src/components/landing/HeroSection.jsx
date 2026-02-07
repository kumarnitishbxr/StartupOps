import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { 
  FaRocket, FaChartLine, FaUsers, FaLightbulb, 
  FaArrowRight, FaPlay, FaStar, FaTrophy,
  FaFire, FaBolt, FaGem, FaCheckCircle
} from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import { MdShowChart } from "react-icons/md";
const handleScroll = () => {
  const nextSection = document.getElementById("features");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    window.scrollBy({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  }
};

const roleContent = {
  Founder: {
    badge: "🚀 For Visionaries",
    headline: "Build the Next",
    typewriter: [
      "Unicorn Startup",
      "Game Changer",
      "Industry Leader",
      "Global Platform",
    ],
    description:
      "Join 12,000+ founders who've raised over $2.3B. Get AI-powered insights, investor connections, and growth strategies that scale.",
    cta: "Launch My Startup",
    secondaryCta: "See Success Stories",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    glowColor: "blue",
    stats: [
      { label: "Active Startups", value: "12K+", icon: FaRocket, color: "blue" },
      { label: "Total Funding", value: "$2.3B", icon: FaTrophy, color: "cyan" },
      { label: "Success Rate", value: "89%", icon: FaFire, color: "teal" },
    ],
    features: [
      { icon: BiTargetLock, text: "AI Market Analysis", color: "blue" },
      { icon: HiTrendingUp, text: "Growth Tracking", color: "cyan" },
      { icon: FaGem, text: "Investor Network", color: "teal" },
    ],
    preview: {
      title: "Founder Dashboard",
      metrics: [
        { label: "Monthly Revenue", value: "$245K", trend: "+23%", positive: true },
        { label: "Active Users", value: "12.4K", trend: "+156%", positive: true },
        { label: "Runway", value: "18 mo", trend: "Healthy", positive: true },
      ],
      activity: [
        { icon: FaCheckCircle, text: "Pitch deck reviewed", time: "2h ago" },
        { icon: FaUsers, text: "New investor intro", time: "5h ago" },
        { icon: MdShowChart, text: "Revenue milestone hit", time: "1d ago" },
      ]
    }
  },

  Mentor: {
    badge: "🎯 For Leaders",
    headline: "Shape the Future",
    typewriter: [
      "Next Generation",
      "Rising Founders",
      "Startup Revolution",
      "Tech Leaders",
    ],
    description:
      "Impact 1000+ startups as a mentor. Share your expertise, track progress, and build your legacy in the entrepreneurial ecosystem.",
    cta: "Become a Mentor",
    secondaryCta: "Explore Impact",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    glowColor: "purple",
    stats: [
      { label: "Expert Mentors", value: "2.5K+", icon: FaUsers, color: "purple" },
      { label: "Startups Guided", value: "8K+", icon: FaLightbulb, color: "pink" },
      { label: "Satisfaction", value: "98%", icon: FaStar, color: "rose" },
    ],
    features: [
      { icon: FaUsers, text: "Smart Matching", color: "purple" },
      { icon: FaChartLine, text: "Impact Dashboard", color: "pink" },
      { icon: FaStar, text: "Recognition System", color: "rose" },
    ],
    preview: {
      title: "Mentor Dashboard",
      metrics: [
        { label: "Active Mentees", value: "24", trend: "+8 this month", positive: true },
        { label: "Hours Mentored", value: "156", trend: "Top 10%", positive: true },
        { label: "Success Rate", value: "94%", trend: "Excellent", positive: true },
      ],
      activity: [
        { icon: FaCheckCircle, text: "Session with Sarah", time: "1h ago" },
        { icon: FaLightbulb, text: "Feedback provided", time: "3h ago" },
        { icon: FaTrophy, text: "Mentee secured funding", time: "2d ago" },
      ]
    }
  },

  Student: {
    badge: "⚡ For Innovators",
    headline: "Transform Ideas Into",
    typewriter: [
      "Funded Startups",
      "Real Products",
      "Tech Companies",
      "Success Stories",
    ],
    description:
      "Join 18,000+ students who turned college projects into funded startups. Access mentors, resources, and funding opportunities.",
    cta: "Start Free Today",
    secondaryCta: "Watch Stories",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "orange",
    stats: [
      { label: "Student Founders", value: "18K+", icon: FaUsers, color: "orange" },
      { label: "Startups Created", value: "4.2K", icon: FaRocket, color: "amber" },
      { label: "Funding Secured", value: "$89M", icon: FaBolt, color: "yellow" },
    ],
    features: [
      { icon: FaLightbulb, text: "Free Resources", color: "orange" },
      { icon: FaUsers, text: "Peer Network", color: "amber" },
      { icon: FaBolt, text: "Fast Track Program", color: "yellow" },
    ],
    preview: {
      title: "Student Hub",
      metrics: [
        { label: "Active Projects", value: "8", trend: "3 this week", positive: true },
        { label: "Mentorship Hours", value: "42", trend: "+15", positive: true },
        { label: "Learning Progress", value: "67%", trend: "On Track", positive: true },
      ],
      activity: [
        { icon: FaCheckCircle, text: "Module completed", time: "30m ago" },
        { icon: FaUsers, text: "Mentor session booked", time: "2h ago" },
        { icon: FaRocket, text: "Project milestone", time: "1d ago" },
      ]
    }
  },
};

const HeroSection = () => {
  const [role, setRole] = useState("Founder");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const smoothMouse = useSpring(mousePosition, {
    damping: 25,
    stiffness: 150
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 15,
        y: (clientY / innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const current = roleContent[role];

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* ANIMATED MESH GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* PREMIUM VIDEO BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-digital-network-2024/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ENHANCED PARTICLES */}
      <div className="absolute inset-0 -z-10">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: false,
            particles: {
              number: { value: 80 },
              size: { 
                value: { min: 1, max: 4 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 1,
                }
              },
              color: { 
                value: ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"] 
              },
              move: { 
                enable: true, 
                speed: 0.8,
                direction: "none",
                random: true,
                outModes: { default: "out" },
              },
              opacity: {
                value: { min: 0.2, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1.5,
                  minimumValue: 0.1,
                },
              },
              links: {
                enable: true,
                color: "#ffffff",
                opacity: 0.1,
                distance: 120,
              },
            },
          }}
        />
      </div>

      {/* GRADIENT VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 -z-5"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          
          {/* LEFT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* PREMIUM BADGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-lg"
                >
                  {current.badge.split(' ')[0]}
                </motion.span>
                <span className="text-white/90 font-semibold text-xs tracking-wide">
                  {current.badge.split(' ').slice(1).join(' ')}
                </span>
              </motion.div>

              {/* REFINED HEADLINE */}
              <div className="space-y-3">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
                >
                  {current.headline}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent leading-tight`}
                >
                  <Typewriter
                    options={{
                      strings: current.typewriter,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                      delay: 60,
                      cursor: '|',
                      cursorClassName: 'text-white/50'
                    }}
                  />
                </motion.div>
              </div>

              {/* DESCRIPTION */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                {current.description}
              </motion.p>

              {/* STATS ROW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-3 py-4"
              >
                {current.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="relative group"
                  >
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-white/20 transition-all duration-300">
                      <stat.icon className={`text-xl text-${stat.color}-400 mb-1.5`} />
                      <p className="text-2xl font-bold text-white mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* ROLE SELECTOR */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-3"
              >
                <p className="text-white/70 font-medium text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="w-6 h-px bg-gradient-to-r from-white/50 to-transparent"></span>
                  Select Your Path
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Founder", "Mentor", "Student"].map((r) => {
                    const isActive = role === r;
                    return (
                      <motion.button
                        key={r}
                        onClick={() => setRole(r)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`relative px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/60 hover:text-white/90"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeRole"
                            className={`absolute inset-0 bg-gradient-to-r ${current.gradient} rounded-xl shadow-lg`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {!isActive && (
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"></div>
                        )}
                        <span className="relative z-10">{r}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <motion.a
                  href="/signup"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative px-7 py-3.5 bg-gradient-to-r ${current.gradient} text-white rounded-xl font-semibold text-sm shadow-lg overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    {current.cta}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                >
                  <FaPlay className="text-xs group-hover:scale-110 transition-transform" />
                  {current.secondaryCta}
                </motion.a>
              </motion.div>

              {/* FEATURE PILLS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-2"
              >
                {current.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/30 transition-all duration-300"
                  >
                    <feature.icon className={`text-${feature.color}-400 text-xs`} />
                    <span className="text-white/80 text-xs font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT DASHBOARD PREVIEW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role + "-preview"}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                x: smoothMouse.x,
                y: smoothMouse.y,
              }}
              className="hidden lg:block relative"
            >
              {/* MAIN DASHBOARD CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/20 overflow-hidden"
              >
                {/* ANIMATED GRADIENT BORDER */}
                <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-10 blur-xl`}></div>
                
                <div className="relative z-10 space-y-5">
                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${current.gradient} animate-pulse`}></div>
                      <h3 className="text-lg font-bold text-white">
                        {current.preview.title}
                      </h3>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* METRICS CARDS */}
                  <div className="grid gap-3">
                    {current.preview.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: 3 }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 hover:border-white/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-xs mb-0.5">
                              {metric.label}
                            </p>
                            <p className="text-2xl font-bold text-white">
                              {metric.value}
                            </p>
                          </div>
                          <div className={`flex items-center gap-1.5 px-2.5 py-1 ${metric.positive ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'} rounded-full`}>
                            <HiTrendingUp className={`${metric.positive ? 'text-green-400' : 'text-red-400'} text-xs`} />
                            <span className={`${metric.positive ? 'text-green-400' : 'text-red-400'} text-xs font-semibold`}>
                              {metric.trend}
                            </span>
                          </div>
                        </div>
                        
                        {/* ANIMATED PROGRESS BAR */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${50 + idx * 20}%` }}
                          transition={{ delay: 0.8 + idx * 0.1, duration: 1 }}
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${current.gradient} rounded-b-xl`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* ACTIVITY FEED */}
                  <div className="space-y-2">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Recent Activity</p>
                    <div className="space-y-2">
                      {current.preview.activity.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + idx * 0.1 }}
                          className="flex items-center gap-3 p-2.5 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all"
                        >
                          <div className={`p-1.5 bg-gradient-to-r ${current.gradient} rounded-lg`}>
                            <item.icon className="text-white text-xs" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-xs font-medium truncate">{item.text}</p>
                            <p className="text-gray-500 text-xs">{item.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* MINI CHART */}
                  <div className="relative h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-around px-3 pb-3">
                      {[45, 60, 40, 75, 55, 85, 65].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1.5 + idx * 0.08, duration: 0.5 }}
                          className={`w-6 bg-gradient-to-t ${current.gradient} rounded-t`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING BADGES */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -top-6 -left-6 px-4 py-2.5 bg-gradient-to-r ${current.gradient} text-white rounded-xl shadow-xl flex items-center gap-2 border border-white/20 backdrop-blur-xl`}
              >
                <FaRocket className="text-base" />
                <div>
                  <p className="text-xs font-bold">AI-Powered</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-6 -right-6 px-4 py-2.5 bg-white/10 backdrop-blur-xl text-white rounded-xl shadow-xl flex items-center gap-2 border border-white/20"
              >
                <FaChartLine className="text-base text-green-400" />
                <div>
                  <p className="text-xs font-bold">+156%</p>
                </div>
              </motion.div>

              {/* GLOW EFFECTS */}
              <div className={`absolute -inset-16 bg-gradient-to-r ${current.gradient} opacity-10 blur-3xl -z-10`}></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        
        <p className="text-white/40 text-xs uppercase tracking-widest">Scroll</p>
        <motion.div
         onClick={handleScroll}
  className="cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>

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

export default HeroSection;