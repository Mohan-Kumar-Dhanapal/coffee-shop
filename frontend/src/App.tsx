import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import { GenerateBill } from "./pages/GenerateBill";
import { Products } from "./pages/Products";
import { SalesAndExpenses } from "./pages/SalesAndExpenses";
import { Staffs } from "./pages/Staffs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="billing" element={<GenerateBill />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<SalesAndExpenses />} />
          <Route path="staffs" element={<Staffs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
