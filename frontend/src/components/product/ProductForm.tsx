import React, { useState } from "react";
import Modal from "../shared/Modal";
import Wallpaper from "../../asserts/images/wallpaper.jpg";

interface FormProps {
  formAction: string;
  formData: any;
  onActionClick: any;
  onClose: any;
}

const ProductForm = ({
  formAction,
  formData,
  onActionClick,
  onClose,
}: FormProps) => {
  const defalutProduct = { name: "", price: "", category: "", dealer: "" };
  const [productData, setProductData] = useState(formData || defalutProduct);

  const handleOnChange = (e: any) => {
    try {
      const { name, value } = e.target;
      console.log("Mohan", name, value);

      setProductData((prev: any) => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error("Error in handleOnChange Fn", error);
    }
  };

  return (
    <Modal>
      <div className="flex h-[300px]">
        <div style={{ width: "30%" }}>
          <img
            src={Wallpaper}
            alt="Product Image"
            className="w-full h-[300px] object-cover rounded-md"
          />
        </div>
        <div
          className="flex justify-between flex-col ml-10"
          style={{ width: "70%" }}
        >
          <div className="flex justify-between">
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 w-[70%] rounded-[5px]"
              value={productData.name}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleOnChange}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="dealer">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleOnChange}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="dealer">Dealer</label>
            <input
              type="text"
              name="dealer"
              onChange={handleOnChange}
              value={productData.dealer}
              className="border border-gray-300 w-[70%] rounded-[5px]"
            />
          </div>

          <div className="flex justify-between">
            <button onClick={onClose} className="btn-error">
              Cancel
            </button>
            <button
              onClick={() => {
                onActionClick(productData);
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

export default ProductForm;
