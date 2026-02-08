import React from "react";
import { useFinance } from "./FinanceContext";

const ExpenseList = () => {
  const { expenses } = useFinance();

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-4">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>

      {expenses.length === 0 && <p>No expenses added yet.</p>}

      {expenses.map((e) => (
        <div
          key={e.id}
          className="flex justify-between p-3 border-b last:border-0"
        >
          <div>
            <p className="font-semibold">{e.title}</p>
            <p className="text-sm text-gray-500">{e.category}</p>
          </div>

          <p className="font-bold">₹{e.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
