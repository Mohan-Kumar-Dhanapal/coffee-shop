import { useState } from "react";
import { ExpenseForm } from "../components/expense/ExpenseForm";
import InfoCard from "../components/shared/InfoCard";

export const SalesAndExpenses = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      {showForm && (
        <ExpenseForm
          formData={{
            name: "",
            dob: "",
            address: "",
            contact: "",
            salary: "",
            advance: "",
          }}
          formAction="add"
          onActionClick={() => {}}
          onClose={() => {}}
        />
      )}
      <div className="flex w-[100%] h-full">
        {/* Sales Section */}
        <div className="w-1/2 h-full p-2">
          <h2 className="my-4 font-bold">Sales</h2>
          <div className="flex flex-wrap gap-2 items-start  bg-white shadow-lg rounded-lg p-4 h-[90%]">
            <InfoCard title={"Bill No: "} description={"2000"} />
            <InfoCard title={"Bill No: "} description={"2000"} />
            <InfoCard title={"Bill No: "} description={"2000"} />
            <InfoCard title={"Bill No: "} description={"2000"} />
            <InfoCard title={"Bill No: "} description={"2000"} />
            <InfoCard title={"Bill No: "} description={"2000"} />
          </div>
        </div>

        {/* Expenses Section */}
        <div className="w-1/2 h-full p-2">
          <div className="flex justify-between">
            <h2 className="my-4 font-bold">Expenses</h2>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setShowForm(true);
              }}
            >
              New Expense
            </button>
          </div>

          <div className="flex flex-wrap gap-2 items-start  bg-white shadow-lg rounded-lg p-4 h-[90%]">
            <InfoCard title={"Expense"} description={"2000"} />
            <InfoCard title={"Expense"} description={"2000"} />
            <InfoCard title={"Expense"} description={"2000"} />
            <InfoCard title={"Expense"} description={"2000"} />
            <InfoCard title={"Expense"} description={"2000"} />
            <InfoCard title={"Expense"} description={"2000"} />
          </div>
        </div>
      </div>
    </>
  );
};
