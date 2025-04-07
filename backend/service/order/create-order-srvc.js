import { Finance } from "../../models/finance.js";
import { createOrderRepository as repository } from "../../repository/order/create-order-repo.js";

export const createOrderService = async (data, res) => {
  try {
    const orderTotal = data.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const order = { total: orderTotal, items: data };
    return await repository(order, res);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
