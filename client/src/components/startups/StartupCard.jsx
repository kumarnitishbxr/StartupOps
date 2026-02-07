import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import {
  FaLightbulb,
  FaEdit,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";

import {
  updateStartup,
  deleteStartup,
} from "../../stores/startupSlice";

import EditStartupModal from "./EditStartupModal";

const StartupCard = ({ startup }) => {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Delete this startup?")) return;

    try {
      await dispatch(deleteStartup(startup._id)).unwrap();
      toast.success("Startup deleted successfully");
    } catch (error) {
      toast.error(error || "Failed to delete startup");
    }
  };

  const handleUpdate = async (data) => {
    try {
      await dispatch(
        updateStartup({
          id: startup._id,
          data,
        })
      ).unwrap();

      toast.success("Startup updated successfully");
      setShowEdit(false);
    } catch (error) {
      toast.error(error || "Update failed");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        className="bg-white rounded-2xl shadow-md p-6 border"
      >
        <div className="flex justify-between items-center mb-4">

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">
              <FaLightbulb />
            </div>

            <h3 className="font-bold text-lg">
              {startup.name}
            </h3>
          </div>

          <div className="flex gap-2">

            <button
              onClick={() => setShowEdit(true)}
              className="text-blue-600 hover:bg-blue-50 p-2 rounded"
            >
              <FaEdit />
            </button>

            <button
              onClick={handleDelete}
              className="text-red-600 hover:bg-red-50 p-2 rounded"
            >
              <FaTrash />
            </button>

          </div>

        </div>

        <p className="text-gray-600 mb-2">
          Industry: {startup.industry}
        </p>

        <p className="text-gray-600 mb-4">
          Stage: {startup.stage}
        </p>

        <Link
          to={`/startups/${startup._id}`}
          className="flex items-center gap-2 text-blue-600"
        >
          Open Dashboard <FaArrowRight />
        </Link>

      </motion.div>

      {showEdit && (
        <EditStartupModal
          startup={startup}
          onClose={() => setShowEdit(false)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
};

export default StartupCard;
