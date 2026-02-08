import React from "react";
import { useState } from "react";
import Button from "../common/Button";
import { submitFeedback } from "../../API/feedbackapi";

const FeedbackForm = ({ startupId, onSuccess }) => {
  const [form, setForm] = useState({
    ideaName: "",
    feedbackType: "INTERNAL",
    rating: 5,
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitFeedback(startupId, form);
      setForm({
        ideaName: "",
        feedbackType: "INTERNAL",
        rating: 5,
        comment: "",
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
        name="ideaName"
        placeholder="Idea or feature name"
        value={form.ideaName}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <select
        name="feedbackType"
        value={form.feedbackType}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="INTERNAL">Internal Feedback</option>
        <option value="EXTERNAL">External Feedback</option>
      </select>

      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Rating
        </label>
        <input
          type="range"
          min="1"
          max="5"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full"
        />
        <p className="text-xs text-gray-400 mt-1">
          Score: {form.rating}/5
        </p>
      </div>

      <textarea
        name="comment"
        placeholder="Qualitative feedback / suggestions"
        value={form.comment}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        rows={3}
      />

      <Button type="submit" loading={loading}>
        Submit Feedback
      </Button>
    </form>
  );
};

export default FeedbackForm;
