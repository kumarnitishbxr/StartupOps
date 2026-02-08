import React, { createContext, useContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(40000);
  const [threshold, setThreshold] = useState(80);

  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) setExpenses(JSON.parse(stored));

    const b = localStorage.getItem("budget");
    if (b) setBudget(Number(b));
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const totalSpent = expenses.reduce((a, b) => a + Number(b.amount), 0);

  const percentageUsed = ((totalSpent / budget) * 100).toFixed(2);

  const value = {
    expenses,
    addExpense,
    budget,
    setBudget,
    threshold,
    setThreshold,
    totalSpent,
    percentageUsed,
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
