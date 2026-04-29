import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BudgetProvider } from "../contexts/BudgetContext";
export default function Base() {
  return (
    <>
      {/* <BudgetProvider> */}
      <Navbar></Navbar>
      <main className="container py-4">
        <Outlet />
      </main>
      {/* </BudgetProvider> */}
    </>
  );
}
