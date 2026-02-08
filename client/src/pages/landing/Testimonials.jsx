import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Student Founder",
    text: "StartupOps helped me convert my college project idea into a structured startup plan. The task tracking and analytics made everything so organized and professional.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ananya Sharma",
    role: "Aspiring Entrepreneur",
    text: "Finally a platform built for early-stage founders. Managing ideas, tasks and progress in one place has saved me countless hours and confusion.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Startup Mentor",
    text: "As a mentor, StartupOps gives me a clear view of student progress and milestones. It’s a great collaboration tool for guiding young innovators.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "College Innovator",
    text: "The analytics dashboard helped me present my startup idea professionally in hackathons. It feels like a mini CRM for founders!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-4"
        >
          What Our Users Say
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Real experiences from students, founders and mentors using StartupOps to build better startups.
        </p>
      </div>

      {/* Auto Scrolling Track */}
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => sliderRef.current?.pause()}
        onMouseLeave={() => sliderRef.current?.play()}
      >
        <motion.div
          ref={sliderRef}
          className="flex gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 relative"
            >
              {/* Quote */}
              <div className="absolute -top-5 left-6 bg-blue-600 text-white p-3 rounded-xl shadow">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                “{t.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt="user"
                  className="h-12 w-12 rounded-full border"
                />

                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Signals */}
      <div className="text-center mt-16 px-6">
        <p className="text-gray-700 font-medium mb-4">
          Trusted by innovators from colleges and early-stage startups
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <span>🚀 Idea to Execution</span>
          <span>📊 Smart Dashboards</span>
          <span>🤝 Mentor Friendly</span>
          <span>✅ Organized Workflows</span>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-16"
      >
        <a
          href="/signup"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
        >
          Start Building with StartupOps
        </a>
      </motion.div>

    </section>
  );
};

export default Testimonials;