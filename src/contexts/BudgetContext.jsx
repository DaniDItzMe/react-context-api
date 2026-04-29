import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider
      value={{
        budgetMode,
        setBudgetMode,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

function useBudgetMode() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetProvider, useBudgetMode };
