import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "../components/layout/SideBar";

const Layout = () => {
  const menuOptions = {
    "/": "Dashboard",
    "/billing": "Generate Bill",
    "/products": "Products",
    "/sales": "Sales & Expenses",
    "/staffs": "Staffs",
  };
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 bg-gray-100">
        <header className="p-4 text-lg font-bold border-b border-gray-300">
          {menuOptions[pathname]}
        </header>
        <main className="flex-1 bg-white p-4 overflow-auto">
          <Outlet />
        </main>
        <footer className="bg-gray-100 text-center text-sm">
          Made with &hearts;
        </footer>
      </div>
    </div>
  );
};

export default Layout;
