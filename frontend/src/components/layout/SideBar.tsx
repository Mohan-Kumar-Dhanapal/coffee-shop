import { useLocation, useNavigate } from "react-router-dom";
import DashBoradImage from "../../asserts/images/dashboard.svg";
import BillingImage from "../../asserts/images/rupee.svg";
import ProductsImage from "../../asserts/images/food.svg";
import SalesImage from "../../asserts/images/expense.png";
import StaffImage from "../../asserts/images/staff.png";

export const SideBar = () => {
  const menuOptions = [
    { menu: "Dashboard", path: "/", image: DashBoradImage },
    { menu: "Generate Bill", path: "/billing", image: BillingImage },
    { menu: "Products", path: "/products", image: ProductsImage },
    { menu: "Sales & Expenses", path: "/sales", image: SalesImage },
    { menu: "Staffs", path: "/staffs", image: StaffImage },
  ];

  const { pathname } = useLocation();
  console.log(pathname);

  const navigate = useNavigate();

  return (
    <nav className="w-[200px] bg-[#F8F8F8] text-black border-r border-r-[#E0E0E0]">
      <h2 className="p-4 text-lg font-bold border-b border-gray-300">
        Coffee Shop
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }} className="">
        {menuOptions.map((item) => (
          <li
            key={item.menu}
            className={`flex m-2 p-2 cursor-pointer hover:bg-[#8303f9] hover:rounded-[10px] hover:text-white focus:bg-[#8303f9] focus:rounded-[10px] focus:text-white ${
              pathname == item.path
                ? "bg-[#8303f9] rounded-[10px] text-white"
                : ""
            }`}
            onClick={() => navigate(`${item.path}`)}
          >
            <img className="mr-2 w-[15px]" src={item.image} alt={item.menu} />{" "}
            {item.menu}
          </li>
        ))}
      </ul>
    </nav>
  );
};
