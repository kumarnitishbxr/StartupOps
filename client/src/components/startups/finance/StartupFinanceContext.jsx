import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const StartupFinanceContext = createContext();

export const StartupFinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
    toast.success("Expense added successfully!");
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
    toast.info("Expense removed");
  };

  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  const categoryWise = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + Number(exp.amount);
    return acc;
  }, {});

  return (
    <StartupFinanceContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        totalSpent,
        categoryWise,
      }}
    >
      {children}
    </StartupFinanceContext.Provider>
  );
};

// 👉 THIS LINE IS CRITICAL – YOUR ERROR IS BECAUSE THIS WAS MISSING
export const useFinance = () => useContext(StartupFinanceContext);
