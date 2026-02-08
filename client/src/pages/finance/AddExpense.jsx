import React, { useState } from "react";
import { useFinance } from "./FinanceContext";

const categories = ["Marketing", "Development", "Operations", "Tools", "Others"];

const AddExpense = () => {
  const { addExpense } = useFinance();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Marketing",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(form);
    alert("Expense Added!");
    setForm({ title: "", amount: "", category: "Marketing" });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Expense Title"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          placeholder="Amount"
          type="number"
          className="w-full p-2 border rounded"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />

        <select
          className="w-full p-2 border rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
