import BillModel from "../../models/bill.js";
import { Finance } from "../../models/finance.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const createTodaysFinance = async () => {
  try {
    const newRecord = new Finance({
      date: new Date(),
      sales: 0,
      expense: 0,
    });

    const response = await newRecord.save();

    if (response) {
      const { _id } = response;
      return _id;
    }

    return null;
  } catch (error) {
    console.error("Error in createtodaysFinance", error);
    return null;
  }
};

export const getFinanceId = async () => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    let financeId;
    const todayStatus = await Finance.findOne({
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    if (!todayStatus) {
      financeId = await createTodaysFinance();
    } else {
      const { _id } = todayStatus;
      financeId = _id;
    }
    return financeId;
  } catch (error) {
    return null;
  }
};

export const updateSalesValue = async (id, currentSale) => {
  try {
    const updatedRecord = await Finance.findByIdAndUpdate(
      id,
      { $inc: { sales: currentSale } },
      { new: true }
    );
  } catch (error) {
    return null;
  }
};

export const createOrderRepository = async (order, res) => {
  try {
    const orders = new BillModel(order);

    const financeId = await getFinanceId();
    await updateSalesValue(financeId, order.total);

    await orders
      .save()
      .then(() => {
        return res.send({ status: 200, message: "Order added successfully" });
      })
      .catch((err) => {
        return res.send({ status: 500, message: "Error in DB insertion" });
      });
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};
