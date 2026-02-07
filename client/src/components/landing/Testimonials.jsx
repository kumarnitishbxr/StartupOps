import React from "react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Student Founder",
    text: "StartupOps helped me convert my college project idea into a structured startup plan. The task tracking and analytics made everything so organized!",
    emoji: "🎓",
  },
  {
    name: "Ananya Sharma",
    role: "Aspiring Entrepreneur",
    text: "Finally a platform built for early-stage founders. Managing ideas, tasks and progress in one place has saved me countless hours.",
    emoji: "💡",
  },
  {
    name: "Vikram Patel",
    role: "Startup Mentor",
    text: "As a mentor, StartupOps gives me a clear view of student progress and milestones. It’s a great collaboration tool for young innovators.",
    emoji: "🤝",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">

      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Loved by Students & Founders
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear what early users are saying about StartupOps and how it’s helping them build better startups.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100"
          >

            <div className="text-4xl mb-4">
              {t.emoji}
            </div>

            <p className="text-gray-700 italic mb-4">
              “{t.text}”
            </p>

            <div>
              <h4 className="font-bold text-lg">
                {t.name}
              </h4>

              <p className="text-sm text-gray-500">
                {t.role}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="/signup"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
        >
          Join StartupOps Today
        </a>
      </div>

    </section>
  );
};

export default Testimonials;
