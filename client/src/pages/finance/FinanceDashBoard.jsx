import React from "react";
import { useFinance } from "./FinanceContext";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BudgetSettings from "./BudgetSettings";

const FinanceDashboard = () => {
  const { totalSpent, budget, percentageUsed, threshold } = useFinance();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Startup Finance Tracker</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded">
          <h3>Total Spent</h3>
          <p className="text-xl font-bold">₹{totalSpent}</p>
        </div>

        <div className="p-4 bg-green-100 rounded">
          <h3>Budget</h3>
          <p className="text-xl font-bold">₹{budget}</p>
        </div>

        <div className="p-4 bg-purple-100 rounded">
          <h3>Used</h3>
          <p className="text-xl font-bold">{percentageUsed}%</p>
        </div>
      </div>

      {percentageUsed > threshold && (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          ⚠ Warning: You crossed {threshold}% of your budget!
        </div>
      )}

      <BudgetSettings />
      <AddExpense />
      <ExpenseList />
    </div>
  );
};

export default FinanceDashboard;
