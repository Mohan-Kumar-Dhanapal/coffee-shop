import { client } from "./axios";

export const postProduct = async (productData: any) => {
  try {
    const res = await client("POST", "/admin/product", productData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const res = await client("POST", "/get/product");
    return res;
  } catch (error) {
    throw error;
  }
};

export const putProduct = async (productData: any) => {
  try {
    const res = await client("PUT", "/admin/product", productData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const res = await client("DELETE", `/admin/product/${productId}`);
    return res;
  } catch (error) {
    throw error;
  }
};
