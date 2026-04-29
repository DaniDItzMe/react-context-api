import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./layouts/Base";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DettagliProdotto from "./pages/DettagliProdotto";
import ErrorPage from "./pages/ErrorPage";
import { BudgetProvider } from "./contexts/BudgetContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <BudgetProvider>
          <Routes>
            <Route element={<Base />}>
              <Route index element={<Homepage />}></Route>
              <Route path="/chi-siamo" element={<ChiSiamo />}></Route>
              <Route path="/prodotti">
                <Route index element={<Prodotti />}></Route>
                <Route path=":id/:max" element={<DettagliProdotto />}></Route>
              </Route>
              <Route path="/404" element={<ErrorPage />}></Route>
              <Route path="*" element={<Navigate to="/404 " />}></Route>
            </Route>
          </Routes>
        </BudgetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
