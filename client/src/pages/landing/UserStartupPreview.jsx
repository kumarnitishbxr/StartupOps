import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import fetchStartups from 
import { Link } from "react-router-dom";

const UserStartupPreview = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.startup);
  const { isAuthenticated } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(fetchStartups());
//     }
//   }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) return null;

  return (
    <div className="py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Your Startups
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {list?.map((s) => (
          <Link
            key={s._id}
            to={`/startups/${s._id}`}
            className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow hover:shadow-xl transition border border-gray-200 hover:-translate-y-2"
          >

            <h3 className="text-xl font-bold mb-1">
              {s.name}
            </h3>

            <p className="text-gray-600">{s.industry}</p>

            <div className="mt-3 text-sm text-gray-500">
              Stage: {s.stage}
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default UserStartupPreview;