import React, { useState } from "react";

const EditStartupModal = ({ startup, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: startup.name || "",
    industry: startup.industry || "",
    stage: startup.stage || "",
    description: startup.description || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send updated data back to StartupCard
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-2xl w-[420px] shadow-xl">

        <h2 className="text-xl font-bold mb-4">
          Edit Startup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <label className="block text-sm mb-1">Startup Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Industry</label>
            <input
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Stage</label>
            <input
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              rows="3"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditStartupModal;
