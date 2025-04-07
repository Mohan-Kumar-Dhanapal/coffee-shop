import React, { useState } from "react";
import Modal from "../shared/Modal";
import Wallpaper from "../../asserts/images/wallpaper.jpg";

interface FormProps {
  formAction: string;
  formData: any;
  onActionClick: any;
  onClose: any;
}

export const ExpenseForm = ({
  formAction,
  formData,
  onActionClick,
  onClose,
}: FormProps) => {
  const [staffData, setStaffData] = useState(
    formData || {
      name: "",
      dob: "",
      address: "",
      contact: "",
      salary: "",
      advance: "",
    }
  );

  const handleOnChange = (e: any) => {
    try {
      const { name, value } = e.target;

      setStaffData((prev: any) => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error("Error in handleOnChange Fn", error);
    }
  };

  return (
    <Modal>
      <div className="flex h-[300px]">
        <div className="w-[30%]">
          <img
            src={Wallpaper}
            alt="Product Image"
            className="w-full h-[300px] object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between flex-col ml-10 w-[70%]">
          <div className="flex justify-between">
            <label htmlFor="name">Expense title</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 w-[70%] rounded-[5px]"
              value={staffData.name}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="address">Type</label>
            <textarea
              name="address"
              value={staffData.address}
              onChange={handleOnChange}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="contact">Amount</label>
            <input
              type="text"
              name="contact"
              onChange={handleOnChange}
              value={staffData.contact}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="salary">Dealer</label>
            <input
              type="text"
              name="salary"
              onChange={handleOnChange}
              value={staffData.salary}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="advance">Part payment</label>
            <input
              type="text"
              name="advance"
              onChange={handleOnChange}
              value={staffData.advance}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <button onClick={onClose} className="btn-error">
              Cancel
            </button>
            <button
              onClick={() => {
                onActionClick(staffData);
              }}
              className="btn-primary"
            >
              {formAction == "add" ? "Add Product" : "Update product"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
