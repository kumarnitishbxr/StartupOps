import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFinance } from "./StartupFinanceContext";

const FinanceStats = () => {
  const { totalSpent, categoryWise } = useFinance();

  const [budget, setBudget] = useState(50000);

  const percent = Math.min(
    100,
    Math.round((totalSpent / budget) * 100)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-xl shadow border"
    >
      <h3 className="text-xl font-bold mb-4">
        Financial Overview
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="border p-4 rounded bg-green-50">
          <p>Total Spent</p>
          <h2 className="text-2xl font-bold">
            ₹{totalSpent}
          </h2>
        </div>

        <div className="border p-4 rounded bg-blue-50">
          <p>Monthly Budget</p>

          <input
            type="number"
            className="border p-2 rounded mt-2 w-full"
            value={budget}
            onChange={(e) =>
              setBudget(Number(e.target.value))
            }
          />
        </div>

        <div className="border p-4 rounded bg-yellow-50">
          <p>Usage</p>
          <h2 className="text-2xl font-bold">
            {percent}%
          </h2>
        </div>

      </div>

      {percent > 80 && (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          className="p-3 bg-red-100 text-red-700 rounded"
        >
          ⚠ Warning: You are exceeding your budget!
        </motion.div>
      )}

      <h4 className="mt-6 font-bold mb-2">
        Category Wise Spending
      </h4>

      <div className="grid md:grid-cols-3 gap-3">
        {Object.keys(categoryWise).map((cat) => (
          <div
            key={cat}
            className="border p-3 rounded"
          >
            {cat}: ₹{categoryWise[cat]}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FinanceStats;
