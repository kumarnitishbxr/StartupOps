import React from "react";
import { Link } from "react-router-dom";

const StartupCard = ({ startup }) => {
  return (
    <div className="border p-4 rounded shadow">

      <h3 className="text-lg font-bold">
        {startup.name}
      </h3>

      <p className="text-sm text-gray-600">
        {startup.industry}
      </p>

      <p className="mt-2 text-sm">
        Stage: {startup.stage}
      </p>

      <Link
        to={`/startups/${startup._id}`}
        className="text-blue-500 mt-2 block"
      >
        View Dashboard
      </Link>

    </div>
  );
};

export default StartupCard;
