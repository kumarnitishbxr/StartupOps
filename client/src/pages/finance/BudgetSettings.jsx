import React from "react";
import { useFinance } from "./FinanceContext";

const BudgetSettings = () => {
  const { budget, setBudget, threshold, setThreshold } = useFinance();

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Budget Settings</h2>

      <div className="space-y-4">
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          placeholder="Monthly Budget"
        />

        <input
          type="number"
          className="w-full p-2 border rounded"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          placeholder="Threshold %"
        />
      </div>
    </div>
  );
};

export default BudgetSettings;
