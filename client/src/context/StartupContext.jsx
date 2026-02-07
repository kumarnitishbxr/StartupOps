import React, { createContext } from "react";

 const StartupContext = createContext();

export const StartupProvider = ({ children }) => {
  const startupData = {
    founder: "Shailesh Paul",
    startupName: "InnovateX",
    revenue: 45000,
    customers: 320,
    growthRate: 18,
    activeProjects: 6,
  };

  return (
    <StartupContext.Provider value={{ startupData }}>
      {children}
    </StartupContext.Provider>
  );
};

export default StartupContext;