import React, { useState, useContext } from "react";
import { StartupFinanceContext } from "./StartupFinanceContext";
import { motion } from "framer-motion";

const ExpenseForm = () => {
  const { addExpense } = useContext(StartupFinanceContext);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ ...form, id: Date.now() });
    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Add Expense</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Amount"
          type="number"
          className="w-full p-2 border rounded"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <select
          className="w-full p-2 border rounded"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option>Marketing</option>
          <option>Development</option>
          <option>Operations</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Add Expense
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ExpenseForm;
