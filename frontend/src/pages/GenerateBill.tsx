import { CartItem } from "../components/Bill/CartItem";
import { fetchProducts } from "../api/routes";
import { useEffect, useState } from "react";
import { Bill } from "../components/Bill/Bill";

type QtyTracker = {
  [key: string]: number; // Object with string keys and number values
};

export const GenerateBill = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState<Array<any>>([[]]);
  const [billNo, setBillNo] = useState<number>(0);
  const [qtyTracker, setQtyTracker] = useState<QtyTracker>({});

  const getProducts = async () => {
    try {
      const { status, data } = await fetchProducts();

      if (status === 200) {
        const products = data.map((product: any) => ({
          _id: product._id,
          name: product.name,
          price: product.price,
          qty: 0,
        }));

        setProducts(products);
      }
    } catch (error) {
      console.error("Error addProduct fn:", error);
    }
  };

  const handleCounter = (item: any, action: string, billIndex: number) => {
    try {
      // Get the selected bill array
      const selectedBill = selectedProducts[billIndex];
      console.log(selectedProducts, billIndex);

      // Find the index of the product in the selected bill
      const existingProductIndex = selectedBill.findIndex(
        (product: any) => product._id === item._id
      );

      // Make a copy of the selected bill array
      let updatedProducts = [...selectedBill];

      if (action === "increment") {
        if (existingProductIndex === -1) {
          // If product does not exist, add a new one
          const newItem = {
            _id: item._id,
            name: item.name,
            price: item.price,
            qty: 1,
          };
          updatedProducts.push(newItem);
        } else {
          // If product exists, increment quantity
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            qty: updatedProducts[existingProductIndex].qty + 1,
          };
        }
        const newQty = {
          ...qtyTracker,
          [item._id]: (qtyTracker[item._id] || 0) + 1, // Ensure it starts from 0 if undefined
        };
        setQtyTracker(newQty);
      } else if (
        existingProductIndex !== -1 &&
        updatedProducts[existingProductIndex].qty > 0
      ) {
        if (updatedProducts[existingProductIndex].qty === 1) {
          // Remove product if quantity is 1
          updatedProducts = updatedProducts.filter(
            (product) => product._id !== item._id
          );
          let { [item._id]: _, ...updatedQtyTracker } = qtyTracker;
          setQtyTracker(updatedQtyTracker);
        } else {
          // Decrease quantity
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            qty: updatedProducts[existingProductIndex].qty - 1,
          };
          const newQty = {
            ...qtyTracker,
            [item._id]: (qtyTracker[item._id] || 2) - 1, // Ensure it starts from 0 if undefined
          };
          setQtyTracker(newQty);
        }
      }

      // Update the state immutably
      setSelectedProducts((prev) => {
        const shallowCopy = [...prev]; // Shallow copy of selectedProducts
        shallowCopy[billIndex] = updatedProducts; // Update specific bill index
        return shallowCopy; // Return updated array
      });

      console.log(updatedProducts);
    } catch (error) {
      console.error("Error in handleCounter function", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex gap-4 w-full h-full">
      <div className="w-[70%] content-start overflow-y-auto flex flex-wrap items-start gap-4">
        {products.map((product: any) => (
          <CartItem
            product={product}
            handleCounter={handleCounter}
            billIndex={billNo}
            quantity={qtyTracker[product._id] || 0}
          />
        ))}
      </div>
      <div className=" w-[30%]">
        <div className="h-full p-2 border border-gray-300 rounded-lg bg-[#0070E0]">
          <div
            style={{
              height: "5%",
              margin: "10px 0px",
              display: "flex",
              gap: "2",
            }}
          >
            {selectedProducts.map((bill: any, index: number) => (
              <span
                className={`px-3 py-1 border ${
                  index == billNo
                    ? "bg-[#0070E0] text-white"
                    : "bg-[white] text-[#0070E0]"
                }`}
                style={{
                  borderRadius: "5px",
                }}
                onClick={() => {
                  setBillNo(index);
                  const newQty = selectedProducts[index].reduce(
                    (acc: any, { _id, qty }: any) => {
                      acc[_id] = qty;
                      return acc;
                    },
                    {}
                  );
                  setQtyTracker(newQty);
                }}
              >
                Bill {index + 1}
              </span>
            ))}
            {selectedProducts.length < 5 && (
              <span
                className="px-3 py-1 border"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  color: "#0070E0",
                }}
                onClick={() => {
                  setSelectedProducts((prev) => [...prev, []]);
                  setBillNo(selectedProducts.length);
                  setQtyTracker({});
                }}
              >
                +
              </span>
            )}
          </div>
          <div
            style={{
              height: "90%",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <Bill products={selectedProducts[billNo]} />
          </div>
        </div>
      </div>
    </div>
  );
};
