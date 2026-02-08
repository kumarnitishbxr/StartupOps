import React from "react";
import { motion } from "framer-motion";
import { useFinance } from "./StartupFinanceContext";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useFinance();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow border"
    >
      <h3 className="text-xl font-bold mb-4">
        Expense History
      </h3>

      {expenses.length === 0 && (
        <p className="text-gray-500">
          No expenses added yet.
        </p>
      )}

      <div className="space-y-3">
        {expenses.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ scale: 1.03 }}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{exp.title}</p>
              <p className="text-sm text-gray-500">
                {exp.category} • {exp.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-bold">
                ₹{exp.amount}
              </span>

              <button
                onClick={() => deleteExpense(exp.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpenseList;
