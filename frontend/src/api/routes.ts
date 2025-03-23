import { client } from "./axios";

export const postProduct = async (productData: any) => {
  try {
    const res = await client("POST", "/admin/product", productData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchProduct = async () => {
  try {
    const res = await client("POST", "/get/product");
    console.log("GEt", res);

    return res;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productData: any) => {
  try {
    const res = await client("UPDATE", "/admin/product", productData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const res = await client("DELETE", `/admin/product/${productId}`);
    console.log("In dele", res);

    return res;
  } catch (error) {
    throw error;
  }
};
