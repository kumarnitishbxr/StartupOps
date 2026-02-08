import React, { useState } from "react";
import { useFinance } from "./StartupFinanceContext";

const StartupFinance = () => {
  const { expenses, addExpense, deleteExpense, totalSpent } = useFinance();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Marketing",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: form.title,
      amount: form.amount,
      category: form.category,
      date: new Date().toLocaleDateString(),
    };

    addExpense(newExpense);

    setForm({
      title: "",
      amount: "",
      category: "Marketing",
    });
  };

  return (
    <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        💰 Startup Expense Tracker
      </h2>

      {/* Add Expense Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Marketing</option>
          <option>Development</option>
          <option>Operations</option>
          <option>Tools</option>
          <option>Others</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Add Expense
        </button>
      </form>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Total Spent: ₹{totalSpent}
        </h3>
      </div>

      {/* Expense List */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No expenses added yet
                </td>
              </tr>
            ) : (
              expenses.map((exp) => (
                <tr key={exp.id} className="text-center">
                  <td className="border p-2">{exp.title}</td>
                  <td className="border p-2">₹{exp.amount}</td>
                  <td className="border p-2">{exp.category}</td>
                  <td className="border p-2">{exp.date}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteExpense(exp.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StartupFinance;
