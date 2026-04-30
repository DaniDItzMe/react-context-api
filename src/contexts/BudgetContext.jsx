import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [maxPrice, setMaxPrice] = useState("");
  const [budgetMode, setBudgetMode] = useState(false);
  //Ho lasciato budget mode per far si che l input si attivi solo quando l utente entra dentro la pagina dei prodotti e scompaia quando cambia pagina

  return (
    <BudgetContext.Provider
      value={{
        maxPrice,
        setMaxPrice,
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
