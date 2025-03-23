import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../api/routes";
import { ProductCard } from "../components/product/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { status, data } = await fetchProducts();

      if (status === 200) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteProductById = async (id: string) => {
    try {
      const { status } = await deleteProduct(id);

      if (status === 200) {
        const updatedProducts = products.filter(
          (product: any) => product._id != id
        );

        setProducts(updatedProducts);
      }
    } catch (error) {
      console.error("Error in removeProduct fn", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <div>Search</div>
        <div>
          <button type="button" className="btn-primary">
            Add product
          </button>
        </div>
      </div>
      <div className="flex gap-4 mt-6 flex-wrap">
        {products.map((product: any) => (
          <ProductCard
            data={product}
            onDelete={() => {
              deleteProductById(product._id);
            }}
          />
        ))}
      </div>
    </>
  );
};
