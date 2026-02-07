import React from "react";
import { useState } from "react";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { createMilestone } from "../../API/milstoneapi";

const MilestoneForm = ({ startupId, onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createMilestone(startupId, form);
      setForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow space-y-4"
    >
      <input
        name="title"
        placeholder="Milestone title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Milestone description"
        value={form.description}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <div className="flex gap-3">
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <Button type="submit" loading={loading}>
        Create Milestone
      </Button>
    </form>
  );
};

export default MilestoneForm;
