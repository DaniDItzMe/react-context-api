import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BudgetProvider } from "../contexts/BudgetContext";
export default function Base() {
  return (
    <>
      {/* <BudgetProvider> */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar></Navbar>
        <main className="container h-100 py-4 d-flex flex-grow-1 flex-column">
          <Outlet />
        </main>
      </div>
      {/* </BudgetProvider> */}
    </>
  );
}
