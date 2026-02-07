import React from "react";

const demoData = [
  {
    name: "EduTech AI",
    industry: "Education",
    stage: "MVP",
  },
  {
    name: "Greenify",
    industry: "Environment",
    stage: "Idea",
  },
  {
    name: "HealthSync",
    industry: "Healthcare",
    stage: "Growth",
  },
];

const DemoStartups = () => {
  return (
    <div id="demo" className="py-20 bg-gray-50">

      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Example Startups
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {demoData.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2"
          >

            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              🚀
            </div>

            <h3 className="text-xl font-bold mb-1">
              {s.name}
            </h3>

            <p className="text-gray-600">{s.industry}</p>

            <div className="mt-4 inline-block bg-gray-100 text-sm px-3 py-1 rounded-full">
              Stage: {s.stage}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default DemoStartups;
