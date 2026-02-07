import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStartup } from "../../API/startupapi";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";

const CreateStartup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    stage: "idea",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const startup = await createStartup(form);
      navigate(`/startup/${startup._id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-2">
        Create Your Startup Workspace
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        This will be your central execution and validation hub.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Startup Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Startup Stage</label>
          <select
            name="stage"
            value={form.stage}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          >
            <option value="idea">Idea</option>
            <option value="mvp">MVP</option>
            <option value="early-traction">Early Traction</option>
            <option value="scaling">Scaling</option>
          </select>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader size="sm" /> : "Create Workspace"}
        </Button>
      </form>
    </div>
  );
};

export default CreateStartup;
