import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStartup } from "../../redux/slices/startupSlice";
import { useNavigate } from "react-router-dom";

const CreateStartup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    industry: "",
    stage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call redux action to create startup
      const result = await dispatch(addStartup(formData));

      // Extract newly created startup ID from response
      const newStartupId = result.payload.data._id;

      // Redirect to dashboard of created startup
      navigate(`/startups/${newStartupId}`);

    } catch (error) {
      console.error("Error creating startup:", error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Create New Startup
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Startup Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Industry</label>
          <input
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Stage</label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="">Select Stage</option>
            <option value="Idea">Idea</option>
            <option value="MVP">MVP</option>
            <option value="Growth">Growth</option>
            <option value="Scaling">Scaling</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create Startup
        </button>

      </form>
    </div>
  );
};

export default CreateStartup;
