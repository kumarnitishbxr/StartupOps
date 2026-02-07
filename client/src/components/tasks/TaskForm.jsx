import { useState } from "react";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { createTask } from "../../API/taskapi";

const TaskForm = ({ startupId, onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createTask(startupId, form);
      onSuccess();
      setForm({ title: "", description: "", priority: "MEDIUM" });
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
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Task description"
        value={form.description}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <Button type="submit" loading={loading}>
        Create Task
      </Button>
    </form>
  );
};

export default TaskForm;
