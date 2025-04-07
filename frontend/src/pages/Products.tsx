import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts, postProduct } from "../api/routes";
import { ProductCard } from "../components/product/ProductCard";
import ProductForm from "../components/product/ProductForm";
import { DEFAULT_PRODUCT_DATA } from "../utils/constants";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  let newProduct = { ...DEFAULT_PRODUCT_DATA };

  const getProducts = async () => {
    try {
      const { status, data } = await fetchProducts();

      if (status === 200) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error getProducts Fn:", error);
    }
  };

  const addProduct = async (newProduct: any) => {
    try {
      const { status, data } = await postProduct(newProduct);

      if (status === 200) {
        getProducts();
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error addProduct fn:", error);
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
      {showForm && (
        <ProductForm
          formAction={"add"}
          formData={newProduct}
          onActionClick={addProduct}
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
      <div className="flex justify-between">
        <div>Search</div>
        <div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setShowForm(true)}
          >
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
