import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStartup } from "../../stores/startupSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      const result = await dispatch(addStartup(formData)).unwrap();

      toast.success("Startup created successfully!");

      navigate(`/startups/${result.data._id}`);
    } catch (error) {
      toast.error(error || "Failed to create startup");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Create New Startup
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Startup Name"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="industry"
          placeholder="Industry"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="stage"
          placeholder="Stage"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Create Startup
        </button>

      </form>
    </div>
  );
};

export default CreateStartup;
