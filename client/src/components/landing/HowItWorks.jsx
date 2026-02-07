import React from "react";

const steps = [
  {
    number: "01",
    title: "Create Account",
    desc: "Sign up on StartupOps and set up your personal workspace in seconds.",
    icon: "👤",
  },
  {
    number: "02",
    title: "Create Your Startup",
    desc: "Add your startup idea, industry, stage and basic details to get started.",
    icon: "💡",
  },
  {
    number: "03",
    title: "Manage Tasks",
    desc: "Break down your vision into actionable tasks and track progress easily.",
    icon: "✅",
  },
  {
    number: "04",
    title: "Track Growth",
    desc: "Use analytics and dashboards to monitor milestones and improve performance.",
    icon: "📈",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-24 bg-gray-50">

      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          How StartupOps Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          A simple and structured workflow designed for founders, students and mentors to transform ideas into real startups.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >

              <div className="flex justify-between items-center mb-4">

                <div className="text-4xl">
                  {step.icon}
                </div>

                <div className="text-3xl font-extrabold text-gray-200">
                  {step.number}
                </div>

              </div>

              <h3 className="text-xl font-bold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Bottom Call To Action */}
      <div className="text-center mt-16">
        <a
          href="/startups/create"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
        >
          Start Your Journey Now
        </a>
      </div>

    </section>
  );
};

export default HowItWorks;
