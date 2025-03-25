import { useState } from "react";
import Wall from "../../asserts/images/wallpaper.jpg";

export const CartItem = ({ product, handleCounter }: any) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <article className="flex gap-4 p-4 border border-gray-300 rounded-lg shadow-md w-[280px]">
      {/* Product Image */}
      <div style={{ flex: "1" }}>
        <img
          src={Wall}
          alt="Product Image"
          className="w-full h-[100px] object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-2 flex flex-col justify-between">
        <div>
          <h5 className="text-lg font-bold m-0">{product.name}</h5>
          <p className="text-gray-700 my-1">&#x20B9; {product.price}</p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 mt-2">
          <button
            aria-label="Decrease quantity"
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer border-none"
            onClick={() => {
              if (quantity != 0) {
                setQuantity((prev) => prev - 1);
              }
              handleCounter(product, "decrement");
            }}
          >
            -
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded">
            {quantity}
          </span>
          <button
            aria-label="Increase quantity"
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
            onClick={() => {
              setQuantity((prev) => prev + 1);
              handleCounter(product, "increment");
            }}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};
