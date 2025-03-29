import { useState } from "react";
import Wallpaper from "../../asserts/images/wallpaper.jpg";
import { putProduct } from "../../api/routes";
import { DEFAULT_PRODUCT_DATA } from "../../utils/constants";
import { ScreenLoader } from "../shared/ScreenLoader";
import ProductForm from "../product/ProductForm";

export const StaffCard = (props: any) => {
  const { data, onDelete } = props;
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState({ ...DEFAULT_PRODUCT_DATA });

  const updateProduct = async (updatedData: any) => {
    try {
      try {
        setLoading(true);
        const { status, data } = await putProduct(updatedData);

        if (status === 200) {
          setLoading(false);
          setShowForm(false);
        }
      } catch (error) {
        console.error("Error addProduct fn:", error);
      }
    } catch (error) {
      console.error("Error in updateProduct Fn", error);
    }
  };

  return (
    <>
      {showForm && (
        <ProductForm
          formAction={"update"}
          formData={productData}
          onActionClick={updateProduct}
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}

      {loading && <ScreenLoader />}

      <article className="flex gap-4 self-start p-4 border border-gray-300 rounded-lg shadow-md w-[600px]">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={Wallpaper}
            alt="Product Image"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-2 flex flex-col justify-between">
          <div>
            <h5 className="text-lg font-bold m-0 break-words">
              Name: {data.name}
            </h5>
            <p className="text-gray-700 my-1">
              {" "}
              <span className="font-bold">Age :</span> {data.dealer}
            </p>

            <p className="text-gray-700 my-1">
              {" "}
              <span className="font-bold">Contact :</span> {data.dealer}
            </p>
            <p className="text-green-700 my-1 font-bold">
              Salary: &#x20B9; {data.price}
            </p>

            <p className="text-red-700 my-1 font-bold">
              Advance : &#x20B9; {data.price}
            </p>

            <p className="text-gray-700 my-1">
              <span className="font-bold">Address :</span> {data.category}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => {
                setLoading(true);
                onDelete(data._id);
                setLoading(false);
              }}
              aria-label="Delete Product"
              className="btn-error"
            >
              Delete
            </button>

            <button
              aria-label="Edit  Product"
              className="btn-primary"
              onClick={() => {
                setProductData(data);
                setShowForm(true);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
